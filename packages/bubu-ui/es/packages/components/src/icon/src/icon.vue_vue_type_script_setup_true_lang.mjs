import { defineComponent as u, computed as r, openBlock as t, createElementBlock as l, Fragment as s, mergeProps as a, unref as i, createElementVNode as f, createCommentVNode as m } from "vue";
const y = ["xlink:href", "fill"], d = ["src", "alt"], h = {
  name: "BuIcon"
}, g = /* @__PURE__ */ u({
  ...h,
  props: {
    name: null,
    size: null,
    color: null,
    type: null,
    component: null
  },
  setup(e) {
    const o = e, c = r(
      () => typeof o.size == "number" ? `${o.size}px` : o.size
    );
    return (n, $) => (t(), l(s, null, [
      e.component ? (t(), l("svg", a({
        key: 0,
        class: [n.$attrs.class, "icon", "icon-svg", e.type && `icon-${e.type}`],
        style: { width: i(c), height: i(c) },
        "aria-hidden": "true"
      }, n.$attrs), [
        f("use", {
          "xlink:href": `#icon-${e.component}`,
          fill: e.color
        }, null, 8, y)
      ], 16)) : m("", !0),
      e.name ? (t(), l(s, { key: 1 }, [
        /http|https/.test(e.name) ? (t(), l("img", a({ key: 0 }, n.$attrs, {
          src: e.name,
          alt: e.name
        }), null, 16, d)) : (t(), l("span", a({
          key: 1,
          class: ["bu-icon", "icon-" + e.name, e.type && `icon-${e.type}`, n.$attrs.class]
        }, n.$attrs, {
          style: {
            fontSize: i(c),
            color: e.color
          }
        }), null, 16))
      ], 64)) : m("", !0)
    ], 64));
  }
});
export {
  g as default
};
