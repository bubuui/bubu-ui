import { defineComponent as n, ref as i, reactive as r } from "vue";
const h = window.outerWidth / 4, m = n({
  props: {
    loop: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const t = i(), s = i(0), e = i(0), a = i(0), o = i(0), c = i(0), l = i(0), f = r({
      active: 0,
      width: 0,
      swiping: !1
    });
    return {
      trackDom: t,
      startX: s,
      startY: e,
      state: f,
      deltaX: a,
      deltaY: o,
      offsetX: c,
      offsetY: l
    };
  },
  methods: {
    getStyle() {
      const t = this.$refs.trackDom;
      this.state.width = t.clientWidth, t.style.width = t.clientWidth * t.children.length + "px";
    },
    touchstart(t) {
      this.reset(), this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY, this.state.swiping = !0;
    },
    touchmove(t) {
      if (this.state.swiping) {
        const s = t.touches[0];
        this.deltaX = (s.clientX < 0 ? 0 : s.clientX) - this.startX, this.deltaY = s.clientY - this.startY, this.offsetX = Math.abs(this.deltaX), this.offsetY = Math.abs(this.deltaY), this.deltaX > 0 ? this.checkActive("right") && this.move("right") : this.deltaX < 0 && this.checkActive("left") && this.move("left");
      }
    },
    touchend(t) {
      if (!this.state.swiping)
        return;
      const s = this.$refs.trackDom;
      this.state.swiping = !1, this.deltaX > h ? (this.loop && this.state.active === 0 && (this.state.active = s.children.length - 1), this.checkActive("right") && (this.state.active -= 1, this.move("right"))) : this.deltaX < -h ? (this.loop && this.state.active === s.children.length - 1 && (this.state.active = 0), this.checkActive("left") && (this.state.active += 1, this.move("left"))) : this.move("");
    },
    reset() {
      this.startX = 0, this.startY = 0, this.deltaX = 0, this.deltaY = 0, this.offsetX = 0, this.offsetY = 0;
    },
    move(t) {
      const s = this.$refs.trackDom;
      if (s.style.transitionDuration = `${this.state.swiping ? 0 : 500}ms`, t === "left") {
        let e = this.state.active * this.state.width;
        this.state.swiping && (e += this.offsetX), s.style.transform = `translateX(-${e}px)`;
      } else if (t === "right") {
        let e = -this.state.active * this.state.width;
        this.state.swiping && (e += this.offsetX), s.style.transform = `translateX(${e}px)`;
      } else {
        let e = this.state.active * this.state.width;
        s.style.transform = `translateX(-${e}px)`;
      }
      !this.state.swiping && t && this.$emit("change", this.state.active);
    },
    checkActive(t) {
      const s = this.$refs.trackDom;
      let e = !0;
      return (!this.loop && this.state.active === s.children.length - 1 && t === "left" || !this.loop && this.state.active === 0 && t === "right") && (e = !1), console.log("result", e, t), e;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getStyle();
    });
  },
  watch: {
    active: {
      handler(t) {
        this.state.active = t, this.$nextTick(() => {
          this.move("");
        });
      },
      immediate: !0
    }
  }
});
export {
  m as default
};
