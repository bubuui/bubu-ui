import { defineComponent as I, ref as c, inject as g, computed as l, reactive as L, toRefs as R, provide as S, onMounted as q, nextTick as w, openBlock as s, createElementBlock as a, normalizeClass as B, createElementVNode as d, normalizeStyle as p, unref as f, toDisplayString as b, createCommentVNode as v, renderSlot as h } from "vue";
import C from "../../../../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.mjs";
const $ = { class: "bu-form-item--content" }, x = {
  key: 0,
  class: "bu-form-item--error"
}, z = "bu-form-item", j = /* @__PURE__ */ I({
  name: "BuFormItem",
  __name: "form-item",
  props: {
    label: { default: "" },
    prop: { default: "" }
  },
  setup(y) {
    const u = c(), e = g("buFormKey", {}), t = y, o = c(""), F = l(() => (console.log("uForm?.rules.value", e.rules[t.prop]), e.rules[t.prop] && e.rules[t.prop].some((r) => r.required))), W = l(() => [
      z,
      o.value && "is-error",
      F.value && "is-required"
    ]), _ = l(() => e.labelWidth ? typeof e.labelWidth == "string" ? e.labelWidth : e.labelWidth + "px" : "auto"), k = () => {
      if (e && e.rules === void 0)
        return Promise.resolve({ result: !0 });
      const r = e.rules[t.prop], n = e.model[t.prop];
      return new C({ [t.prop]: r }).validate({ [t.prop]: n }, (m) => {
        m ? o.value = m[0].message || "校验错误" : o.value = "";
      });
    }, i = L({
      ...R(t),
      validate: k,
      $label: u
    });
    return S("buFormItem", i), q(() => {
      t.prop && w(() => {
        e && e.addField(i);
      });
    }), (r, n) => (s(), a("div", {
      class: B(W.value)
    }, [
      d("div", {
        ref_key: "formItemLabelRef",
        ref: u,
        style: p({
          width: f(e).autoLabelWidth > 0 ? f(e).autoLabelWidth + "px" : "auto"
        })
      }, [
        r.label ? (s(), a("label", {
          key: 0,
          class: "bu-form-item-label",
          style: p({
            width: _.value
          })
        }, b(r.label), 5)) : v("", !0),
        h(r.$slots, "label")
      ], 4),
      d("div", $, [
        h(r.$slots, "default"),
        o.value ? (s(), a("div", x, b(o.value), 1)) : v("", !0)
      ])
    ], 2));
  }
});
export {
  j as default
};
