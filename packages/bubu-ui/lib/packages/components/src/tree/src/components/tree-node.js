'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const n = require('vue'),
  x = require('./tree-node-type.js'),
  b = require('../../../checkbox/index.js'),
  o = 32,
  r = 24,
  f = n.defineComponent({
    name: 'BuTreeNode',
    props: x.treeNodeProps,
    setup(d, { slots: t, emit: m }) {
      const {
          treeNode: e,
          lineable: u,
          checkable: i,
          dragdrop: c
        } = n.toRefs(d),
        {
          getChildrenExpanded: s,
          toggleCheckNode: p,
          onDragstart: v,
          onDrop: g,
          onDragover: N,
          onDragend: D,
          onDragleave: h
        } = n.inject('TREE_UTILS');
      let l = {};
      return (
        c.value &&
          (l = {
            draggable: !0,
            onDragend: (a) => D(a),
            onDragleave: (a) => h(a),
            onDragover: (a) => N(a),
            onDragstart: (a) => v(a, e.value),
            onDrop: (a) => g(a, e.value)
          }),
        () =>
          n.createVNode(
            'div',
            {
              class: 'bu-tree--node',
              style: {
                paddingLeft: `${r * (e.value.level - 1)}px`,
                height: o + 'px',
                lineHeight: o + 'px'
              }
            },
            [
              !e.value.isLeaf &&
                e.value.expanded &&
                u.value &&
                n.createVNode(
                  'span',
                  {
                    class: 'bu-tree--node-vline',
                    style: {
                      height: `${o * s(e.value).length}px`,
                      left: `${r * (e.value.level - 1) + 12}px`,
                      top: `${o}px`
                    }
                  },
                  null
                ),
              n.createVNode(
                'div',
                n.mergeProps({ class: 'bu-tree--node-content' }, l),
                [
                  e.value.isLeaf
                    ? n.createVNode(
                        'span',
                        { style: { display: 'inline-block', width: '25px' } },
                        null
                      )
                    : t.icon(),
                  i.value &&
                    n.createVNode(
                      b.BuCheckbox,
                      {
                        modelValue: e.value.checked,
                        indeterminate: e.value.indeterminate,
                        onClick: () => p(e.value)
                      },
                      null
                    ),
                  t.content(),
                  e.value.loading && t.loading()
                ]
              )
            ]
          )
      );
    }
  });
exports.default = f;
