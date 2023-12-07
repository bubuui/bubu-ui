import m from "./notification.vue_vue_type_script_lang.mjs";
import { resolveComponent as u, openBlock as n, createBlock as r, Transition as f, withCtx as p, withDirectives as c, createElementVNode as t, normalizeClass as l, normalizeStyle as v, createCommentVNode as y, toDisplayString as a, renderSlot as b, createElementBlock as d, createVNode as C, vShow as k } from "vue";
import T from "../../../../../_virtual/_plugin-vue_export-helper.mjs";
const $ = ["id"], g = { class: "bu-notification--group" }, L = { class: "bu-notification--title" }, S = { class: "bu-notification--content" }, h = { key: 0 }, z = ["innerHTML"];
function B(e, o, M, N, w, H) {
  const s = u("bu-icon");
  return n(), r(f, {
    name: "bu-notification-fade",
    onBeforeLeave: e.onClose,
    onAfterLeave: o[2] || (o[2] = (i) => e.$emit("destroy"))
  }, {
    default: p(() => [
      c(t("div", {
        id: e.id,
        class: l(["bu-notification", e.horizontalClass]),
        style: v(e.positionStyle),
        onMouseenter: o[0] || (o[0] = (...i) => e.clearTimer && e.clearTimer(...i)),
        onMouseleave: o[1] || (o[1] = (...i) => e.startTimer && e.startTimer(...i))
      }, [
        e.type ? (n(), r(s, {
          key: 0,
          name: e.type,
          size: "24px",
          class: l(["notification-title-icon", e.type])
        }, null, 8, ["name", "class"])) : y("", !0),
        t("div", g, [
          t("div", L, a(e.title), 1),
          t("div", S, [
            b(e.$slots, "default", {}, () => [
              e.dangerouslyUseHTMLString ? (n(), d("p", {
                key: 1,
                innerHTML: e.message
              }, null, 8, z)) : (n(), d("p", h, a(e.message), 1))
            ])
          ]),
          C(s, {
            onClick: e.close,
            class: "bu-notification--close",
            name: "close",
            size: "18px"
          }, null, 8, ["onClick"])
        ])
      ], 46, $), [
        [k, e.visible]
      ])
    ]),
    _: 3
  }, 8, ["onBeforeLeave"]);
}
const A = /* @__PURE__ */ T(m, [["render", B]]);
export {
  A as default
};
