import { defineComponent as x, toRefs as N, inject as b, createVNode as n, mergeProps as d } from "vue";
import { treeNodeProps as E } from "./tree-node-type.mjs";
import { BuCheckbox as k } from "../../../checkbox/index.mjs";
const o = 32, i = 24, $ = /* @__PURE__ */ x({
  name: "BuTreeNode",
  props: E,
  setup(t, {
    slots: l,
    emit: T
  }) {
    const {
      treeNode: e,
      lineable: u,
      checkable: p,
      dragdrop: v
    } = N(t), {
      getChildrenExpanded: g,
      toggleCheckNode: s,
      onDragstart: c,
      onDrop: m,
      onDragover: D,
      onDragend: h,
      onDragleave: f
    } = b("TREE_UTILS");
    let r = {};
    return v.value && (r = {
      draggable: !0,
      onDragend: (a) => h(a),
      onDragleave: (a) => f(a),
      onDragover: (a) => D(a),
      onDragstart: (a) => c(a, e.value),
      onDrop: (a) => m(a, e.value)
    }), () => n("div", d({
      class: "bu-tree--node"
    }, t, {
      style: {
        paddingLeft: `${i * (e.value.level - 1)}px`,
        height: o + "px",
        lineHeight: o + "px"
      }
    }), [!e.value.isLeaf && e.value.expanded && u.value && n("span", {
      class: "bu-tree--node-vline",
      style: {
        height: `${o * g(e.value).length}px`,
        left: `${i * (e.value.level - 1) + 12}px`,
        top: `${o}px`
      }
    }, null), n("div", d({
      class: "bu-tree--node-content"
    }, r), [e.value.isLeaf ? n("span", {
      style: {
        display: "inline-block",
        width: "25px"
      }
    }, null) : l.icon(), p.value && n(k, {
      modelValue: e.value.checked,
      indeterminate: e.value.indeterminate,
      onClick: () => s(e.value)
    }, null), l.content(), e.value.loading && l.loading()])]);
  }
});
export {
  $ as default
};
