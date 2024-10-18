import y from "./container.vue2.mjs";
import { resolveComponent as l, openBlock as r, createElementBlock as t, createElementVNode as n, renderSlot as C, toDisplayString as b, createCommentVNode as i, createVNode as u, withDirectives as a, vShow as d, normalizeStyle as m, withCtx as f, Fragment as D, renderList as z, createBlock as $, withModifiers as p } from "vue";
import "./container.vue3.mjs";
import j from "../../../../../_virtual/_plugin-vue_export-helper.mjs";
const F = { class: "ysj-image-container" }, T = { class: "ysj-image-container-header" }, h = { key: 0 }, R = {
  key: 1,
  class: "ysj-image-opt"
}, S = { class: "loading-wrapper" }, B = { class: "loading-wrapper" }, E = { key: 1 }, I = ["src"];
function M(o, e, L, N, V, A) {
  const g = l("BuIcon"), v = l("swipe-item"), k = l("swipe");
  return r(), t("div", F, [
    n("div", T, [
      C(o.$slots, "default", {}, void 0, !0),
      o.config.header ? i("", !0) : (r(), t("div", h, b(o.dataConfig.current + "/" + o.dataConfig.urls.length), 1)),
      !o.config.header && o.browserRedirect === "Desktop" ? (r(), t("div", R, [
        n("button", {
          onClick: e[0] || (e[0] = (s) => o.rotate("right"))
        }, [
          u(g, {
            name: "youxuanzhuan",
            size: 30,
            style: { color: "#fff" }
          })
        ]),
        n("button", {
          onClick: e[1] || (e[1] = (s) => o.rotate("left"))
        }, [
          u(g, {
            name: "zuoxuanzhuan",
            size: 30,
            style: { color: "#fff" }
          })
        ]),
        n("button", {
          onClick: e[2] || (e[2] = (s) => o.zoom("big"))
        }, e[12] || (e[12] = [
          n("svg", { class: "iconpark-icon" }, [
            n("use", { href: "#zoom-in" })
          ], -1)
        ])),
        n("button", {
          onClick: e[3] || (e[3] = (s) => o.zoom("small"))
        }, e[13] || (e[13] = [
          n("svg", { class: "iconpark-icon" }, [
            n("use", { href: "#zoom-out" })
          ], -1)
        ])),
        n("button", {
          onClick: e[4] || (e[4] = (...s) => o.dwonload && o.dwonload(...s))
        }, e[14] || (e[14] = [
          n("svg", { class: "iconpark-icon" }, [
            n("use", { href: "#download-four" })
          ], -1)
        ])),
        n("button", {
          onClick: e[5] || (e[5] = (...s) => o.getFull && o.getFull(...s))
        }, e[15] || (e[15] = [
          n("svg", { class: "iconpark-icon" }, [
            n("use", { href: "#full-screen" })
          ], -1)
        ])),
        n("button", {
          onClick: e[6] || (e[6] = (...s) => o.close && o.close(...s))
        }, e[16] || (e[16] = [
          n("svg", { class: "iconpark-icon" }, [
            n("use", { href: "#close" })
          ], -1)
        ]))
      ])) : i("", !0)
    ]),
    o.browserRedirect === "Desktop" ? (r(), t("div", {
      key: 0,
      class: "ysj-image-container-content",
      onMousedown: e[7] || (e[7] = (...s) => o.mousedown && o.mousedown(...s)),
      onMousemove: e[8] || (e[8] = (...s) => o.mousemove && o.mousemove(...s)),
      onMouseup: e[9] || (e[9] = (...s) => o.mouseup && o.mouseup(...s))
    }, [
      a(n("span", S, "图片加载中", 512), [
        [d, o.loading]
      ]),
      a(n("span", B, "图片加载失败", 512), [
        [d, o.error]
      ]),
      n("div", {
        style: m({ transform: `rotate(${o.rotation}deg)` }),
        class: "ysj-img-rotate"
      }, [
        a(n("img", {
          ref: "imgDom",
          alt: "",
          style: m(o.imgTransform)
        }, null, 4), [
          [d, !o.loading]
        ])
      ], 4)
    ], 32)) : (r(), t("div", E, [
      u(k, {
        class: "ysj-my-swipe",
        active: o.dataConfig.current - 1,
        onChange: o.changeSwipe
      }, {
        default: f(() => [
          (r(!0), t(D, null, z(o.config.urls, (s, w) => (r(), $(v, {
            key: s,
            onTouchstart: o.touchstart,
            onTouchmove: o.touchmove,
            onTouchend: o.touchend
          }, {
            default: f(() => [
              n("img", {
                src: s,
                style: m(w === o.dataConfig.current - 1 ? o.imgStyle : {}),
                alt: "",
                class: "img-item"
              }, null, 12, I)
            ]),
            _: 2
          }, 1032, ["onTouchstart", "onTouchmove", "onTouchend"]))), 128))
        ]),
        _: 1
      }, 8, ["active", "onChange"])
    ])),
    o.dataConfig.current > 1 && o.browserRedirect === "Desktop" ? (r(), t("div", {
      key: 2,
      class: "ysj-image-arraw-left",
      onClick: e[10] || (e[10] = p((...s) => o.arrawLeft && o.arrawLeft(...s), ["stop"]))
    }, e[17] || (e[17] = [
      n("svg", { class: "iconpark-icon" }, [
        n("use", { href: "#left" })
      ], -1)
    ]))) : i("", !0),
    o.dataConfig.current < o.dataConfig.urls.length && o.browserRedirect === "Desktop" ? (r(), t("div", {
      key: 3,
      class: "ysj-image-arraw-right",
      onClick: e[11] || (e[11] = p((...s) => o.arrawRight && o.arrawRight(...s), ["stop"]))
    }, e[18] || (e[18] = [
      n("svg", { class: "iconpark-icon" }, [
        n("use", { href: "#right" })
      ], -1)
    ]))) : i("", !0)
  ]);
}
const K = /* @__PURE__ */ j(y, [["render", M], ["__scopeId", "data-v-86b3f863"]]);
export {
  K as default
};
