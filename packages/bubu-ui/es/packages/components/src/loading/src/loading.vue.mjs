import { defineComponent as i, openBlock as s, createBlock as a, Transition as t, withCtx as r, withDirectives as d, createElementVNode as o, normalizeClass as u, normalizeStyle as c, createElementBlock as n, renderSlot as p, toDisplayString as g, vShow as b } from "vue";
const m = { class: "bu-loading-spinner" }, f = {
  key: 0,
  class: "bu-loading-svg bu-load-loop"
}, k = {
  key: 1,
  "aria-hidden": "true",
  class: "bu-loading-svg bu-load-loop"
}, v = { class: "bu-loading-text" }, _ = /* @__PURE__ */ i({
  __name: "loading",
  props: {
    backgroundColor: {},
    text: {},
    fullscreen: { type: Boolean },
    customClass: {},
    visible: {}
  },
  setup(h) {
    return (e, l) => (s(), a(t, { name: "bu-loading-fade" }, {
      default: r(() => [
        d(o("div", {
          class: u(["bu-loading-mask", [e.customClass, e.fullscreen ? "is-fullscreen" : ""]]),
          style: c({ backgroundColor: e.backgroundColor })
        }, [
          o("div", m, [
            e.$slots.spinner ? (s(), n("span", f, [
              p(e.$slots, "spinner")
            ])) : (s(), n("svg", k, l[0] || (l[0] = [
              o("use", {
                "xlink:href": "#icon-loading",
                fill: "#2d8cf0"
              }, null, -1)
            ]))),
            o("div", v, g(e.text), 1)
          ])
        ], 6), [
          [b, e.visible]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  _ as default
};
