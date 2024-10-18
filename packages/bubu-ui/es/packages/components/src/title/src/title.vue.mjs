import { defineComponent as a, computed as r, openBlock as n, createElementBlock as u, normalizeClass as i, createElementVNode as c, renderSlot as s } from "vue";
const d = { class: "bu-title-content" }, t = "bu-title", m = /* @__PURE__ */ a({
  name: "BuTitle",
  __name: "title",
  props: {
    sub: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    type: { default: "primary" }
  },
  setup(l) {
    const o = r(() => {
      let e = [t, `${t}--${l.type}`];
      return l.sub && e.push(`${t}--sub`), l.border && e.push(`${t}--border`), e;
    });
    return (e, f) => (n(), u("div", {
      class: i(o.value)
    }, [
      c("div", d, [
        s(e.$slots, "default"),
        s(e.$slots, "left")
      ]),
      s(e.$slots, "right")
    ], 2));
  }
});
export {
  m as default
};
