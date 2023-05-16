import { defineComponent as d, openBlock as l, createElementBlock as c, normalizeClass as m, createElementVNode as i, createBlock as t, unref as a, Fragment as s, toDisplayString as k } from "vue";
import { BuIcon as n } from "../../icon/index.mjs";
import "../style/checkbox.css";
const r = { class: "bu-checkbox--label" }, b = {
  name: "BuCheckbox"
}, y = /* @__PURE__ */ d({
  ...b,
  props: {
    modelValue: { type: Boolean },
    label: null,
    indeterminate: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: x }) {
    return (u, o) => (l(), c("label", {
      class: m(["bu-checkbox", e.modelValue ? "checked" : ""]),
      onClick: o[0] || (o[0] = (f) => u.$emit("update:modelValue", !e.modelValue))
    }, [
      i("span", {
        class: m([
          "bu-checkbox--input",
          e.modelValue || e.indeterminate ? "checked" : ""
        ])
      }, [
        e.modelValue ? (l(), t(a(n), {
          key: 0,
          name: "checkbox-select",
          size: "18px"
        })) : (l(), c(s, { key: 1 }, [
          e.indeterminate ? (l(), t(a(n), {
            key: 0,
            name: "checkbox-indeterminate",
            size: "18px"
          })) : (l(), t(a(n), {
            key: 1,
            name: "checkbox",
            size: "18px"
          }))
        ], 64))
      ], 2),
      i("span", r, k(e.label), 1)
    ], 2));
  }
});
export {
  y as default
};
