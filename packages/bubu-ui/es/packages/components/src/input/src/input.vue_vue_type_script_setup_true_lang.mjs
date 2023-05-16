import { defineComponent as x, ref as B, openBlock as n, createElementBlock as t, normalizeClass as m, renderSlot as r, createCommentVNode as l, createElementVNode as a, createBlock as $, unref as d, mergeProps as g, withModifiers as b, createVNode as h } from "vue";
import { useFormItem as z, useAttrs as V } from "@bubu-ui/hook";
import { BuIcon as f } from "../../icon/index.mjs";
const C = {
  key: 0,
  class: "group--prepend"
}, F = {
  key: 0,
  class: "bu-input--prefix"
}, w = { class: "bu-input--prefix-inner" }, N = ["value", "disabled"], E = {
  key: 1,
  class: "bu-input--suffix"
}, M = { class: "bu-input--suffix-inner" }, A = { class: "bu-input--suffix-inner" }, P = {
  key: 1,
  class: "group--append"
}, S = {
  name: "BuInput"
}, H = /* @__PURE__ */ x({
  ...S,
  props: {
    modelValue: null,
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    size: null,
    prefixIcon: null,
    suffixIcon: null
  },
  emits: ["update:model-value", "focus"],
  setup(s, { emit: p }) {
    const { formItem: c } = z(), o = "bu-input", v = V(), i = B(!1);
    function I(e) {
      const u = e.target;
      p("update:model-value", u.value), c && c.validate();
    }
    const k = (e) => {
      i.value = !0, p("focus", e);
    }, y = () => {
      p("update:model-value", "");
    };
    return (e, u) => (n(), t("div", {
      class: m([
        o,
        s.disabled ? "is-disabled" : "",
        e.$attrs.class,
        e.$slots.prepend || e.$slots.append ? `${o}-group` : "",
        e.$slots.prepend ? `${o}-group--prepend` : "",
        e.$slots.append ? `${o}-group--append` : ""
      ])
    }, [
      e.$slots.prepend ? (n(), t("div", C, [
        r(e.$slots, "prepend")
      ])) : l("", !0),
      a("div", {
        class: m([o + "--wrapper", i.value && s.clearable ? "is-focus" : ""])
      }, [
        e.$slots.prefix || s.prefixIcon ? (n(), t("span", F, [
          a("span", w, [
            r(e.$slots, "prefix"),
            s.prefixIcon ? (n(), $(d(f), {
              key: 0,
              size: "20",
              name: s.prefixIcon
            }, null, 8, ["name"])) : l("", !0)
          ])
        ])) : l("", !0),
        a("input", g({
          value: s.modelValue,
          class: [`${o}--${s.size || "default"}`, "bu-input--inner"],
          onInput: I
        }, d(v), {
          disabled: s.disabled,
          onFocus: k,
          onBlur: u[0] || (u[0] = b((j) => i.value = !1, ["stop"]))
        }), null, 16, N),
        e.$slots.suffix || s.suffixIcon ? (n(), t("span", E, [
          a("span", M, [
            r(e.$slots, "suffix"),
            s.suffixIcon ? (n(), $(d(f), {
              key: 0,
              size: "20",
              name: s.suffixIcon
            }, null, 8, ["name"])) : l("", !0)
          ])
        ])) : l("", !0),
        s.clearable && i.value && s.modelValue ? (n(), t("span", {
          key: 2,
          class: "bu-input--suffix bu-input--clear",
          onMousedown: u[1] || (u[1] = b(() => {
          }, ["prevent"])),
          onClick: y
        }, [
          a("span", A, [
            h(d(f), {
              size: "20",
              name: "close"
            })
          ])
        ], 32)) : l("", !0)
      ], 2),
      e.$slots.append ? (n(), t("div", P, [
        r(e.$slots, "append")
      ])) : l("", !0)
    ], 2));
  }
});
export {
  H as default
};
