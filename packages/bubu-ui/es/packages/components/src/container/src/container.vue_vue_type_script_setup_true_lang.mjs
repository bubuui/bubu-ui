import { defineComponent as a, useSlots as c, computed as l, openBlock as i, createElementBlock as u, normalizeClass as m, renderSlot as p } from "vue";
const f = /* @__PURE__ */ a({
  name: "BuContainer",
  __name: "container",
  props: {
    direction: {}
  },
  setup(n) {
    const o = n, e = c(), s = l(() => e && e.default ? e.default().some((t) => {
      const r = t.type.name;
      return r === "BuHeader" || r === "BuFooter";
    }) : o.direction === "vertical");
    return (t, r) => (i(), u("section", {
      class: m(["bu-container", { "is-vertical": s.value }])
    }, [
      p(t.$slots, "default")
    ], 2));
  }
});
export {
  f as default
};
