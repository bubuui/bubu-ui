import { ref as p } from "vue";
import { generateInnerTree as h } from "../utils.mjs";
function I(l, { getNode: t, getIndex: a, getChildren: r }, { emit: d }) {
  const s = (n) => {
    const e = t(n);
    e && e.isLeaf === !1 && !e.childNodeCount && (e.loading = !0, d("lazy-load", n, i));
  }, i = (n) => {
    const e = t(n.node);
    if (e) {
      e.loading = !1;
      const o = p(
        h(n.treeItems, e.level)
      );
      c(e, o), f(e, o);
      const u = r(e);
      e.childNodeCount = u.length;
    }
  }, c = (n, e) => {
    e.value.forEach((o) => {
      o.level - 1 === n.level && !o.parentId && (o.parentId = n.id);
    });
  }, f = (n, e) => {
    const o = a(n);
    o && l.value.splice(o + 1, 0, ...e.value);
  };
  return {
    lazyLoadNodes: s
  };
}
export {
  I as useLazyLoad
};
