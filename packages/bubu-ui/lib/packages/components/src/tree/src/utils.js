'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
function i(c, n = 0, r = {}) {
  return (
    n++,
    c.reduce((t, u) => {
      const e = { ...u };
      if (
        ((e.level = n),
        n > 1 && r.level && n > r.level && (e.parentId = r.id),
        e.children)
      ) {
        const d = i(e.children, n, e);
        return delete e.children, t.concat(e, d);
      } else return e.isLeaf === void 0 && (e.isLeaf = !0), t.concat(e);
    }, [])
  );
}
exports.generateInnerTree = i;
