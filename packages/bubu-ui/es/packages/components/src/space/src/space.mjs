import { defineComponent as v, toRefs as d, computed as o, renderSlot as f, createVNode as h, Comment as g, h as s } from "vue";
import { isArray as y } from "../../../../../node_modules/.pnpm/@vue_shared@3.3.9/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { sapceProps as x } from "./space.type.mjs";
const b = /* @__PURE__ */ v({
  name: "BuSpace",
  props: x,
  setup(i, {
    slots: p
  }) {
    const {
      direction: r,
      wrap: u,
      alignment: c,
      size: e
    } = d(i), l = "bu-space", m = o(() => [l, `${l}--${r.value}`]), n = o(() => e.value ? typeof e.value == "string" ? e.value : e.value + "px" : "8px");
    return () => {
      const a = f(p, "default", {
        key: 0
      }, () => []);
      return (a.children ?? []).length === 0 ? null : h("div", {
        class: m.value,
        style: {
          "flex-wrap": u.value ? "wrap" : "nowrap",
          "align-items": c.value
        }
      }, [y(a.children) && a.children.map((t) => t.type === g ? s(t) : s("div", {
        class: "bu-space--item",
        style: {
          "margin-bottom": r.value === "horizontal" ? 0 : n.value,
          "margin-right": r.value === "horizontal" ? n.value : 0
        }
      }, t))]);
    };
  }
});
export {
  b as default
};
