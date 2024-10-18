function i(l, { getChildren: t }) {
  const o = (c) => {
    c.checked = !c.checked, t(c).forEach((e) => {
      e.checked = c.checked;
    }), s(c);
  }, s = (c) => {
    const e = l.value.find(
      (n) => n.id === c.parentId
    );
    if (!e) return;
    const d = t(e, !1), h = d.filter((n) => n.checked);
    h.length === d.length ? (e.checked = !0, e.indeterminate = !1) : (e.checked = !1, e.indeterminate = h.length !== 0), console.log("treeNode", e), s(e);
  };
  return {
    toggleCheckNode: o
  };
}
export {
  i as useCheck
};
