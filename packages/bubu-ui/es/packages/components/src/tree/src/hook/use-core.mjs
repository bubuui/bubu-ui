import { computed as c } from "vue";
function x(u) {
  const s = c(() => {
    let e = [];
    const d = [];
    for (const t of u.value)
      e.map((r) => r.id).includes(t.id) || (t.expanded !== !0 && (e = n(t)), d.push(t));
    return d;
  }), n = (e, d = !0) => {
    const t = [], r = u.value.findIndex((l) => l.id === e.id);
    for (let l = r + 1; l < u.value.length && e.level < u.value[l].level; l++)
      (d || e.level === u.value[l].level - 1) && t.push(u.value[l]);
    return t;
  }, o = (e, d = []) => {
    const t = n(e, !1);
    return d.push(...t), t.forEach((r) => {
      r.expanded && o(r, d);
    }), d;
  };
  return {
    expendedTree: s,
    getChildren: n,
    getParent: (e) => u.value.find((d) => d.id === e.parentId),
    getChildrenExpanded: o,
    getIndex: (e) => e ? u.value.findIndex((d) => d.id === e.id) : -1,
    getNode: (e) => u.value.find((d) => d.id === e.id)
  };
}
export {
  x as useCore
};
