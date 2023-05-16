import { defineComponent as l, useSlots as a, computed as c, openBlock as u, createElementBlock as i, normalizeClass as f, unref as d, renderSlot as p } from "vue";
const m = {
  name: "BuContainer"
}, B = /* @__PURE__ */ l({
  ...m,
  props: {
    direction: null
  },
  setup(n) {
    const o = n, e = a(), s = c(() => e && e.default ? e.default().some((t) => {
      const r = t.type.name;
      return r === "BuHeader" || r === "BuFooter";
    }) : o.direction === "vertical");
    return (t, r) => (u(), i("section", {
      class: f(["bu-container", { "is-vertical": d(s) }])
    }, [
      p(t.$slots, "default")
    ], 2));
  }
});
export {
  B as default
};
