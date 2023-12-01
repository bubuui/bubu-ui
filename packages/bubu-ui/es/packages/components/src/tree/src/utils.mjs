function f(i, n = 0, r = {}) {
  return n++, i.reduce((c, t) => {
    const e = { ...t };
    if (e.level = n, n > 1 && r.level && n > r.level && (e.parentId = r.id), e.children) {
      const d = f(e.children, n, e);
      return delete e.children, c.concat(e, d);
    } else
      return e.isLeaf === void 0 && (e.isLeaf = !0), c.concat(e);
  }, []);
}
export {
  f as generateInnerTree
};
