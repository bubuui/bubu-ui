<template>
  <div class="ysj-image-container">
    <div class="ysj-image-container-header">
      <slot></slot>
      <div v-if="!config.header">
        {{ dataConfig.current + '/' + dataConfig.urls.length }}
      </div>
      <div
        class="ysj-image-opt"
        v-if="!config.header && browserRedirect === 'Desktop'"
      >
        <button @click="rotate('right')">
          <BuIcon name="youxuanzhuan" :size="30" style="color: #fff" />
        </button>
        <button @click="rotate('left')">
          <BuIcon name="zuoxuanzhuan" :size="30" style="color: #fff" />
        </button>
        <button @click="zoom('big')">
          <svg class="iconpark-icon"><use href="#zoom-in"></use></svg>
        </button>
        <button @click="zoom('small')">
          <svg class="iconpark-icon"><use href="#zoom-out"></use></svg>
        </button>
        <button @click="dwonload">
          <svg class="iconpark-icon"><use href="#download-four"></use></svg>
        </button>
        <button @click="getFull">
          <svg class="iconpark-icon"><use href="#full-screen"></use></svg>
        </button>
        <button @click="close">
          <svg class="iconpark-icon"><use href="#close"></use></svg>
        </button>
      </div>
    </div>
    <div
      class="ysj-image-container-content"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
      v-if="browserRedirect === 'Desktop'"
    >
      <span v-show="loading" class="loading-wrapper">图片加载中</span>
      <span v-show="error" class="loading-wrapper">图片加载失败</span>
      <div :style="{ transform: `rotate(${rotation}deg)` }" class="ysj-img-rotate">
        <img ref="imgDom" v-show="!loading" alt="" :style="imgTransform" />
      </div>
    </div>
    <div v-else>
      <swipe
        class="ysj-my-swipe"
        :active="dataConfig.current - 1"
        @change="changeSwipe"
      >
        <swipe-item
          v-for="(item, index) in config.urls"
          :key="item"
          @touchstart="touchstart"
          @touchmove="touchmove"
          @touchend="touchend"
        >
          <img
            :src="item"
            :style="index === dataConfig.current - 1 ? imgStyle : {}"
            alt=""
            class="img-item"
          />
        </swipe-item>
      </swipe>
    </div>
    <div
      class="ysj-image-arraw-left"
      v-if="dataConfig.current > 1 && browserRedirect === 'Desktop'"
      @click.stop="arrawLeft"
    >
      <svg class="iconpark-icon"><use href="#left"></use></svg>
    </div>
    <div
      class="ysj-image-arraw-right"
      v-if="
        dataConfig.current < dataConfig.urls.length &&
        browserRedirect === 'Desktop'
      "
      @click.stop="arrawRight"
    >
      <svg class="iconpark-icon"><use href="#right"></use></svg>
    </div>
  </div>
