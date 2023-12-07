<template>
  <div class="ysj-swipe-wrapper" v-bind="$attrs">
    <div
      class="ysj-swipe__track"
      ref="trackDom"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
const CHECKCONST = window.outerWidth / 4;
export default defineComponent({
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    active: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const trackDom = ref<HTMLDivElement>();
    const startX = ref(0);
    const startY = ref(0);
    const deltaX = ref(0);
    const deltaY = ref(0);
    const offsetX = ref(0);
    const offsetY = ref(0);
    const state = reactive({
      active: 0,
      width: 0,
      swiping: false
    });
    return {
      trackDom,
      startX,
      startY,
      state,
      deltaX,
      deltaY,
      offsetX,
      offsetY
    };
  },
  methods: {
    getStyle() {
      const dom = this.$refs.trackDom as HTMLDivElement;
      this.state.width = dom.clientWidth;
      dom.style.width = dom.clientWidth * dom.children.length + 'px';
    },
    touchstart(event: TouchEvent) {
      this.reset();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
      this.state.swiping = true;
    },
    touchmove(event: TouchEvent) {
      if (this.state.swiping) {
        const touch = event.touches[0];
        this.deltaX = (touch.clientX < 0 ? 0 : touch.clientX) - this.startX;
        this.deltaY = touch.clientY - this.startY;
        this.offsetX = Math.abs(this.deltaX);
        this.offsetY = Math.abs(this.deltaY);
        if (this.deltaX > 0) {
          // 向右滑
          if (this.checkActive('right')) {
            this.move('right');
          }
        } else if (this.deltaX < 0) {
          // 向左滑
          if (this.checkActive('left')) {
            this.move('left');
          }
        }
      }
    },
    touchend(event: TouchEvent) {
      if (!this.state.swiping) {
        return;
      }
      const dom = this.$refs.trackDom as HTMLDivElement;
      this.state.swiping = false;
      if (this.deltaX > CHECKCONST) {
        // 向右滑
        if (this.loop) {
          if (this.state.active === 0) {
            this.state.active = dom.children.length - 1;
          }
        }
        if (this.checkActive('right')) {
          this.state.active -= 1;
          this.move('right');
        }
      } else if (this.deltaX < -CHECKCONST) {
        // 向左滑
        if (this.loop) {
          if (this.state.active === dom.children.length - 1) {
            this.state.active = 0;
          }
        }
        if (this.checkActive('left')) {
          this.state.active += 1;
          this.move('left');
        }
      } else {
        this.move('');
      }
    },
    reset() {
      this.startX = 0;
      this.startY = 0;
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    move(type: string) {
      const dom = this.$refs.trackDom as HTMLDivElement;
      dom.style.transitionDuration = `${this.state.swiping ? 0 : 500}ms`;
      if (type === 'left') {
        let offset = this.state.active * this.state.width;
        if (this.state.swiping) {
          offset += this.offsetX;
        }
        dom.style.transform = `translateX(-${offset}px)`;
      } else if (type === 'right') {
        let offset = -this.state.active * this.state.width;
        if (this.state.swiping) {
          offset += this.offsetX;
        }
        dom.style.transform = `translateX(${offset}px)`;
      } else {
        let offset = this.state.active * this.state.width;
        dom.style.transform = `translateX(-${offset}px)`;
      }
      if (!this.state.swiping && type) {
        this.$emit('change', this.state.active);
      }
    },
    checkActive(type: string) {
      const dom = this.$refs.trackDom as HTMLDivElement;
      let result = true;
      if (
        !this.loop &&
        this.state.active === dom.children.length - 1 &&
        type === 'left'
      ) {
        result = false;
      } else if (!this.loop && this.state.active === 0 && type === 'right') {
        result = false;
      }
      console.log('result', result, type);
      return result;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getStyle();
    });
  },
  watch: {
    active: {
      handler(n: number) {
        this.state.active = n;
        this.$nextTick(() => {
          this.move('');
        });
      },
      immediate: true
    }
  }
});
</script>
<style lang="css" scoped>
.ysj-swipe-wrapper {
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  cursor: grab;
  height: 100%;
}
.ysj-swipe__track {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  transition-property: transform;
}
</style>
