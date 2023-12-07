'use strict';
const i = require('vue'),
  h = window.outerWidth / 4,
  r = i.defineComponent({
    props: {
      loop: { type: Boolean, default: !1 },
      active: { type: Number, default: 0 }
    },
    setup() {
      const t = i.ref(),
        e = i.ref(0),
        s = i.ref(0),
        a = i.ref(0),
        o = i.ref(0),
        c = i.ref(0),
        f = i.ref(0),
        l = i.reactive({ active: 0, width: 0, swiping: !1 });
      return {
        trackDom: t,
        startX: e,
        startY: s,
        state: l,
        deltaX: a,
        deltaY: o,
        offsetX: c,
        offsetY: f
      };
    },
    methods: {
      getStyle() {
        const t = this.$refs.trackDom;
        (this.state.width = t.clientWidth),
          (t.style.width = t.clientWidth * t.children.length + 'px');
      },
      touchstart(t) {
        this.reset(),
          (this.startX = t.touches[0].clientX),
          (this.startY = t.touches[0].clientY),
          (this.state.swiping = !0);
      },
      touchmove(t) {
        if (this.state.swiping) {
          const e = t.touches[0];
          (this.deltaX = (e.clientX < 0 ? 0 : e.clientX) - this.startX),
            (this.deltaY = e.clientY - this.startY),
            (this.offsetX = Math.abs(this.deltaX)),
            (this.offsetY = Math.abs(this.deltaY)),
            this.deltaX > 0
              ? this.checkActive('right') && this.move('right')
              : this.deltaX < 0 &&
                this.checkActive('left') &&
                this.move('left');
        }
      },
      touchend(t) {
        if (!this.state.swiping) return;
        const e = this.$refs.trackDom;
        (this.state.swiping = !1),
          this.deltaX > h
            ? (this.loop &&
                this.state.active === 0 &&
                (this.state.active = e.children.length - 1),
              this.checkActive('right') &&
                ((this.state.active -= 1), this.move('right')))
            : this.deltaX < -h
              ? (this.loop &&
                  this.state.active === e.children.length - 1 &&
                  (this.state.active = 0),
                this.checkActive('left') &&
                  ((this.state.active += 1), this.move('left')))
              : this.move('');
      },
      reset() {
        (this.startX = 0),
          (this.startY = 0),
          (this.deltaX = 0),
          (this.deltaY = 0),
          (this.offsetX = 0),
          (this.offsetY = 0);
      },
      move(t) {
        const e = this.$refs.trackDom;
        if (
          ((e.style.transitionDuration = `${this.state.swiping ? 0 : 500}ms`),
          t === 'left')
        ) {
          let s = this.state.active * this.state.width;
          this.state.swiping && (s += this.offsetX),
            (e.style.transform = `translateX(-${s}px)`);
        } else if (t === 'right') {
          let s = -this.state.active * this.state.width;
          this.state.swiping && (s += this.offsetX),
            (e.style.transform = `translateX(${s}px)`);
        } else {
          let s = this.state.active * this.state.width;
          e.style.transform = `translateX(-${s}px)`;
        }
        !this.state.swiping && t && this.$emit('change', this.state.active);
      },
      checkActive(t) {
        const e = this.$refs.trackDom;
        let s = !0;
        return (
          ((!this.loop &&
            this.state.active === e.children.length - 1 &&
            t === 'left') ||
            (!this.loop && this.state.active === 0 && t === 'right')) &&
            (s = !1),
          console.log('result', s, t),
          s
        );
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
          (this.state.active = t),
            this.$nextTick(() => {
              this.move('');
            });
        },
        immediate: !0
      }
    }
  });
module.exports = r;
