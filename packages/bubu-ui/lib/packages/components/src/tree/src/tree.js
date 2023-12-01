'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  s = require('./components/tree-node.js'),
  c = require('./hook/use-tree.js'),
  g = require('./tree-type.js'),
  p = require('./components/tree-node-toggle.js'),
  v = require('../../virtual-list/index.js'),
  T = e.defineComponent({
    name: 'BuTree',
    props: g.treeProps,
    emits: ['lazy-load'],
    setup(r, l) {
      const { data: d, height: n, itemHeight: i } = e.toRefs(r),
        { slots: o } = l,
        a = c.default(d == null ? void 0 : d.value, r, l);
      e.provide('TREE_UTILS', a);
      const u = (t) =>
        e.createVNode(
          s.default,
          e.mergeProps(r, { treeNode: t, onClick: () => a.toggleNode(t) }),
          {
            content: () => (o.content ? o.content(t) : t.label),
            icon: () =>
              o.icon
                ? o.icon({ nodeData: t, toggleNode: a.toggleNode })
                : e.createVNode(p.default, { expanded: !!t.expanded }, null),
            loading: () =>
              o.loading
                ? o.loading({ nodeData: a })
                : e.createVNode('span', { class: 'ml-1' }, [
                    e.createTextVNode('loading...')
                  ])
          }
        );
      return () =>
        e.createVNode('div', { class: 'bu-tree' }, [
          n != null && n.value
            ? e.createVNode('div', { style: { height: `${n.value}px` } }, [
                e.createVNode(
                  v.BuVirtualList,
                  { data: a.expendedTree.value, itemHeight: i.value },
                  { default: ({ item: t }) => u(t) }
                )
              ])
            : a.expendedTree.value.map((t) => u(t))
        ]);
    }
  });
exports.default = T;
