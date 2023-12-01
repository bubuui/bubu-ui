'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  d = require('../../../../../node_modules/.pnpm/@vue_shared@3.3.9/node_modules/@vue/shared/dist/shared.esm-bundler.js'),
  v = require('./space.type.js'),
  m = e.defineComponent({
    name: 'BuSpace',
    props: v.sapceProps,
    setup(u, { slots: o }) {
      const { direction: t, wrap: i, alignment: c, size: r } = e.toRefs(u),
        n = 'bu-space',
        p = e.computed(() => [n, `${n}--${t.value}`]),
        s = e.computed(() =>
          r.value
            ? typeof r.value == 'string'
              ? r.value
              : r.value + 'px'
            : '8px'
        );
      return () => {
        const a = e.renderSlot(o, 'default', { key: 0 }, () => []);
        return (a.children ?? []).length === 0
          ? null
          : e.createVNode(
              'div',
              {
                class: p.value,
                style: {
                  'flex-wrap': i.value ? 'wrap' : 'nowrap',
                  'align-items': c.value
                }
              },
              [
                d.isArray(a.children) &&
                  a.children.map((l) =>
                    l.type === e.Comment
                      ? e.h(l)
                      : e.h(
                          'div',
                          {
                            class: 'bu-space--item',
                            style: {
                              'margin-bottom':
                                t.value === 'horizontal' ? 0 : s.value,
                              'margin-right':
                                t.value === 'horizontal' ? s.value : 0
                            }
                          },
                          l
                        )
                  )
              ]
            );
      };
    }
  });
exports.default = m;
