import { defineComponent as B, ref as a, computed as i, onMounted as C, openBlock as n, createBlock as d, Transition as k, withCtx as L, withDirectives as M, createElementVNode as S, normalizeClass as T, normalizeStyle as w, renderSlot as z, createElementBlock as p, toDisplayString as O, unref as R, createCommentVNode as $, vShow as H } from "vue";
import { messageProps as D } from "./message-type.mjs";
import { BuIcon as E } from "../../icon/index.mjs";
import { getLastOffset as I, getOffsetOrSpace as N } from "./instance.mjs";
import { useResizeObserver as V } from "../../../../../node_modules/.pnpm/@vueuse_core@10.6.1/node_modules/@vueuse/core/index.mjs";
import { useTimeoutFn as _ } from "../../../../../node_modules/.pnpm/@vueuse_shared@10.6.1/node_modules/@vueuse/shared/index.mjs";
const A = ["id"], F = {
  key: 0,
  class: "bu-message--content"
}, P = ["innerHTML"], W = /* @__PURE__ */ B({
  name: "BuMessage",
  __name: "message",
  props: D,
  emits: ["destory"],
  setup(g, { expose: v }) {
    const o = a(!1), r = a(), s = g, l = a(0);
    let t;
    const h = i(() => I(s.id)), y = i(() => l.value + u.value), u = i(() => N(s.id, s.offset) + h.value);
    function b() {
      t == null || t();
    }
    function m() {
      s.duration !== 0 && ({ stop: t } = _(() => {
        f();
      }, s.duration));
    }
    function f() {
      o.value = !1;
    }
    return C(() => {
      m(), o.value = !0;
    }), V(r, () => {
      l.value = r.value.getBoundingClientRect().height;
    }), v({
      close: f,
      visible: o,
      bottom: y
    }), (e, c) => (n(), d(k, {
      name: "bu-message-fade",
      onAfterLeave: c[0] || (c[0] = (U) => e.$emit("destroy")),
      onBeforeLeave: e.onClose
    }, {
      default: L(() => [
        M(S("div", {
          class: T(["bu-message", [`bu-message--${e.type}`, e.showClose ? "is-close" : ""]]),
          id: e.id,
          ref_key: "messageRef",
          ref: r,
          style: w({ top: u.value + "px", zIndex: 99 }),
          onMouseenter: b,
          onMouseleave: m
        }, [
          z(e.$slots, "default", {}, () => [
            e.dangerouslyUseHTMLString ? (n(), p("p", F, O(e.message), 1)) : (n(), p("p", {
              key: 1,
              class: "bu-message--content",
              innerHTML: e.message
            }, null, 8, P))
          ]),
          e.showClose ? (n(), d(R(E), {
            key: 0,
            class: "bu-message--close",
            name: "close",
            size: 16
          })) : $("", !0)
        ], 46, A), [
          [H, o.value]
        ])
      ]),
      _: 3
    }, 8, ["onBeforeLeave"]));
  }
});
export {
  W as default
};
