import { defineComponent as x, ref as h, reactive as d } from "vue";
import { loadIcon as Y } from "./icon.mjs";
import y from "./components/swipe/index.vue.mjs";
import P from "./components/swipeItem/index.vue.mjs";
import { preventDefault as w } from "./utils.mjs";
import { BuIcon as b } from "../../icon/index.mjs";
import { useTouch as C } from "@bubu-ui/hook";
const l = C();
let p, u, v, f, g, m;
const M = x({
  name: "img-preview",
  components: {
    swipe: y,
    swipeItem: P,
    BuIcon: b
  },
  props: {
    config: {
      type: Object,
      default() {
        return {
          maxZoom: 3
        };
      }
    }
  },
  setup() {
    const t = h(), e = h({
      maxZoom: 3,
      current: 0,
      urls: []
    }), s = h(!1), i = h(!1), o = d({
      w: 0,
      h: 0
    }), n = h(1), a = d({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    }), r = h(!1), c = d({
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      originX: 0,
      originY: 0,
      isdown: !1
    }), X = h(0);
    return {
      imgDom: t,
      dataConfig: e,
      loading: s,
      imgInfo: o,
      loadIcon: Y,
      error: i,
      state: a,
      zoomRate: n,
      isHidden: r,
      imgPosition: c,
      rotation: X
    };
  },
  computed: {
    browserRedirect() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ? "Mobile" : "Desktop";
    },
    imgStyle() {
      const { scale: t, moveX: e, moveY: s, moving: i, zooming: o } = this.state, n = {
        transitionDuration: o || i ? "0s" : ".3s"
      };
      if (t !== 1) {
        const a = e / t, r = s / t;
        n.transform = `scale(${t}, ${t}) translate(${a}px, ${r}px)`;
      }
      return n;
    },
    imgTransform() {
      const { offsetX: t, offsetY: e, isdown: s } = this.imgPosition;
      return {
        transitionDuration: s ? "0s" : ".3s",
        transform: `translate(${t}px, ${e}px)`
      };
    }
  },
  methods: {
    loadImage() {
      const t = window.innerWidth, e = window.innerHeight, s = t / e, i = this.$refs.imgDom;
      this.$nextTick(() => {
        this.loading = !0, i.removeAttribute("width"), i.removeAttribute("height"), this.dataConfig && (i.src = this.dataConfig.urls[this.dataConfig.current - 1]), this.error = !1, i.onload = () => {
          this.config.success && this.config.success("success");
          const o = i.width / i.height;
          this.imgInfo.w = i.width, this.imgInfo.h = i.height, o > s ? i.width > t * 0.7 ? (i.style.width = t * 0.7 + "px", i.style.height = i.height / (i.width / (t * 0.7)) + "px", this.imgInfo.w = t * 0.7, this.imgInfo.h = i.height / (i.width / (t * 0.7))) : (i.style.width = i.width + "px", i.style.height = i.height + "px") : i.height > e * 0.7 ? (i.style.height = e * 0.7 + "px", i.style.width = i.width / (i.height / (e * 0.7)) + "px", this.imgInfo.w = i.width / (i.height / (e * 0.7)), this.imgInfo.h = e * 0.7) : (i.style.width = i.width + "px", i.style.height = i.height + "px"), this.loading = !1;
        }, i.onerror = (o) => {
          this.loading = !1, this.error = !0, this.config.fail && this.config.fail("fail");
        };
      });
    },
    arrawRight() {
      this.dataConfig.current == this.dataConfig.urls.length && !this.dataConfig.loop || (this.resetImgPositon(), this.zoomRate = 1, this.dataConfig.current === this.dataConfig.urls.length && this.dataConfig.loop ? this.dataConfig.current = 1 : this.dataConfig.current += 1, this.loadImage());
    },
    arrawLeft() {
      this.dataConfig.current == 1 && !this.dataConfig.loop || (this.resetImgPositon(), this.zoomRate = 1, this.dataConfig.loop && this.dataConfig.current == 1 ? this.dataConfig.current = this.dataConfig.urls.length : this.dataConfig.current -= 1, this.loadImage());
    },
    getFull() {
      if (this.isFull()) {
        const e = document.exitFullscreen;
        if (e)
          e.call(document);
        else if (window.ActiveXObject) {
          const s = new window.ActiveXObject("WScript.Shell");
          s && s.SendKeys("F11");
        }
      }
      const t = document.documentElement;
      t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
    },
    isFull() {
      return document.fullscreenElement || !1;
    },
    close() {
      if (this.isFull()) {
        const e = document.exitFullscreen;
        if (e)
          e.call(document);
        else if (window.ActiveXObject) {
          const s = new window.ActiveXObject("WScript.Shell");
          s && s.SendKeys("F11");
        }
      }
      const t = document.getElementsByClassName("ysj-imgage-wrapper");
      t[0].style.display = "none";
    },
    touchstart(t) {
      if (this.browserRedirect === "Desktop")
        return;
      const { touches: e } = t;
      l.start(t), this.state.moving = e.length === 1 && this.state.scale !== 1, this.state.zooming = e.length === 2, f = this.state.moveX, g = this.state.moveY, p = Date.now(), this.state.zooming && (u = this.state.scale, v = this.getDistance(t.touches));
    },
    touchmove(t) {
      const { touches: e } = t;
      l.move(t), (this.state.moving || this.state.zooming) && w(t, !0);
      const s = this.config.maxZoom || 3;
      if (this.state.moving) {
        const { deltaX: i, deltaY: o } = l, n = i.value + f, a = o.value + g, r = Number(s / 2 * window.innerWidth), c = Number(s / 2 * window.innerHeight);
        this.state.moveX = this.clamp(n, -r, r), this.state.moveY = this.clamp(a, -c, c);
      }
      if (this.state.zooming && e.length === 2) {
        const i = this.getDistance(e), o = u * i / v;
        o < 1 ? this.state.scale = o : o > s ? this.state.scale = s : this.state.scale = o;
      }
    },
    touchend(t) {
      let e = !1;
      if (this.state.moving || this.state.zooming) {
        e = !0, this.state.moving && f === this.state.moveX && g === this.state.moveY && (e = !1);
        const s = this.config.maxZoom || 3;
        if (!t.touches.length) {
          if (this.state.zooming) {
            const i = Number(s / 2 * window.innerWidth), o = Number(s / 2 * window.innerHeight);
            this.state.moveX = this.clamp(
              this.state.moveX,
              -i,
              i
            ), this.state.moveY = this.clamp(
              this.state.moveY,
              -o,
              o
            ), this.state.zooming = !1;
          }
          this.state.moving = !1, f = 0, g = 0, u = 1, this.state.scale < 1 && this.resetScale();
        }
      } else
        this.checkTap();
      w(t, e), l.reset();
    },
    getDistance(t) {
      return Math.sqrt(
        (t[0].clientX - t[1].clientX) ** 2 + (t[0].clientY - t[1].clientY) ** 2
      );
    },
    changeSwipe(t) {
      this.dataConfig.current = t + 1, this.resetScale();
    },
    clamp(t, e, s) {
      return Math.min(Math.max(t, e), s);
    },
    resetScale() {
      this.state.scale = 1, this.state.moveX = 0, this.state.moveY = 0;
    },
    checkTap() {
      const { offsetX: t, offsetY: e } = l, s = Date.now() - p, i = 250, o = 5;
      t.value < o && e.value < o && s < i && (m ? (clearTimeout(m), m = null) : m = setTimeout(() => {
        this.close(), m = null;
      }, i));
    },
    zoom(t) {
      this.resetImgPositon();
      const e = this.config.maxZoom || 3;
      if (this.zoomRate >= e && t === "big")
        return;
      if (t === "big")
        this.zoomRate = Number((this.zoomRate + 0.2).toFixed(1));
      else {
        if (this.zoomRate <= 0.2)
          return;
        this.zoomRate = Number((this.zoomRate - 0.2).toFixed(1));
      }
      const s = this.$refs.imgDom, i = this.imgInfo.w * this.zoomRate, o = this.imgInfo.h * this.zoomRate;
      s && (s.style.width = i + "px", s.style.height = o + "px"), i > window.innerWidth || o > window.innerHeight ? this.isHidden = !0 : this.isHidden = !1;
    },
    // 监听图片事件
    mousedown(t) {
      t.preventDefault(), this.isHidden && (this.imgPosition.startX = t.clientX, this.imgPosition.startY = t.clientY, this.imgPosition.isdown = !0, this.$refs.imgDom.style.cursor = "move");
    },
    mousemove(t) {
      if (this.isHidden && this.imgPosition.isdown) {
        const { originX: e, originY: s, startX: i, startY: o } = this.imgPosition;
        let n = e + t.clientX - i, a = s + t.clientY - o;
        this.imgPosition.offsetX = n, this.imgPosition.offsetY = a;
      }
    },
    mouseup(t) {
      t.preventDefault(), this.$refs.imgDom.style.cursor = "default", this.imgPosition.isdown = !1, this.imgPosition.originX = this.imgPosition.offsetX, this.imgPosition.originY = this.imgPosition.offsetY;
    },
    resetImgPositon() {
      this.imgPosition.offsetX = 0, this.imgPosition.offsetY = 0, this.imgPosition.originX = 0, this.imgPosition.originY = 0;
    },
    init() {
      window.addEventListener("mousewheel", (t) => {
        document.getElementsByClassName("ysj-imgage-wrapper")[0].style.display !== "none" && (t.wheelDelta > 0 ? this.zoom("big") : this.zoom("small"));
      });
    },
    dwonload() {
      let t = this.dataConfig.urls[this.dataConfig.current - 1];
      window.open(t, "_blank");
    },
    rotate(t) {
      t === "right" ? this.rotation += 90 : this.rotation -= 90;
    }
  },
  mounted() {
    this.loadIcon(), this.config && (this.init(), this.dataConfig = Object.assign({}, this.config), this.browserRedirect === "Desktop" && this.loadImage());
  }
});
export {
  M as default
};
