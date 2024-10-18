import { defineComponent as Y, ref as l, computed as z, watch as A, onMounted as H, onBeforeUnmount as j, nextTick as q, openBlock as M, createElementBlock as x, createElementVNode as n, normalizeClass as d, normalizeStyle as i, renderSlot as v } from "vue";
import { isString as a } from "../../../../../node_modules/.pnpm/@vue_shared@3.5.12/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { on as V, off as w } from "@bubu-ui/utils";
const D = {
  key: 0,
  class: "bu-split--horizontal"
}, G = {
  key: 1,
  class: "bu-split--vertical"
}, P = /* @__PURE__ */ Y({
  name: "BuSplit",
  __name: "split",
  props: {
    modelValue: { default: 0.5 },
    mode: { default: "horizontal" },
    min: { default: "40px" },
    max: { default: "40px" }
  },
  emits: ["update:model-value", "mousemove"],
  setup(U, { emit: X }) {
    const t = U, O = X, r = l(), s = l(0), S = l(0), c = l(0), h = l(0), g = l(!1), m = l(), p = z(
      () => t.mode === "horizontal" ? "offsetWidth" : "offsetHeight"
    ), k = z(() => 100 - s.value), f = z(() => ({
      "bu-split-pane-moving": g.value
    }));
    A(
      () => t.modelValue,
      () => {
        $();
      },
      {
        immediate: !0
      }
    ), H(() => {
      V(window, "resize", $);
    }), j(() => {
      w(window, "resize", $);
    });
    const b = (e, o) => parseFloat(String(e)) / o;
    function F(e) {
      S.value = t.mode === "horizontal" ? e.pageX : e.pageY, m.value = t.modelValue, g.value = !0, V(document, "mousemove", y), V(document, "mouseup", B);
    }
    function $() {
      q(() => {
        c.value = _("min"), h.value = _("max"), s.value = (a(t.modelValue) ? b(
          t.modelValue,
          r.value[p.value]
        ) : t.modelValue) * 100;
      });
    }
    function _(e) {
      let o = r.value[p.value];
      return a(t.modelValue) ? a(t[e]) ? t[e] : o * Number(t[e]) : a(t[e]) ? b(t[e], o) : t[e];
    }
    function y(e) {
      const o = e;
      let N = (t.mode === "horizontal" ? o.pageX : o.pageY) - S.value, E = r.value[p.value], u = a(m.value) ? `${parseFloat(m.value) + N}px` : b(
        (E * m.value + N).toString(),
        E
      ), T = C(u);
      parseFloat(u) <= c.value && (u = W(u, c.value)), parseFloat(T) <= h.value && (u = C(W(T, h.value))), O("update:model-value", u), O("mousemove", e);
    }
    function B() {
      g.value = !1, w(document, "mousemove", y), w(document, "mouseup", B);
    }
    function C(e) {
      let o = 0;
      return a(e) ? o = `${r.value[p.value] - parseFloat(e)}px` : o = 1 - Number(e), o;
    }
    function W(e, o) {
      return a(e) ? `${Math.max(parseFloat(e), o)}px` : Math.max(e, o);
    }
    return (e, o) => (M(), x("div", {
      class: "bu-split",
      ref_key: "outerWrapper",
      ref: r
    }, [
      e.mode === "horizontal" ? (M(), x("div", D, [
        n("div", {
          class: d(["bu-split-left-pane", f.value]),
          style: i({ right: `${k.value}%` })
        }, [
          v(e.$slots, "left")
        ], 6),
        n("div", {
          class: "bu-split-trigger",
          onMousedown: F,
          style: i({ left: `${s.value}%` })
        }, null, 36),
        n("div", {
          class: d(["bu-split-right-pane", f.value]),
          style: i({ left: `${s.value}%` })
        }, [
          v(e.$slots, "right")
        ], 6)
      ])) : (M(), x("div", G, [
        n("div", {
          class: d(["bu-split-top-pane", f.value]),
          style: i({ bottom: `${k.value}%` })
        }, [
          v(e.$slots, "top")
        ], 6),
        n("div", {
          class: "bu-split-trigger bu-split-trigger--vertical",
          onMousedown: F,
          style: i({ top: `${s.value}%` })
        }, null, 36),
        n("div", {
          class: d(["bu-split-bottom-pane", f.value]),
          style: i({ top: `${s.value}%` })
        }, [
          v(e.$slots, "bottom")
        ], 6)
      ]))
    ], 512));
  }
});
export {
  P as default
};
