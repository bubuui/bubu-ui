'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const r = require('vue'),
  m = r.defineComponent({
    name: 'BuGrid',
    props: {
      cols: { type: Number },
      xGap: { type: Number, default: 15 },
      yGap: { type: Number, default: 15 }
    },
    setup(s, { slots: d }) {
      const { cols: c, xGap: i, yGap: f } = r.toRefs(s);
      let t = 1;
      return () => {
        var l;
        const n = r.renderSlot(d, 'default', { key: 0 }, () => []);
        return ((l = n.children) != null ? l : []).length === 0
          ? null
          : r.createVNode(
              'div',
              {
                style: {
                  'grid-template-columns': `repeat(${c.value}, minmax(0px, 1fr))`,
                  gap: `${f.value}px ${i.value}px`,
                  display: 'grid'
                }
              },
              [
                n.children &&
                  n.children.map((e) => {
                    var u, o, a;
                    let p = {};
                    e &&
                      e.type.name === 'BuGridItem' &&
                      ((t += ((u = e.props) == null ? void 0 : u.offset) || 0),
                      (p = {
                        style: {
                          'grid-column': `${t} / span ${
                            ((o = e.props) == null ? void 0 : o.span) || 1
                          }`
                        }
                      }));
                    const y = r.h(e, p);
                    return (
                      (t += ((a = e.props) == null ? void 0 : a.span) || 1), y
                    );
                  })
              ]
            );
      };
    }
  });
exports.default = m;
