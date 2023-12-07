import v from "./container.vue2.mjs";
import { resolveComponent as u, openBlock as t, createElementBlock as i, createElementVNode as e, renderSlot as w, toDisplayString as k, createCommentVNode as a, withDirectives as d, vShow as l, normalizeStyle as m, createVNode as y, withCtx as p, Fragment as C, renderList as D, createBlock as b, withModifiers as g, pushScopeId as S, popScopeId as j } from "vue";
import "./container.vue3.mjs";
import F from "../../../../../_virtual/_plugin-vue_export-helper.mjs";
const r = (o) => (S("data-v-cf1226f6"), o = o(), j(), o), T = { class: "ysj-image-container" }, $ = { class: "ysj-image-container-header" }, R = { key: 0 }, z = {
  key: 1,
  class: "ysj-image-opt"
}, E = /* @__PURE__ */ r(() => /* @__PURE__ */ e("svg", { class: "iconpark-icon" }, [
  /* @__PURE__ */ e("use", { href: "#zoom-in" })
], -1)), I = [
  E
], M = /* @__PURE__ */ r(() => /* @__PURE__ */ e("svg", { class: "iconpark-icon" }, [
  /* @__PURE__ */ e("use", { href: "#zoom-out" })
], -1)), B = [
  M
], L = /* @__PURE__ */ r(() => /* @__PURE__ */ e("svg", { class: "iconpark-icon" }, [
  /* @__PURE__ */ e("use", { href: "#download-four" })
], -1)), N = [
  L
], V = /* @__PURE__ */ r(() => /* @__PURE__ */ e("svg", { class: "iconpark-icon" }, [
  /* @__PURE__ */ e("use", { href: "#full-screen" })
], -1)), A = [
  V
], q = /* @__PURE__ */ r(() => /* @__PURE__ */ e("svg", { class: "iconpark-icon" }, [
  /* @__PURE__ */ e("use", { href: "#close" })
], -1)), G = [
  q
], H = { class: "loading-wrapper" }, J = { class: "loading-wrapper" }, K = { key: 1 }, O = ["src"], P = /* @__PURE__ */ r(() => /* @__PURE__ */ e("svg", { class: "iconpark-icon" }, [
  /* @__PURE__ */ e("use", { href: "#left" })
], -1)), Q = [
  P
], U = /* @__PURE__ */ r(() => /* @__PURE__ */ e("svg", { class: "iconpark-icon" }, [
  /* @__PURE__ */ e("use", { href: "#right" })
], -1)), W = [
  U
];
function X(o, s, Y, Z, _, x) {
  const f = u("swipe-item"), c = u("swipe");
  return t(), i("div", T, [
    e("div", $, [
      w(o.$slots, "default", {}, void 0, !0),
      o.config.header ? a("", !0) : (t(), i("div", R, k(o.dataConfig.current + "/" + o.dataConfig.urls.length), 1)),
      !o.config.header && o.browserRedirect === "Desktop" ? (t(), i("div", z, [
        e("button", {
          onClick: s[0] || (s[0] = (n) => o.zoom("big"))
        }, I),
        e("button", {
          onClick: s[1] || (s[1] = (n) => o.zoom("small"))
        }, B),
        e("button", {
          onClick: s[2] || (s[2] = (...n) => o.dwonload && o.dwonload(...n))
        }, N),
        e("button", {
          onClick: s[3] || (s[3] = (...n) => o.getFull && o.getFull(...n))
        }, A),
        e("button", {
          onClick: s[4] || (s[4] = (...n) => o.close && o.close(...n))
        }, G)
      ])) : a("", !0)
    ]),
    o.browserRedirect === "Desktop" ? (t(), i("div", {
      key: 0,
      class: "ysj-image-container-content",
      onMousedown: s[5] || (s[5] = (...n) => o.mousedown && o.mousedown(...n)),
      onMousemove: s[6] || (s[6] = (...n) => o.mousemove && o.mousemove(...n)),
      onMouseup: s[7] || (s[7] = (...n) => o.mouseup && o.mouseup(...n))
    }, [
      d(e("span", H, "图片加载中", 512), [
        [l, o.loading]
      ]),
      d(e("span", J, "图片加载失败", 512), [
        [l, o.error]
      ]),
      d(e("img", {
        ref: "imgDom",
        alt: "",
        style: m(o.imgTransform)
      }, null, 4), [
        [l, !o.loading]
      ])
    ], 32)) : (t(), i("div", K, [
      y(c, {
        class: "ysj-my-swipe",
        active: o.dataConfig.current - 1,
        onChange: o.changeSwipe
      }, {
        default: p(() => [
          (t(!0), i(C, null, D(o.config.urls, (n, h) => (t(), b(f, {
            key: n,
            onTouchstart: o.touchstart,
            onTouchmove: o.touchmove,
            onTouchend: o.touchend
          }, {
            default: p(() => [
              e("img", {
                src: n,
                style: m(h === o.dataConfig.current - 1 ? o.imgStyle : {}),
                alt: "",
                class: "img-item"
              }, null, 12, O)
            ]),
            _: 2
          }, 1032, ["onTouchstart", "onTouchmove", "onTouchend"]))), 128))
        ]),
        _: 1
      }, 8, ["active", "onChange"])
    ])),
    o.dataConfig.current > 1 && o.browserRedirect === "Desktop" ? (t(), i("div", {
      key: 2,
      class: "ysj-image-arraw-left",
      onClick: s[8] || (s[8] = g((...n) => o.arrawLeft && o.arrawLeft(...n), ["stop"]))
    }, Q)) : a("", !0),
    o.dataConfig.current < o.dataConfig.urls.length && o.browserRedirect === "Desktop" ? (t(), i("div", {
      key: 3,
      class: "ysj-image-arraw-right",
      onClick: s[9] || (s[9] = g((...n) => o.arrawRight && o.arrawRight(...n), ["stop"]))
    }, W)) : a("", !0)
  ]);
}
const to = /* @__PURE__ */ F(v, [["render", X], ["__scopeId", "data-v-cf1226f6"]]);
export {
  to as default
};
