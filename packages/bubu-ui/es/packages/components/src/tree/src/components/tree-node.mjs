import { defineComponent as f, toRefs as x, inject as N, createVNode as n, mergeProps as b } from "vue";
import { treeNodeProps as E } from "./tree-node-type.mjs";
import { BuCheckbox as k } from "../../../checkbox/index.mjs";
const o = 32, r = 24, $ = /* @__PURE__ */ f({
  name: "BuTreeNode",
  props: E,
  setup(d, {
    slots: l,
    emit: T
  }) {
    const {
      treeNode: e,
      lineable: i,
      checkable: p,
      dragdrop: u
    } = x(d), {
      getChildrenExpanded: s,
      toggleCheckNode: v,
      onDragstart: g,
      onDrop: c,
      onDragover: m,
      onDragend: D,
      onDragleave: h
    } = N("TREE_UTILS");
    let t = {};
    return u.value && (t = {
      draggable: !0,
      onDragend: (a) => D(a),
      onDragleave: (a) => h(a),
      onDragover: (a) => m(a),
      onDragstart: (a) => g(a, e.value),
      onDrop: (a) => c(a, e.value)
    }), () => n("div", {
      class: "bu-tree--node",
      style: {
        paddingLeft: `${r * (e.value.level - 1)}px`,
        height: o + "px",
        lineHeight: o + "px"
      }
    }, [!e.value.isLeaf && e.value.expanded && i.value && n("span", {
      class: "bu-tree--node-vline",
      style: {
        height: `${o * s(e.value).length}px`,
        left: `${r * (e.value.level - 1) + 12}px`,
        top: `${o}px`
      }
    }, null), n("div", b({
      class: "bu-tree--node-content"
    }, t), [e.value.isLeaf ? n("span", {
      style: {
        display: "inline-block",
        width: "25px"
      }
    }, null) : l.icon(), p.value && n(k, {
      modelValue: e.value.checked,
      indeterminate: e.value.indeterminate,
      onClick: () => v(e.value)
    }, null), l.content(), e.value.loading && l.loading()])]);
  }
});
export {
  $ as default
};
