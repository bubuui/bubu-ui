'use strict';
const a = require('vue'),
  x = require('./tree-node-type.js'),
  b = require('../../../checkbox/index.js'),
  o = 32,
  l = 24,
  f = a.defineComponent({
    name: 'BuTreeNode',
    props: x.treeNodeProps,
    setup(d, { slots: t, emit: m }) {
      const {
          treeNode: e,
          lineable: i,
          checkable: u,
          dragdrop: c
        } = a.toRefs(d),
        {
          getChildrenExpanded: s,
          toggleCheckNode: p,
          onDragstart: v,
          onDrop: g,
          onDragover: N,
          onDragend: D,
          onDragleave: h
        } = a.inject('TREE_UTILS');
      let r = {};
      return (
        c.value &&
          (r = {
            draggable: !0,
            onDragend: (n) => D(n),
            onDragleave: (n) => h(n),
            onDragover: (n) => N(n),
            onDragstart: (n) => v(n, e.value),
            onDrop: (n) => g(n, e.value)
          }),
        () =>
          a.createVNode(
            'div',
            {
              class: 'bu-tree--node',
              style: {
                paddingLeft: `${l * (e.value.level - 1)}px`,
                height: o + 'px',
                lineHeight: o + 'px'
              }
            },
            [
              !e.value.isLeaf &&
                e.value.expanded &&
                i.value &&
                a.createVNode(
                  'span',
                  {
                    class: 'bu-tree--node-vline',
                    style: {
                      height: `${o * s(e.value).length}px`,
                      left: `${l * (e.value.level - 1) + 12}px`,
                      top: `${o}px`
                    }
                  },
                  null
                ),
              a.createVNode(
                'div',
                a.mergeProps({ class: 'bu-tree--node-content' }, r),
                [
                  e.value.isLeaf
                    ? a.createVNode(
                        'span',
                        { style: { display: 'inline-block', width: '25px' } },
                        null
                      )
                    : t.icon(),
                  u.value &&
                    a.createVNode(
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
module.exports = f;
