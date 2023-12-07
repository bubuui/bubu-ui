'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
function i(c, n = 0, r = {}) {
  return (
    n++,
    c.reduce((t, d) => {
      const e = { ...d };
      if (
        ((e.level = n),
        n > 1 && r.level && n > r.level && (e.parentId = r.id),
        e.children)
      ) {
        const o = i(e.children, n, e);
        return delete e.children, t.concat(e, o);
      } else return e.isLeaf === void 0 && (e.isLeaf = !0), t.concat(e);
    }, [])
  );
}
exports.generateInnerTree = i;
