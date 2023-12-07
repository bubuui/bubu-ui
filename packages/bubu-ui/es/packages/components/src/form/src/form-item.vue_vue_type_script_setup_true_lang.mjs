import { defineComponent as I, ref as c, inject as g, computed as l, reactive as B, toRefs as C, provide as L, onMounted as R, nextTick as S, openBlock as s, createElementBlock as a, normalizeClass as q, createElementVNode as d, normalizeStyle as p, unref as f, toDisplayString as b, createCommentVNode as v, renderSlot as h } from "vue";
import w from "../../../../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.mjs";
const E = { class: "bu-form-item--content" }, $ = {
  key: 0,
  class: "bu-form-item--error"
}, x = "bu-form-item", j = /* @__PURE__ */ I({
  name: "BuFormItem",
  __name: "form-item",
  props: {
    label: { default: "" },
    prop: { default: "" }
  },
  setup(y) {
    const u = c(), e = g("buFormKey", {}), t = y, o = c(""), F = l(() => (console.log("uForm?.rules.value", e.rules[t.prop]), e.rules[t.prop] && e.rules[t.prop].some((r) => r.required))), W = l(() => [
      x,
      o.value && "is-error",
      F.value && "is-required"
    ]), _ = l(() => e.labelWidth ? typeof e.labelWidth == "string" ? e.labelWidth : e.labelWidth + "px" : "auto"), k = () => {
      if (e && e.rules === void 0)
        return Promise.resolve({ result: !0 });
      const r = e.rules[t.prop], n = e.model[t.prop];
      return new w({ [t.prop]: r }).validate({ [t.prop]: n }, (m) => {
        m ? o.value = m[0].message || "\u6821\u9A8C\u9519\u8BEF" : o.value = "";
      });
    }, i = B({
      ...C(t),
      validate: k,
      $label: u
    });
    return L("buFormItem", i), R(() => {
      t.prop && S(() => {
        e && e.addField(i);
      });
    }), (r, n) => (s(), a("div", {
      class: q(W.value)
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
      d("div", E, [
        h(r.$slots, "default"),
        o.value ? (s(), a("div", $, b(o.value), 1)) : v("", !0)
      ])
    ], 2));
  }
});
export {
  j as default
};
