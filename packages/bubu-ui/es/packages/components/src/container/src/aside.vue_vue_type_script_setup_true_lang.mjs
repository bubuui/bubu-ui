import { defineComponent as o, openBlock as s, createElementBlock as a, normalizeStyle as l, renderSlot as n } from "vue";
const d = {
  name: "BuAside"
}, c = /* @__PURE__ */ o({
  ...d,
  props: {
    width: { default: "300px" }
  },
  setup(e) {
    return (t, r) => (s(), a("aside", {
      class: "bu-aside",
      style: l({ width: e.width })
    }, [
      n(t.$slots, "default")
    ], 4));
  }
});
export {
  c as default
};
