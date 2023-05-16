import { defineComponent as t, openBlock as o, createBlock as i, Transition as a, withCtx as c, withDirectives as d, createElementVNode as l, normalizeClass as r, normalizeStyle as u, createElementBlock as s, renderSlot as g, toDisplayString as b, vShow as m } from "vue";
const f = { class: "bu-loading-spinner" }, h = {
  key: 0,
  class: "bu-loading-svg bu-load-loop"
}, k = {
  key: 1,
  "aria-hidden": "true",
  class: "bu-loading-svg bu-load-loop"
}, v = /* @__PURE__ */ l("use", {
  "xlink:href": "#icon-loading",
  fill: "#2d8cf0"
}, null, -1), C = [
  v
], p = { class: "bu-loading-text" }, x = /* @__PURE__ */ t({
  name: "loading",
  props: {
    backgroundColor: null,
    text: null,
    fullscreen: { type: Boolean },
    customClass: null,
    visible: null
  },
  setup(e) {
    return (n, _) => (o(), i(a, { name: "bu-loading-fade" }, {
      default: c(() => [
        d(l("div", {
          class: r(["bu-loading-mask", [e.customClass, e.fullscreen ? "is-fullscreen" : ""]]),
          style: u({ backgroundColor: e.backgroundColor })
        }, [
          l("div", f, [
            n.$slots.spinner ? (o(), s("span", h, [
              g(n.$slots, "spinner")
            ])) : (o(), s("svg", k, C)),
            l("div", p, b(e.text), 1)
          ])
        ], 6), [
          [m, e.visible]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  x as default
};
