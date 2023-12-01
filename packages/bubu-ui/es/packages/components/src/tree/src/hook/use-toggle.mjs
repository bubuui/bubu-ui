function l(o, a, g, d) {
  const { lazyLoadNodes: n } = d;
  return {
    toggleNode: (t) => {
      const e = o.value.find((c) => c.id === t.id);
      e && (e.expanded = !e.expanded, e.expanded && n(e));
    }
  };
}
export {
  l as useToggle
};
