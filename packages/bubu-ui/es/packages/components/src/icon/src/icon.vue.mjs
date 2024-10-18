import { defineComponent as m, computed as p, openBlock as n, createElementBlock as o, Fragment as a, mergeProps as l, createElementVNode as c, createCommentVNode as r } from "vue";
const u = ["xlink:href", "fill"], y = ["src", "alt"], d = /* @__PURE__ */ m({
  name: "BuIcon",
  __name: "icon",
  props: {
    name: {},
    size: {},
    color: {},
    type: {},
    component: {}
  },
  setup(i) {
    const t = i, s = p(
      () => typeof t.size == "number" ? `${t.size}px` : t.size
    );
    return (e, f) => (n(), o(a, null, [
      e.component ? (n(), o("svg", l({
        key: 0,
        class: [e.$attrs.class, "icon", "icon-svg", e.type && `icon-${e.type}`],
        style: { width: s.value, height: s.value },
        "aria-hidden": "true"
      }, e.$attrs), [
        c("use", {
          "xlink:href": `#icon-${e.component}`,
          fill: e.color
        }, null, 8, u)
      ], 16)) : r("", !0),
      e.name ? (n(), o(a, { key: 1 }, [
        /http|https/.test(e.name) ? (n(), o("img", l({ key: 0 }, e.$attrs, {
          src: e.name,
          alt: e.name
        }), null, 16, y)) : (n(), o("span", l({
          key: 1,
          class: ["bu-icon", "icon-" + e.name, e.type && `icon-${e.type}`, e.$attrs.class, "iconfont"]
        }, e.$attrs, {
          style: {
            fontSize: s.value,
            color: e.color
          }
        }), null, 16))
      ], 64)) : r("", !0)
    ], 64));
  }
});
export {
  d as default
};
