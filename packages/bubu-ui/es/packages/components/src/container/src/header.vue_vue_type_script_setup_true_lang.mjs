import { defineComponent as t, openBlock as r, createElementBlock as a, normalizeStyle as o, renderSlot as n } from "vue";
const p = /* @__PURE__ */ t({
  name: "BuHeader",
  __name: "header",
  props: {
    height: { default: "60px" }
  },
  setup(l) {
    return (e, s) => (r(), a("header", {
      class: "bu-header",
      style: o({ height: e.height })
    }, [
      n(e.$slots, "default")
    ], 4));
  }
});
export {
  p as default
};