</template>
<script lang="ts">
import { ImgPreviewConfigType } from './img-preview-type';
// config = { urls: [], current: 1, loop: false, header: vdom, success, fail }
// loop 是否可循环预览
// 右上角默认 关闭，下载，放大/缩小，自定义
import { defineComponent, PropType, ref, reactive, CSSProperties } from 'vue';
import { loadIcon } from './icon';
import swipe from './components/swipe/index.vue';
import swipeItem from './components/swipeItem/index.vue';
import { preventDefault } from './utils';
import { BuIcon } from '@bubu-ui/components/icon';
import { useTouch } from '@bubu-ui/hook';
const touch = useTouch();
let touchStartTime: number;
let startScale: number;
let startDistance: number;
let startMoveX: number;
let startMoveY: number;
let doubleTapTimer: any;
export default defineComponent({
  name: 'img-preview',
  components: {
    swipe,
    swipeItem,
    BuIcon
  },
  props: {
    config: {
      type: Object as PropType<ImgPreviewConfigType>,
      default() {
        return {
          maxZoom: 3
        };
      }
    }
  },
  setup() {
    const imgDom = ref();
    const dataConfig = ref<ImgPreviewConfigType>({
      maxZoom: 3,
      current: 0,
      urls: []
    });
    const loading = ref(false);
    const error = ref(false);
    const imgInfo = reactive({
      w: 0,
      h: 0
    });
    const zoomRate = ref(1);
    const state = reactive({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    });
    const isHidden = ref(false);
    const imgPosition = reactive({
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      originX: 0,
      originY: 0,
      isdown: false
    });
    const rotation = ref(0)
    return {
      imgDom,
      dataConfig,
      loading,
      imgInfo,
      loadIcon,
      error,
      state,
      zoomRate,
      isHidden,
      imgPosition,
      rotation
    };
  },
  computed: {
    browserRedirect() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? 'Mobile'
        : 'Desktop';
    },
    imgStyle() {
      const { scale, moveX, moveY, moving, zooming } = this.state;
      const style: CSSProperties = {
        transitionDuration: zooming || moving ? '0s' : '.3s'
      };
      if (scale !== 1) {
        const offsetX = moveX / scale;
        const offsetY = moveY / scale;
        style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
      }
      return style;
    },
    imgTransform() {
      const { offsetX, offsetY, isdown } = this.imgPosition;
      const style: CSSProperties = {
        transitionDuration: isdown ? '0s' : '.3s',
        transform: `translate(${offsetX}px, ${offsetY}px)`
      };
      return style;
    }
  },
  methods: {
    loadImage() {
      const windowWidth = window.innerWidth;
      const windowheight = window.innerHeight;
      const rate = windowWidth / windowheight;
      const img = this.$refs.imgDom as HTMLImageElement;
      this.$nextTick(() => {
        this.loading = true;
        img.removeAttribute('width');
        img.removeAttribute('height');
        if (this.dataConfig) {
          img.src = this.dataConfig.urls[this.dataConfig.current - 1];
        }
        this.error = false;
        img.onload = () => {
          this.config.success && this.config.success('success');
          const imgRate = img.width / img.height;
          this.imgInfo.w = img.width;
          this.imgInfo.h = img.height;
          if (imgRate > rate) {
            if (img.width > windowWidth * 0.7) {
              img.style.width = windowWidth * 0.7 + 'px';
              img.style.height =
                img.height / (img.width / (windowWidth * 0.7)) + 'px';
              this.imgInfo.w = windowWidth * 0.7;
              this.imgInfo.h = img.height / (img.width / (windowWidth * 0.7));
            } else {
              img.style.width = img.width + 'px';
              img.style.height = img.height + 'px';
            }
          } else {
            if (img.height > windowheight * 0.7) {
              img.style.height = windowheight * 0.7 + 'px';
              img.style.width =
                img.width / (img.height / (windowheight * 0.7)) + 'px';
              this.imgInfo.w = img.width / (img.height / (windowheight * 0.7));
              this.imgInfo.h = windowheight * 0.7;
            } else {
              img.style.width = img.width + 'px';
              img.style.height = img.height + 'px';
            }
          }
          this.loading = false;
        };
        img.onerror = (e) => {
          this.loading = false;
          this.error = true;
          this.config.fail && this.config.fail('fail');
        };
      });
    },
    arrawRight() {
      if (
        this.dataConfig.current == this.dataConfig.urls.length &&
        !this.dataConfig.loop
      ) {
        return;
      }
      this.resetImgPositon();
      this.zoomRate = 1;
      if (
        this.dataConfig.current === this.dataConfig.urls.length &&
        this.dataConfig.loop
      ) {
        this.dataConfig.current = 1;
      } else {
        this.dataConfig.current += 1;
      }
      this.loadImage();
    },
    arrawLeft() {
      if (this.dataConfig.current == 1 && !this.dataConfig.loop) {
        return;
      }
      this.resetImgPositon();
      this.zoomRate = 1;
      if (this.dataConfig.loop && this.dataConfig.current == 1) {
        this.dataConfig.current = this.dataConfig.urls.length;
      } else {
        this.dataConfig.current -= 1;
      }
      this.loadImage();
    },
    getFull() {
      if (this.isFull()) {
        const full = document.exitFullscreen;
        if (full) {
          full.call(document);
        } else if ((window as any).ActiveXObject) {
          const ws = new (window as any).ActiveXObject('WScript.Shell');
          ws && ws.SendKeys('F11');
        }
      }
      const element = document.documentElement as any;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        // 兼容火狐
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        // 兼容谷歌
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        // 兼容IE
        element.msRequestFullscreen();
      }
    },
    isFull() {
      return document.fullscreenElement || false;
    },
    close() {
      if (this.isFull()) {
        const full = document.exitFullscreen;
        if (full) {
          full.call(document);
        } else if ((window as any).ActiveXObject) {
          const ws = new (window as any).ActiveXObject('WScript.Shell');
          ws && ws.SendKeys('F11');
        }
      }
      const dom = document.getElementsByClassName('ysj-imgage-wrapper');
      (dom[0] as HTMLDivElement).style.display = 'none';
    },
    touchstart(e: TouchEvent) {
      if (this.browserRedirect === 'Desktop') {
        return;
      }
      const { touches } = e;

      touch.start(e);
      this.state.moving = touches.length === 1 && this.state.scale !== 1;
      this.state.zooming = touches.length === 2;
      startMoveX = this.state.moveX;
      startMoveY = this.state.moveY;
      touchStartTime = Date.now();
      if (this.state.zooming) {
        startScale = this.state.scale;
        startDistance = this.getDistance(e.touches);
      }
    },
    touchmove(e: TouchEvent) {
      const { touches } = e;
      touch.move(e);
      if (this.state.moving || this.state.zooming) {
        preventDefault(e, true);
      }
      const maxZoom = this.config.maxZoom || 3;
      if (this.state.moving) {
        const { deltaX, deltaY } = touch;
        const moveX = deltaX.value + startMoveX;
        const moveY = deltaY.value + startMoveY;
        const maxMoveX = Number((maxZoom / 2) * window.innerWidth);
        const maxMoveY = Number((maxZoom / 2) * window.innerHeight);
        this.state.moveX = this.clamp(moveX, -maxMoveX, maxMoveX);
        this.state.moveY = this.clamp(moveY, -maxMoveY, maxMoveY);
      }

      if (this.state.zooming && touches.length === 2) {
        const distance = this.getDistance(touches);
        const scale = (startScale * distance) / startDistance;
        if (scale < 1) {
          // this.state.scale = 1;
          this.state.scale = scale;
        } else if (scale > maxZoom) {
          this.state.scale = maxZoom;
        } else {
          this.state.scale = scale;
        }
      }
    },
    touchend(e: TouchEvent) {
      let stopPropagation = false;
      if (this.state.moving || this.state.zooming) {
        stopPropagation = true;

        if (
          this.state.moving &&
          startMoveX === this.state.moveX &&
          startMoveY === this.state.moveY
        ) {
          stopPropagation = false;
        }
        const maxZoom = this.config.maxZoom || 3;
        if (!e.touches.length) {
          if (this.state.zooming) {
            const maxMoveX = Number((maxZoom / 2) * window.innerWidth);
            const maxMoveY = Number((maxZoom / 2) * window.innerHeight);
            this.state.moveX = this.clamp(
              this.state.moveX,
              -maxMoveX,
              maxMoveX
            );
            this.state.moveY = this.clamp(
              this.state.moveY,
              -maxMoveY,
              maxMoveY
            );
            this.state.zooming = false;
          }
          this.state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;

          if (this.state.scale < 1) {
            this.resetScale();
          }
        }
      } else {
        this.checkTap();
      }
      preventDefault(e, stopPropagation);
      touch.reset();
    },
    getDistance(touches: TouchList) {
      return Math.sqrt(
        (touches[0].clientX - touches[1].clientX) ** 2 +
          (touches[0].clientY - touches[1].clientY) ** 2
      );
    },
    changeSwipe(index: number) {
      this.dataConfig.current = index + 1;
      this.resetScale();
    },
    clamp(num: number, min: number, max: number): number {
      return Math.min(Math.max(num, min), max);
    },
    resetScale() {
      this.state.scale = 1;
      this.state.moveX = 0;
      this.state.moveY = 0;
    },
    checkTap() {
      const { offsetX, offsetY } = touch;
      const deltaTime = Date.now() - touchStartTime;
      const TAP_TIME = 250;
      const TAP_OFFSET = 5;
      if (
        offsetX.value < TAP_OFFSET &&
        offsetY.value < TAP_OFFSET &&
        deltaTime < TAP_TIME
      ) {
        if (doubleTapTimer) {
          clearTimeout(doubleTapTimer);
          doubleTapTimer = null;
          // toggleScale();
        } else {
          doubleTapTimer = setTimeout(() => {
            this.close();
            doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    },
    zoom(type: string) {
      this.resetImgPositon();
      const maxZoom = this.config.maxZoom || 3;
      if (this.zoomRate >= maxZoom && type === 'big') {
        return;
      }
      if (type === 'big') {
        this.zoomRate = Number((this.zoomRate + 0.2).toFixed(1));
      } else {
        if (this.zoomRate <= 0.2) {
          return;
        } else {
          this.zoomRate = Number((this.zoomRate - 0.2).toFixed(1));
        }
      }
      // console.log("zoomRate", this.zoomRate);
      const img = this.$refs.imgDom as HTMLImageElement;
      const width = this.imgInfo.w * this.zoomRate;
      const height = this.imgInfo.h * this.zoomRate;
      if (img) {
        img.style.width = width + 'px';
        img.style.height = height + 'px';
      }
      if (width > window.innerWidth || height > window.innerHeight) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
    },
    // 监听图片事件
    mousedown(e: MouseEvent) {
      e.preventDefault();
      if (this.isHidden) {
        this.imgPosition.startX = e.clientX;
        this.imgPosition.startY = e.clientY;
        this.imgPosition.isdown = true;
        (this.$refs.imgDom as HTMLImageElement).style.cursor = 'move';
      }
    },
    mousemove(e: MouseEvent) {
      if (this.isHidden && this.imgPosition.isdown) {
        const { originX, originY, startX, startY } = this.imgPosition;
        let x = originX + e.clientX - startX;
        let y = originY + e.clientY - startY;
        this.imgPosition.offsetX = x;
        this.imgPosition.offsetY = y;
      }
    },
    mouseup(e: MouseEvent) {
      e.preventDefault();
      (this.$refs.imgDom as HTMLImageElement).style.cursor = 'default';
      this.imgPosition.isdown = false;
      this.imgPosition.originX = this.imgPosition.offsetX;
      this.imgPosition.originY = this.imgPosition.offsetY;
    },
    resetImgPositon() {
      this.imgPosition.offsetX = 0;
      this.imgPosition.offsetY = 0;
      this.imgPosition.originX = 0;
      this.imgPosition.originY = 0;
    },
    init() {
      window.addEventListener('mousewheel', (e: any) => {
        const dom = document.getElementsByClassName('ysj-imgage-wrapper');
        if ((dom[0] as HTMLDivElement).style.display !== 'none') {
          if (e.wheelDelta > 0) {
            this.zoom('big');
          } else {
            this.zoom('small');
          }
        }
      });
    },
    dwonload() {
      let url1 = this.dataConfig.urls[this.dataConfig.current - 1];
      window.open(url1, '_blank');
    },
    rotate(type: string) {
      if(type === 'right') {
        this.rotation += 90
      } else {
        this.rotation -= 90
      }
      
    }
  },
  mounted() {
    this.loadIcon();
    if (this.config) {
      this.init();
      this.dataConfig = Object.assign({}, this.config);
      if (this.browserRedirect === 'Desktop') {
        this.loadImage();
      }
    }
  }
});
</script>
<style lang="css" scoped>
.iconpark-icon {
  width: 24px;
  height: 24px;
  color: #fff;
}
.ysj-image-container {
  background-color: #000;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  color: #fff;
}
.ysj-image-container-header {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  height: 44px;
  width: 100%;
  line-height: 44px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  z-index: 99;
}
.ysj-image-opt {
  display: flex;
  align-content: center;
}
.ysj-image-opt button,
.ysj-image-opt a {
  cursor: pointer;
  display: inline-block;
  height: 44px;
  line-height: 44px;
  width: 28px;
  margin: 0 10px;
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  border-width: 0;
  text-align: center;
}

.ysj-image-opt button:focus,
.ysj-image-opt a:focus {
  outline-width: 0;
}
.ysj-image-arraw-left {
  position: absolute;
  left: 10px;
  top: 50%;
  cursor: pointer;
  width: 30px;
}
.ysj-image-arraw-right {
  position: absolute;
  right: 10px;
  top: 50%;
  cursor: pointer;
  width: 30px;
}
.current-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  user-select: none;
}
.loading-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #999;
}

.ysj-my-swipe {
  height: calc(100vh - 50px);
}
.ysj-my-swipe .ysj-swipe-item {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.ysj-my-swipe .img-item {
  max-width: 100%;
  max-height: 100%;
}

.ysj-image-container-content {
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ysj-image-container-content img {
  transition: all 0.3 ease;
}
.ysj-img-rotate {
  transition: transform 0.5s; 
}
</style>
