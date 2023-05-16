import { defineComponent as r, openBlock as a, createElementBlock as o, normalizeStyle as l, renderSlot as n } from "vue";
const s = {
  name: "BuHeader"
}, h = /* @__PURE__ */ r({
  ...s,
  props: {
    height: { default: "60px" }
  },
  setup(e) {
    return (t, c) => (a(), o("header", {
      class: "bu-header",
      style: l({ height: e.height })
    }, [
      n(t.$slots, "default")
    ], 4));
  }
});
export {
  h as default
};
