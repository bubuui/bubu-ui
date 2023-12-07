import { defineComponent as t, openBlock as s, createElementBlock as a, normalizeStyle as o, renderSlot as n } from "vue";
const i = /* @__PURE__ */ t({
  name: "BuAside",
  __name: "aside",
  props: {
    width: { default: "300px" }
  },
  setup(r) {
    return (e, d) => (s(), a("aside", {
      class: "bu-aside",
      style: o({ width: e.width })
    }, [
      n(e.$slots, "default")
    ], 4));
  }
});
export {
  i as default
};
