'use strict';
const r = require('vue'),
  y = r.defineComponent({
    name: 'BuGrid',
    props: {
      cols: { type: Number },
      xGap: { type: Number, default: 15 },
      yGap: { type: Number, default: 15 }
    },
    setup(a, { slots: u }) {
      const { cols: d, xGap: c, yGap: i } = r.toRefs(a);
      let p = 1;
      return () => {
        const t = r.renderSlot(u, 'default', { key: 0 }, () => []);
        return (t.children ?? []).length === 0
          ? null
          : r.createVNode(
              'div',
              {
                style: {
                  'grid-template-columns': `repeat(${d.value}, minmax(0px, 1fr))`,
                  gap: `${i.value}px ${c.value}px`,
                  display: 'grid'
                }
              },
              [
                t.children &&
                  t.children.map((e) => {
                    var s, l, o;
                    let n = {};
                    e &&
                      e.type.name === 'BuGridItem' &&
                      ((p += ((s = e.props) == null ? void 0 : s.offset) || 0),
                      (n = {
                        style: {
                          'grid-column': `${p} / span ${
                            ((l = e.props) == null ? void 0 : l.span) || 1
                          }`
                        }
                      }));
                    const f = r.h(e, n);
                    return (
                      (p += ((o = e.props) == null ? void 0 : o.span) || 1), f
                    );
                  })
              ]
            );
      };
    }
  });
module.exports = y;
