'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const i = require('vue');
function c(d) {
  const n = i.computed(() => {
      let e = [];
      const u = [];
      for (const t of d.value)
        e.map((r) => r.id).includes(t.id) ||
          (t.expanded !== !0 && (e = s(t)), u.push(t));
      return u;
    }),
    s = (e, u = !0) => {
      const t = [],
        r = d.value.findIndex((l) => l.id === e.id);
      for (let l = r + 1; l < d.value.length && e.level < d.value[l].level; l++)
        (u || e.level === d.value[l].level - 1) && t.push(d.value[l]);
      return t;
    },
    o = (e, u = []) => {
      const t = s(e, !1);
      return (
        u.push(...t),
        t.forEach((r) => {
          r.expanded && o(r, u);
        }),
        u
      );
    };
  return {
    expendedTree: n,
    getChildren: s,
    getParent: (e) => d.value.find((u) => u.id === e.parentId),
    getChildrenExpanded: o,
    getIndex: (e) => (e ? d.value.findIndex((u) => u.id === e.id) : -1),
    getNode: (e) => d.value.find((u) => u.id === e.id)
  };
}
exports.useCore = c;