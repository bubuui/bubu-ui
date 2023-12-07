import { defineComponent as C, toRefs as g, computed as B, createVNode as s, mergeProps as h } from "vue";
import { buttonProps as z } from "./button-type.mjs";
import { BuIcon as x } from "../../icon/index.mjs";
const I = /* @__PURE__ */ C({
  name: "BuButton",
  props: z,
  emits: {
    click: (e) => e instanceof MouseEvent
  },
  setup(e, {
    slots: l,
    attrs: u,
    emit: c
  }) {
    const {
      type: t,
      size: a,
      block: i,
      disabled: d,
      shape: n,
      loading: r
    } = g(e), o = "bu-btn", f = n.value ? `${o}--${n.value}` : "", m = a.value ? `${o}--${a.value}` : "", p = B(() => [o, `${o}--${t.value}`, `${m}`, `${f}`, {
      [`${o}--block`]: i.value
    }]), v = l.default ? l.default() : "\u6309\u94AE", b = t.value === "link" ? "a" : "button", $ = (k) => {
      e.loading || e.disabled || c("click", k);
    };
    return () => s(b, h({
      class: p.value,
      disabled: d.value,
      onClick: $
    }, u), {
      default: () => [r.value && s(x, {
        class: "bu-load-loop",
        name: "loading",
        size: "18"
      }, null), v]
    });
  }
});
export {
  I as default
};
