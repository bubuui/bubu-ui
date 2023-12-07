import { defineComponent as o, openBlock as t, createElementBlock as r, normalizeStyle as n, renderSlot as l } from "vue";
const f = /* @__PURE__ */ o({
  name: "BuFooter",
  __name: "footer",
  props: {
    height: { default: "60px" }
  },
  setup(a) {
    return (e, s) => (t(), r("footer", {
      class: "bu-footer",
      style: n({ height: e.height })
    }, [
      l(e.$slots, "default")
    ], 4));
  }
});
export {
  f as default
};
