'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const o = require('vue'),
  D = require('./tree-node-type.js'),
  b = require('../../../checkbox/index.js'),
  a = 32,
  r = 24,
  f = o.defineComponent({
    name: 'BuTreeNode',
    props: D.treeNodeProps,
    setup(d, { slots: t }) {
      const {
          treeNode: e,
          lineable: u,
          checkable: i,
          dragdrop: c
        } = o.toRefs(d),
        {
          getChildrenExpanded: s,
          toggleCheckNode: p,
          onDragstart: v,
          onDrop: g,
          onDragover: N,
          onDragend: h,
          onDragleave: x
        } = o.inject('TREE_UTILS');
      let l = {};
      return (
        c.value &&
          (l = {
            draggable: !0,
            onDragend: (n) => h(n),
            onDragleave: (n) => x(n),
            onDragover: (n) => N(n),
            onDragstart: (n) => v(n, e.value),
            onDrop: (n) => g(n, e.value)
          }),
        () =>
          o.createVNode(
            'div',
            {
              class: 'bu-tree--node',
              style: {
                paddingLeft: `${r * (e.value.level - 1)}px`,
                height: a + 'px',
                lineHeight: a + 'px'
              }
            },
            [
              !e.value.isLeaf &&
                e.value.expanded &&
                u.value &&
                o.createVNode(
                  'span',
                  {
                    class: 'bu-tree--node-vline',
                    style: {
                      height: `${a * s(e.value).length}px`,
                      left: `${r * (e.value.level - 1) + 12}px`,
                      top: `${a}px`
                    }
                  },
                  null
                ),
              o.createVNode(
                'div',
                o.mergeProps({ class: 'bu-tree--node-content' }, l),
                [
                  e.value.isLeaf
                    ? o.createVNode(
                        'span',
                        { style: { display: 'inline-block', width: '25px' } },
                        null
                      )
                    : t.icon(),
                  i.value &&
                    o.createVNode(
                      b.BuCheckbox,
                      {
                        modelValue: e.value.checked,
                        indeterminate: e.value.indeterminate,
                        onClick: () => {
                          p(e.value);
                        }
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
