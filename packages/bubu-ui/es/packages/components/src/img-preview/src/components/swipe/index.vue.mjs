import t from "./index.vue2.mjs";
import { openBlock as s, createElementBlock as n, mergeProps as p, createElementVNode as d, renderSlot as m } from "vue";
import "./index.vue3.mjs";
import u from "../../../../../../../_virtual/_plugin-vue_export-helper.mjs";
function a(o, e, i, f, l, v) {
  return s(), n("div", p({ class: "ysj-swipe-wrapper" }, o.$attrs), [
    d("div", {
      class: "ysj-swipe__track",
      ref: "trackDom",
      onTouchstart: e[0] || (e[0] = (...r) => o.touchstart && o.touchstart(...r)),
      onTouchmove: e[1] || (e[1] = (...r) => o.touchmove && o.touchmove(...r)),
      onTouchend: e[2] || (e[2] = (...r) => o.touchend && o.touchend(...r))
    }, [
      m(o.$slots, "default", {}, void 0, !0)
    ], 544)
  ], 16);
}
const w = /* @__PURE__ */ u(t, [["render", a], ["__scopeId", "data-v-e0926ff4"]]);
export {
  w as default
};
