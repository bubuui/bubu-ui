import { defineComponent as o, openBlock as r, createElementBlock as l, normalizeStyle as n, renderSlot as a } from "vue";
const s = {
  name: "BuFooter"
}, u = /* @__PURE__ */ o({
  ...s,
  props: {
    height: { default: "60px" }
  },
  setup(e) {
    return (t, c) => (r(), l("footer", {
      class: "bu-footer",
      style: n({ height: e.height })
    }, [
      a(t.$slots, "default")
    ], 4));
  }
});
export {
  u as default
};
