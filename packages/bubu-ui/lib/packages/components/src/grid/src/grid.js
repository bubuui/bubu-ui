'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const r = require('vue'),
  y = r.defineComponent({
    name: 'BuGrid',
    props: {
      cols: { type: Number },
      xGap: { type: Number, default: 15 },
      yGap: { type: Number, default: 15 }
    },
    setup(a, { slots: s }) {
      const { cols: d, xGap: c, yGap: i } = r.toRefs(a);
      let t = 1;
      return () => {
        const n = r.renderSlot(s, 'default', { key: 0 }, () => []);
        return (n.children ?? []).length === 0
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
                n.children &&
                  n.children.map((e) => {
                    var p, u, o;
                    let l = {};
                    e &&
                      e.type.name === 'BuGridItem' &&
                      ((t += ((p = e.props) == null ? void 0 : p.offset) || 0),
                      (l = {
                        style: {
                          'grid-column': `${t} / span ${
                            ((u = e.props) == null ? void 0 : u.span) || 1
                          }`
                        }
                      }));
                    const f = r.h(e, l);
                    return (
                      (t += ((o = e.props) == null ? void 0 : o.span) || 1), f
                    );
                  })
              ]
            );
      };
    }
  });
exports.default = y;
