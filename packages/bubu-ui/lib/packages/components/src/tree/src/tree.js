'use strict';
const e = require('vue'),
  c = require('./components/tree-node.js'),
  u = require('./hook/use-tree.js'),
  g = require('./tree-type.js'),
  p = require('./components/tree-node-toggle.js'),
  T = require('../../virtual-list/index.js'),
  v = e.defineComponent({
    name: 'BuTree',
    props: g.treeProps,
    emits: ['lazy-load'],
    setup(r, i) {
      const { data: d, height: a, itemHeight: s } = e.toRefs(r),
        { slots: o } = i,
        n = u(d == null ? void 0 : d.value, r, i);
      e.provide('TREE_UTILS', n);
      const l = (t) =>
        e.createVNode(
          c,
          e.mergeProps(r, { treeNode: t, onClick: () => n.toggleNode(t) }),
          {
            content: () => (o.content ? o.content(t) : t.label),
            icon: () =>
              o.icon
                ? o.icon({ nodeData: t, toggleNode: n.toggleNode })
                : e.createVNode(p, { expanded: !!t.expanded }, null),
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
                  T.BuVirtualList,
                  { data: n.expendedTree.value, itemHeight: s.value },
                  { default: ({ item: t }) => l(t) }
                )
              ])
            : n.expendedTree.value.map((t) => l(t))
        ]);
    }
  });
module.exports = v;
