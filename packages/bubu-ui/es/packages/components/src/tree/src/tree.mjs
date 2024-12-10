import { defineComponent as s, toRefs as u, provide as p, createVNode as a, mergeProps as c, createTextVNode as g } from "vue";
import T from "./components/tree-node.mjs";
import f from "./hook/use-tree.mjs";
import { treeProps as v } from "./tree-type.mjs";
import x from "./components/tree-node-toggle.mjs";
import { BuVirtualList as B } from "../../virtual-list/index.mjs";
const C = /* @__PURE__ */ s({
  name: "BuTree",
  props: v,
  emits: ["lazy-load"],
  setup(l, i) {
    const {
      data: r,
      height: n,
      itemHeight: m
    } = u(l), {
      slots: t
    } = i, o = f(r == null ? void 0 : r.value, l, i);
    p("TREE_UTILS", o), console.log("treeData", o);
    const d = (e) => a(T, c(l, {
      treeNode: e,
      onClick: () => {
        o.toggleNode(e);
      }
    }), {
      content: () => t.content ? t.content(e) : e.label,
      icon: () => t.icon ? t.icon({
        nodeData: e,
        toggleNode: o.toggleNode
      }) : a(x, {
        expanded: !!e.expanded
      }, null),
      loading: () => t.loading ? t.loading({
        nodeData: o
      }) : a("span", {
        class: "ml-1"
      }, [g("loading...")])
    });
    return () => a("div", {
      class: "bu-tree"
    }, [n != null && n.value ? a("div", {
      style: {
        height: `${n.value}px`
      }
    }, [a(B, {
      data: o.expendedTree.value,
      itemHeight: m.value
    }, {
      default: ({
        item: e
      }) => d(e)
    })]) : o.expendedTree.value.map((e) => d(e))]);
  }
});
export {
  C as default
};
