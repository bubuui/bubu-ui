import { defineComponent as d, toRefs as f, computed as s, renderSlot as h, createVNode as g, Comment as y, h as i } from "vue";
import { isArray as x } from "../../../../../node_modules/.pnpm/@vue_shared@3.3.9/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { sapceProps as w } from "./space.type.mjs";
const C = /* @__PURE__ */ d({
  name: "BuSpace",
  props: w,
  setup(p, {
    slots: u
  }) {
    const {
      direction: r,
      wrap: c,
      alignment: m,
      size: e
    } = f(p), l = "bu-space", v = s(() => [l, `${l}--${r.value}`]), n = s(() => e.value ? typeof e.value == "string" ? e.value : e.value + "px" : "8px");
    return () => {
      var o;
      const a = h(u, "default", {
        key: 0
      }, () => []);
      return ((o = a.children) != null ? o : []).length === 0 ? null : g("div", {
        class: v.value,
        style: {
          "flex-wrap": c.value ? "wrap" : "nowrap",
          "align-items": m.value
        }
      }, [x(a.children) && a.children.map((t) => t.type === y ? i(t) : i("div", {
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
  C as default
};
