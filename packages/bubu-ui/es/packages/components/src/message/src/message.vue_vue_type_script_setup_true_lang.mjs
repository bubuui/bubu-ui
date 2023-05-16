import { defineComponent as C, ref as a, computed as i, onMounted as k, openBlock as n, createBlock as d, Transition as L, withCtx as M, withDirectives as S, createElementVNode as T, normalizeClass as w, normalizeStyle as z, unref as p, renderSlot as O, createElementBlock as g, toDisplayString as R, createCommentVNode as _, vShow as $ } from "vue";
import { messageProps as H } from "./message-type.mjs";
import { BuIcon as D } from "../../icon/index.mjs";
import { getLastOffset as E, getOffsetOrSpace as I } from "./instance.mjs";
import { useResizeObserver as N } from "../../../../../node_modules/.pnpm/@vueuse_core@10.0.2_vue@3.2.36/node_modules/@vueuse/core/index.mjs";
import { useTimeoutFn as V } from "../../../../../node_modules/.pnpm/@vueuse_shared@10.0.2_vue@3.2.36/node_modules/@vueuse/shared/index.mjs";
const A = ["id"], F = {
  key: 0,
  class: "bu-message--content"
}, P = ["innerHTML"], U = {
  name: "BuMessage"
}, X = /* @__PURE__ */ C({
  ...U,
  props: H,
  setup(v, { expose: h }) {
    const s = v, o = a(!1), r = a(), l = a(0);
    let t;
    const y = i(() => E(s.id)), b = i(() => l.value + u.value), u = i(() => I(s.id, s.offset) + y.value);
    function B() {
      t == null || t();
    }
    function m() {
      s.duration !== 0 && ({ stop: t } = V(() => {
        f();
      }, s.duration));
    }
    function f() {
      o.value = !1;
    }
    return k(() => {
      m(), o.value = !0;
    }), N(r, () => {
      l.value = r.value.getBoundingClientRect().height;
    }), h({
      close: f,
      visible: o,
      bottom: b
    }), (e, c) => (n(), d(L, {
      name: "bu-message-fade",
      onAfterLeave: c[0] || (c[0] = (j) => e.$emit("destroy")),
      onBeforeLeave: e.onClose
    }, {
      default: M(() => [
        S(T("div", {
          class: w(["bu-message", [`bu-message--${e.type}`, e.showClose ? "is-close" : ""]]),
          id: e.id,
          ref_key: "messageRef",
          ref: r,
          style: z({ top: p(u) + "px", zIndex: 99 }),
          onMouseenter: B,
          onMouseleave: m
        }, [
          O(e.$slots, "default", {}, () => [
            e.dangerouslyUseHTMLString ? (n(), g("p", F, R(e.message), 1)) : (n(), g("p", {
              key: 1,
              class: "bu-message--content",
              innerHTML: e.message
            }, null, 8, P))
          ]),
          e.showClose ? (n(), d(p(D), {
            key: 0,
            class: "bu-message--close",
            name: "close",
            size: 16
          })) : _("", !0)
        ], 46, A), [
          [$, o.value]
        ])
      ]),
      _: 3
    }, 8, ["onBeforeLeave"]));
  }
});
export {
  X as default
};
