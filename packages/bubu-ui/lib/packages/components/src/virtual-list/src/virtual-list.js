'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  g = require('./virtual-list-type.js'),
  m = e.defineComponent({
    name: 'BuVirtualList',
    props: g.virtualListProps,
    setup(v, { slots: u }) {
      const { data: n, itemHeight: l, component: d } = e.toRefs(v),
        i = e.ref(),
        o = e.ref(0),
        s = e.ref(0),
        r = e.ref(0),
        p = (t) => {
          const a = t.target.scrollTop;
          (r.value = Math.floor(a / l.value)), (s.value = a - (a % l.value));
        },
        f = e.computed(() => Math.ceil(o.value / l.value)),
        h = e.computed(() =>
          n.value.slice(r.value, Math.min(r.value + f.value, n.value.length))
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
            d.value,
            { class: 'bu-virtual-list--container', ref: i, onScroll: p },
            {
              default: () => [
                e.createVNode(
                  'div',
                  {
                    class: 'bu-virtual-list--blank',
                    style: { height: `${n.value.length * l.value}px` }
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
                          (c = u.default) == null
                            ? void 0
                            : c.call(u, { item: t, index: a })
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
exports.default = m;
