'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const v = require('vue'),
  h = require('../utils.js');
function L(l, { getNode: o, getIndex: s, getChildren: a }, { emit: r }) {
  const i = (n) => {
      const e = o(n);
      e &&
        e.isLeaf === !1 &&
        !e.childNodeCount &&
        ((e.loading = !0), r('lazy-load', n, d));
    },
    d = (n) => {
      const e = o(n.node);
      if (e) {
        e.loading = !1;
        const t = v.ref(h.generateInnerTree(n.treeItems, e.level));
        u(e, t), c(e, t);
        const f = a(e);
        e.childNodeCount = f.length;
      }
    },
    u = (n, e) => {
      e.value.forEach((t) => {
        t.level - 1 === n.level && !t.parentId && (t.parentId = n.id);
      });
    },
    c = (n, e) => {
      const t = s(n);
      t && l.value.splice(t + 1, 0, ...e.value);
    };
  return { lazyLoadNodes: i };
}
exports.useLazyLoad = L;
