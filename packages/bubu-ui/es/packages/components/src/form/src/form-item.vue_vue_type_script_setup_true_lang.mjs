import { defineComponent as g, ref as p, inject as x, computed as a, reactive as C, toRefs as L, provide as R, onMounted as S, nextTick as q, openBlock as u, createElementBlock as i, normalizeClass as w, unref as o, createElementVNode as f, normalizeStyle as b, toDisplayString as v, createCommentVNode as h, renderSlot as y } from "vue";
import B from "../../../../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.mjs";
const E = { class: "bu-form-item--content" }, $ = {
  key: 0,
  class: "bu-form-item--error"
}, z = {
  name: "buFormItem"
}, A = /* @__PURE__ */ g({
  ...z,
  props: {
    label: { default: "" },
    prop: { default: "" }
  },
  setup(s) {
    const t = s, F = "bu-form-item", n = p(), e = x("buFormKey", {}), l = p(""), W = a(() => (console.log("uForm?.rules.value", e.rules[t.prop]), e.rules[t.prop] && e.rules[t.prop].some((r) => r.required))), _ = a(() => [
      F,
      l.value && "is-error",
      W.value && "is-required"
    ]), k = a(() => e.labelWidth ? typeof e.labelWidth == "string" ? e.labelWidth : e.labelWidth + "px" : "auto"), I = () => {
      if (e && e.rules === void 0)
        return Promise.resolve({ result: !0 });
      const r = e.rules[t.prop], c = e.model[t.prop];
      return new B({ [t.prop]: r }).validate({ [t.prop]: c }, (d) => {
        d ? l.value = d[0].message || "\u6821\u9A8C\u9519\u8BEF" : l.value = "";
      });
    }, m = C({
      ...L(t),
      validate: I,
      $label: n
    });
    return R("buFormItem", m), S(() => {
      t.prop && q(() => {
        e && e.addField(m);
      });
    }), (r, c) => (u(), i("div", {
      class: w(o(_))
    }, [
      f("div", {
        ref_key: "formItemLabelRef",
        ref: n,
        style: b({
          width: o(e).autoLabelWidth > 0 ? o(e).autoLabelWidth + "px" : "auto"
        })
      }, [
        s.label ? (u(), i("label", {
          key: 0,
          class: "bu-form-item-label",
          style: b({
            width: o(k)
          })
        }, v(s.label), 5)) : h("", !0),
        y(r.$slots, "label")
      ], 4),
      f("div", E, [
        y(r.$slots, "default"),
        l.value ? (u(), i("div", $, v(l.value), 1)) : h("", !0)
      ])
    ], 2));
  }
});
export {
  A as default
};
