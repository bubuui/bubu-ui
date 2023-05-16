import { defineComponent as u, computed as c, openBlock as p, createElementBlock as i, normalizeClass as d, unref as f, createElementVNode as m, renderSlot as s } from "vue";
const b = { class: "bu-title-content" }, _ = {
  name: "BuTitle"
}, y = /* @__PURE__ */ u({
  ..._,
  props: {
    sub: { type: Boolean },
    border: { type: Boolean },
    type: null
  },
  setup(o) {
    const {
      sub: l = !1,
      border: r = !1,
      type: n = "primary"
    } = o, t = "bu-title", a = c(() => {
      let e = [t, `${t}--${n}`];
      return l && e.push(`${t}--sub`), r && e.push(`${t}--border`), e;
    });
    return (e, $) => (p(), i("div", {
      class: d(f(a))
    }, [
      m("div", b, [
        s(e.$slots, "default"),
        s(e.$slots, "left")
      ]),
      s(e.$slots, "right")
    ], 2));
  }
});
export {
  y as default
};
