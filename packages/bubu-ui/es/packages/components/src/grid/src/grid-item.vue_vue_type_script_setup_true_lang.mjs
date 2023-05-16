import { defineComponent as t, openBlock as o, createElementBlock as n, renderSlot as s } from "vue";
const r = { class: "bu-grid--item" }, l = {
  name: "BuGridItem"
}, p = /* @__PURE__ */ t({
  ...l,
  props: {
    offset: null,
    span: null
  },
  setup(_) {
    return (e, a) => (o(), n("div", r, [
      s(e.$slots, "default")
    ]));
  }
});
export {
  p as default
};
