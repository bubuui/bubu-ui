import { defineComponent as c, computed as i, openBlock as p, createElementBlock as u, normalizeClass as d, createElementVNode as f, renderSlot as s } from "vue";
const m = { class: "bu-title-content" }, t = "bu-title", h = /* @__PURE__ */ c({
  name: "BuTitle",
  __name: "title",
  props: {
    sub: { type: Boolean },
    border: { type: Boolean },
    type: {}
  },
  setup(o) {
    const {
      sub: l = !1,
      border: r = !1,
      type: n = "primary"
    } = o, a = i(() => {
      let e = [t, `${t}--${n}`];
      return l && e.push(`${t}--sub`), r && e.push(`${t}--border`), e;
    });
    return (e, b) => (p(), u("div", {
      class: d(a.value)
    }, [
      f("div", m, [
        s(e.$slots, "default"),
        s(e.$slots, "left")
      ]),
      s(e.$slots, "right")
    ], 2));
  }
});
export {
  h as default
};
