import { defineComponent as Y, ref as l, computed as z, watch as A, onMounted as H, onBeforeUnmount as j, nextTick as q, openBlock as M, createElementBlock as V, createElementVNode as n, normalizeClass as c, unref as i, normalizeStyle as r, renderSlot as v } from "vue";
import { isString as a } from "../../../../../node_modules/.pnpm/@vue_shared@3.2.47/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { on as w, off as O } from "@bubu-ui/utils";
const D = {
  key: 0,
  class: "bu-split--horizontal"
}, G = {
  key: 1,
  class: "bu-split--vertical"
}, I = {
  name: "BuSplit"
}, Q = /* @__PURE__ */ Y({
  ...I,
  props: {
    modelValue: { default: 0.5 },
    mode: { default: "horizontal" },
    min: { default: "40px" },
    max: { default: "40px" }
  },
  emits: ["update:model-value", "mousemove"],
  setup(S, { emit: _ }) {
    const t = S, m = l(), s = l(0), k = l(0), h = l(0), g = l(0), b = l(!1), f = l(), p = z(
      () => t.mode === "horizontal" ? "offsetWidth" : "offsetHeight"
    ), F = z(() => 100 - s.value), d = z(() => ({
      "bu-split-pane-moving": b.value
    }));
    A(
      () => t.modelValue,
      () => {
        x();
      },
      {
        immediate: !0
      }
    ), H(() => {
      w(window, "resize", x);
    }), j(() => {
      O(window, "resize", x);
    });
    const $ = (e, o) => parseFloat(String(e)) / o;
    function y(e) {
      k.value = t.mode === "horizontal" ? e.pageX : e.pageY, f.value = t.modelValue, b.value = !0, w(document, "mousemove", C), w(document, "mouseup", W);
    }
    function x() {
      q(() => {
        h.value = B("min"), g.value = B("max"), s.value = (a(t.modelValue) ? $(
          t.modelValue,
          m.value[p.value]
        ) : t.modelValue) * 100;
      });
    }
    function B(e) {
      let o = m.value[p.value];
      return a(t.modelValue) ? a(t[e]) ? t[e] : o * Number(t[e]) : a(t[e]) ? $(t[e], o) : t[e];
    }
    function C(e) {
      const o = e;
      let T = (t.mode === "horizontal" ? o.pageX : o.pageY) - k.value, U = m.value[p.value], u = a(f.value) ? `${parseFloat(f.value) + T}px` : $(
        (U * f.value + T).toString(),
        U
      ), X = N(u);
      parseFloat(u) <= h.value && (u = E(u, h.value)), parseFloat(X) <= g.value && (u = N(E(X, g.value))), _("update:model-value", u), _("mousemove", e);
    }
    function W() {
      b.value = !1, O(document, "mousemove", C), O(document, "mouseup", W);
    }
    function N(e) {
      let o = 0;
      return a(e) ? o = `${m.value[p.value] - parseFloat(e)}px` : o = 1 - Number(e), o;
    }
    function E(e, o) {
      return a(e) ? `${Math.max(parseFloat(e), o)}px` : Math.max(e, o);
    }
    return (e, o) => (M(), V("div", {
      class: "bu-split",
      ref_key: "outerWrapper",
      ref: m
    }, [
      S.mode === "horizontal" ? (M(), V("div", D, [
        n("div", {
          class: c(["bu-split-left-pane", i(d)]),
          style: r({ right: `${i(F)}%` })
        }, [
          v(e.$slots, "left")
        ], 6),
        n("div", {
          class: "bu-split-trigger",
          onMousedown: y,
          style: r({ left: `${s.value}%` })
        }, null, 36),
        n("div", {
          class: c(["bu-split-right-pane", i(d)]),
          style: r({ left: `${s.value}%` })
        }, [
          v(e.$slots, "right")
        ], 6)
      ])) : (M(), V("div", G, [
        n("div", {
          class: c(["bu-split-top-pane", i(d)]),
          style: r({ bottom: `${i(F)}%` })
        }, [
          v(e.$slots, "top")
        ], 6),
        n("div", {
          class: "bu-split-trigger bu-split-trigger--vertical",
          onMousedown: y,
          style: r({ top: `${s.value}%` })
        }, null, 36),
        n("div", {
          class: c(["bu-split-bottom-pane", i(d)]),
          style: r({ top: `${s.value}%` })
        }, [
          v(e.$slots, "bottom")
        ], 6)
      ]))
    ], 512));
  }
});
export {
  Q as default
};
