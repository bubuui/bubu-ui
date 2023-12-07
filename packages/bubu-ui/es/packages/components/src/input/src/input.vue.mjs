import { defineComponent as B, ref as g, openBlock as s, createElementBlock as u, normalizeClass as m, renderSlot as t, createCommentVNode as n, createElementVNode as a, createBlock as c, unref as i, mergeProps as h, withModifiers as $, createVNode as z } from "vue";
import { useFormItem as V, useAttrs as C } from "@bubu-ui/hook";
import { BuIcon as d } from "../../icon/index.mjs";
const F = {
  key: 0,
  class: "group--prepend"
}, w = {
  key: 0,
  class: "bu-input--prefix"
}, N = { class: "bu-input--prefix-inner" }, E = ["value", "disabled"], M = {
  key: 1,
  class: "bu-input--suffix"
}, A = { class: "bu-input--suffix-inner" }, P = { class: "bu-input--suffix-inner" }, S = {
  key: 1,
  class: "group--append"
}, l = "bu-input", J = /* @__PURE__ */ B({
  name: "BuInput",
  __name: "input",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    size: {},
    prefixIcon: {},
    suffixIcon: {}
  },
  emits: ["update:model-value", "focus"],
  setup(j, { emit: b }) {
    const { formItem: f } = V(), v = C(), r = b, p = g(!1);
    function I(e) {
      const o = e.target;
      r("update:model-value", o.value), f && f.validate();
    }
    const k = (e) => {
      p.value = !0, r("focus", e);
    }, y = () => {
      r("update:model-value", "");
    };
    return (e, o) => (s(), u("div", {
      class: m([
        l,
        e.disabled ? "is-disabled" : "",
        e.$attrs.class,
        e.$slots.prepend || e.$slots.append ? `${l}-group` : "",
        e.$slots.prepend ? `${l}-group--prepend` : "",
        e.$slots.append ? `${l}-group--append` : ""
      ])
    }, [
      e.$slots.prepend ? (s(), u("div", F, [
        t(e.$slots, "prepend")
      ])) : n("", !0),
      a("div", {
        class: m([l + "--wrapper", p.value && e.clearable ? "is-focus" : ""])
      }, [
        e.$slots.prefix || e.prefixIcon ? (s(), u("span", w, [
          a("span", N, [
            t(e.$slots, "prefix"),
            e.prefixIcon ? (s(), c(i(d), {
              key: 0,
              size: "20",
              name: e.prefixIcon
            }, null, 8, ["name"])) : n("", !0)
          ])
        ])) : n("", !0),
        a("input", h({
          value: e.modelValue,
          class: [`${l}--${e.size || "default"}`, "bu-input--inner"],
          onInput: I
        }, i(v), {
          disabled: e.disabled,
          onFocus: k,
          onBlur: o[0] || (o[0] = $((q) => p.value = !1, ["stop"]))
        }), null, 16, E),
        e.$slots.suffix || e.suffixIcon ? (s(), u("span", M, [
          a("span", A, [
            t(e.$slots, "suffix"),
            e.suffixIcon ? (s(), c(i(d), {
              key: 0,
              size: "20",
              name: e.suffixIcon
            }, null, 8, ["name"])) : n("", !0)
          ])
        ])) : n("", !0),
        e.clearable && p.value && e.modelValue ? (s(), u("span", {
          key: 2,
          class: "bu-input--suffix bu-input--clear",
          onMousedown: o[1] || (o[1] = $(() => {
          }, ["prevent"])),
          onClick: y
        }, [
          a("span", P, [
            z(i(d), {
              size: "20",
              name: "close"
            })
          ])
        ], 32)) : n("", !0)
      ], 2),
      e.$slots.append ? (s(), u("div", S, [
        t(e.$slots, "append")
      ])) : n("", !0)
    ], 2));
  }
});
export {
  J as default
};
