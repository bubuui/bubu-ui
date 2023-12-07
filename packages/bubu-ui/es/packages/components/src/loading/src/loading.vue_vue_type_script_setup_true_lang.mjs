import { defineComponent as n, openBlock as s, createBlock as i, Transition as t, withCtx as a, withDirectives as r, createElementVNode as o, normalizeClass as d, normalizeStyle as c, createElementBlock as l, renderSlot as u, toDisplayString as p, vShow as g } from "vue";
const _ = { class: "bu-loading-spinner" }, b = {
  key: 0,
  class: "bu-loading-svg bu-load-loop"
}, m = {
  key: 1,
  "aria-hidden": "true",
  class: "bu-loading-svg bu-load-loop"
}, f = /* @__PURE__ */ o("use", {
  "xlink:href": "#icon-loading",
  fill: "#2d8cf0"
}, null, -1), h = [
  f
], k = { class: "bu-loading-text" }, B = /* @__PURE__ */ n({
  __name: "loading",
  props: {
    backgroundColor: {},
    text: {},
    fullscreen: { type: Boolean },
    customClass: {},
    visible: {}
  },
  setup(v) {
    return (e, C) => (s(), i(t, { name: "bu-loading-fade" }, {
      default: a(() => [
        r(o("div", {
          class: d(["bu-loading-mask", [e.customClass, e.fullscreen ? "is-fullscreen" : ""]]),
          style: c({ backgroundColor: e.backgroundColor })
        }, [
          o("div", _, [
            e.$slots.spinner ? (s(), l("span", b, [
              u(e.$slots, "spinner")
            ])) : (s(), l("svg", m, h)),
            o("div", k, p(e.text), 1)
          ])
        ], 6), [
          [g, e.visible]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  B as default
};
