import { defineComponent as t, openBlock as o, createElementBlock as r, renderSlot as n } from "vue";
const s = { class: "bu-grid--item" }, p = /* @__PURE__ */ t({
  name: "BuGridItem",
  __name: "grid-item",
  props: {
    offset: {},
    span: {}
  },
  setup(a) {
    return (e, i) => (o(), r("div", s, [
      n(e.$slots, "default")
    ]));
  }
});
export {
  p as default
};
