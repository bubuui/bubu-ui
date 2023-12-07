import { BuIcon as l } from "../../icon/index.mjs";
import { defineComponent as m, ref as u, computed as i, onMounted as d } from "vue";
import { notificationEmits as p, notificationProps as v } from "./notification2.mjs";
import { useTimeoutFn as h } from "../../../../../node_modules/.pnpm/@vueuse_shared@10.6.1/node_modules/@vueuse/shared/index.mjs";
const T = m({
  name: "BuNofication",
  emits: p,
  props: v,
  components: {
    BuIcon: l
  },
  setup(t) {
    const o = u(!1);
    let e;
    const r = i(
      () => t.position.endsWith("right") ? "right" : "left"
    ), a = i(
      () => t.position.startsWith("top") ? "top" : "bottom"
    ), c = i(() => ({
      [a.value]: `${t.offset}px`,
      zIndex: t.zIndex
    })), n = () => {
      console.log("en"), o.value = !1;
    }, s = () => {
      t.duration > 0 && ({ stop: e } = h(() => {
        o.value && n();
      }, t.duration));
    }, f = () => {
      e == null || e();
    };
    return d(() => {
      s(), o.value = !0;
    }), {
      visible: o,
      horizontalClass: r,
      positionStyle: c,
      close: n,
      startTimer: s,
      clearTimer: f
    };
  }
});
export {
  T as default
};
