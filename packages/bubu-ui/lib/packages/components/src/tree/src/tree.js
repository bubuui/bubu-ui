'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  i = require('./components/tree-node.js'),
  c = require('./hook/use-tree.js'),
  g = require('./tree-type.js'),
  p = require('./components/tree-node-toggle.js'),
  v = require('../../virtual-list/index.js'),
  m = e.defineComponent({
    name: 'BuTree',
    props: g.treeProps,
    emits: ['lazy-load'],
    setup(r, l) {
      const { data: d, height: a, itemHeight: u } = e.toRefs(r),
        { slots: o } = l,
        n = c.default(d == null ? void 0 : d.value, r, l);
      e.provide('TREE_UTILS', n);
      const s = (t) =>
        e.createVNode(
          i.default,
          e.mergeProps(r, { treeNode: t, onClick: () => n.toggleNode(t) }),
          {
            content: () => (o.content ? o.content(t) : t.label),
            icon: () =>
              o.icon
                ? o.icon({ nodeData: t, toggleNode: n.toggleNode })
                : e.createVNode(p.default, { expanded: !!t.expanded }, null),
            loading: () =>
              o.loading
                ? o.loading({ nodeData: n })
                : e.createVNode('span', { class: 'ml-1' }, [
                    e.createTextVNode('loading...')
                  ])
          }
        );
      return () =>
        e.createVNode('div', { class: 'bu-tree' }, [
          a != null && a.value
            ? e.createVNode('div', { style: { height: `${a.value}px` } }, [
                e.createVNode(
                  v.BuVirtualList,
                  { data: n.expendedTree.value, itemHeight: u.value },
                  { default: ({ item: t }) => s(t) }
                )
              ])
            : n.expendedTree.value.map((t) => s(t))
        ]);
    }
  });
exports.default = m;
