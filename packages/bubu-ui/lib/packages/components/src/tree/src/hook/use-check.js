'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
function h(d, { getChildren: n }) {
  const i = (c) => {
      (c.checked = !c.checked),
        n(c).forEach((e) => {
          e.checked = c.checked;
        }),
        s(c);
    },
    s = (c) => {
      const e = d.value.find((t) => t.id === c.parentId);
      if (!e) return;
      const l = n(e, !1),
        o = l.filter((t) => t.checked);
      o.length === l.length
        ? ((e.checked = !0), (e.indeterminate = !1))
        : ((e.checked = !1), (e.indeterminate = o.length !== 0)),
        console.log('treeNode', e),
        s(e);
    };
  return { toggleCheckNode: i };
}
exports.useCheck = h;