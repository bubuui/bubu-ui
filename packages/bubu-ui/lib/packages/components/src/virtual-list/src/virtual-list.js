'use strict';
const e = require('vue'),
  g = require('./virtual-list-type.js'),
  m = e.defineComponent({
    name: 'BuVirtualList',
    props: g.virtualListProps,
    setup(v, { slots: n }) {
      const { data: u, itemHeight: l, component: p } = e.toRefs(v),
        i = e.ref(),
        o = e.ref(0),
        s = e.ref(0),
        r = e.ref(0),
        d = (t) => {
          const a = t.target.scrollTop;
          (r.value = Math.floor(a / l.value)), (s.value = a - (a % l.value));
        },
        f = e.computed(() => Math.ceil(o.value / l.value)),
        h = e.computed(() =>
          u.value.slice(r.value, Math.min(r.value + f.value, u.value.length))
        );
      return (
        e.onMounted(() => {
          e.nextTick(() => {
            var t;
            (o.value = (t = i.value) == null ? void 0 : t.clientHeight),
              console.log('containerHeight', o.value);
          });
        }),
        () =>
          e.createVNode(
            p.value,
            { class: 'bu-virtual-list--container', ref: i, onScroll: d },
            {
              default: () => [
                e.createVNode(
                  'div',
                  {
                    class: 'bu-virtual-list--blank',
                    style: { height: `${u.value.length * l.value}px` }
                  },
                  null
                ),
                e.createVNode(
                  'div',
                  {
                    class: 'bu-virtual-list',
                    style: { transform: `translate3d(0,${s.value}px,0)` }
                  },
                  [
                    h.value.map((t, a) => {
                      var c;
                      return e.createVNode(
                        'div',
                        { style: { height: l.value + 'px' } },
                        [
                          (c = n.default) == null
                            ? void 0
                            : c.call(n, { item: t, index: a })
                        ]
                      );
                    })
                  ]
                )
              ]
            }
          )
      );
    }
  });
module.exports = m;
