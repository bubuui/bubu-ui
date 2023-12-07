import { defineComponent as i, openBlock as l, createElementBlock as m, normalizeClass as c, createElementVNode as s, createBlock as a, unref as o, Fragment as r, toDisplayString as p } from "vue";
import { BuIcon as n } from "../../icon/index.mjs";
const u = { class: "bu-checkbox--label" }, f = /* @__PURE__ */ i({
  name: "BuCheckbox",
  __name: "checkbox",
  props: {
    modelValue: { type: Boolean },
    label: {},
    indeterminate: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "click"],
  setup(d) {
    return (e, t) => (l(), m("label", {
      class: c(["bu-checkbox", e.modelValue ? "checked" : ""]),
      onClick: t[0] || (t[0] = (k) => e.$emit("update:modelValue", !e.modelValue))
    }, [
      s("span", {
        class: c([
          "bu-checkbox--input",
          e.modelValue || e.indeterminate ? "checked" : ""
        ])
      }, [
        e.modelValue ? (l(), a(o(n), {
          key: 0,
          name: "checkbox-select",
          size: "18px"
        })) : (l(), m(r, { key: 1 }, [
          e.indeterminate ? (l(), a(o(n), {
            key: 0,
            name: "checkbox-indeterminate",
            size: "18px"
          })) : (l(), a(o(n), {
            key: 1,
            name: "checkbox",
            size: "18px"
          }))
        ], 64))
      ], 2),
      s("span", u, p(e.label), 1)
    ], 2));
  }
});
export {
  f as default
};
