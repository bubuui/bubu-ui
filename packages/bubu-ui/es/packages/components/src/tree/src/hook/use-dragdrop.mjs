import { reactive as O, computed as P } from "vue";
const I = {
  dropPrev: "bu-tree--node--drop-prev",
  dropNext: "bu-tree--node--drop-next",
  dropInner: "bu-tree--node--drop-inner"
};
function M(f, d, { getChildren: u, getParent: h }) {
  const t = O({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), D = P(
    () => d.value.reduce(
      (e, r) => ({
        ...e,
        [r.id]: r
      }),
      {}
    )
  ), g = (e) => {
    e == null || e.classList.remove(...Object.values(I));
  }, x = () => {
    t.dropType = void 0, t.draggingNode = null, t.draggingTreeNode = null;
  }, T = (e, r) => {
    var n;
    const o = (n = D.value[e]) == null ? void 0 : n.parentId;
    return o === r ? !0 : o !== void 0 ? T(o, r) : !1;
  };
  function y(e, r) {
    const o = d.value.find((n) => n.id === e);
    if (o) {
      let n;
      const i = u(o), l = h(o);
      if (t.dropType === "dropInner") {
        n = {
          ...o,
          parentId: r.id,
          level: r.level + 1
        };
        const a = d.value.indexOf(r);
        d.value.splice(a + 1, 0, n), r.isLeaf = void 0;
        const c = d.value.indexOf(o);
        d.value.splice(c, 1);
      } else if (t.dropType === "dropNext") {
        n = {
          ...o,
          parentId: r.parentId,
          level: r.level
        };
        const a = d.value.indexOf(r), c = u(r, !0).length;
        d.value.splice(
          a + c + 1,
          0,
          n
        );
        const s = d.value.indexOf(o);
        d.value.splice(s, 1);
      } else if (t.dropType === "dropPrev") {
        n = {
          ...o,
          parentId: r.parentId,
          level: r.level
        };
        const a = d.value.indexOf(r);
        d.value.splice(a, 0, n);
        const c = d.value.indexOf(o);
        d.value.splice(c, 1);
      }
      t.dropType = "dropInner", i.forEach(
        (a) => y(a.id, n)
      ), l && u(l).length === 0 && (l.isLeaf = !0);
    }
  }
  return {
    onDragstart: (e, r) => {
      var o;
      e.stopPropagation(), t.draggingNode = e.target, t.draggingTreeNode = r, (o = e.dataTransfer) == null || o.setData("dragNodeId", r.id);
    },
    onDrop: (e, r) => {
      var n;
      if (e.preventDefault(), e.stopPropagation(), g(e.currentTarget), !t.draggingNode || !f) return;
      const o = (n = e.dataTransfer) == null ? void 0 : n.getData("dragNodeId");
      if (o) {
        const i = T(r.id, o);
        if (o === r.id || i)
          return;
        t.dropType && y(o, r);
      }
      x();
    },
    onDragover: (e) => {
      if (e.preventDefault(), e.stopPropagation(), !!t.draggingNode && f) {
        if (e.dataTransfer && (e.dataTransfer.dropEffect = "move"), !d)
          return;
        let r = {};
        typeof f == "object" ? r = f : f === !0 && (r = { dropInner: !0 });
        const { dropPrev: o, dropNext: n, dropInner: i } = r;
        let l;
        const a = o ? i ? 0.25 : n ? 0.45 : 1 : -1, c = n ? i ? 0.75 : o ? 0.55 : 0 : 1, s = e.currentTarget, p = s == null ? void 0 : s.getBoundingClientRect(), N = e.clientY - ((p == null ? void 0 : p.top) || 0);
        if (N < ((p == null ? void 0 : p.height) || 0) * a ? l = "dropPrev" : N > ((p == null ? void 0 : p.height) || 0) * c ? l = "dropNext" : i ? l = "dropInner" : l = void 0, l) {
          const v = s == null ? void 0 : s.classList;
          v && (v.contains(I[l]) || (g(s), v.add(I[l])));
        } else
          g(s);
        t.dropType = l;
      }
    },
    onDragleave: (e) => {
      e.stopPropagation(), t.draggingNode && g(e.currentTarget);
    },
    onDragend: (e) => {
      e.preventDefault(), e.stopPropagation(), x();
    }
  };
}
export {
  M as useDragdrop
};
