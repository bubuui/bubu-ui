'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  a = { class: 'bu-title-content' },
  c = { name: 'BuTitle' },
  i = e.defineComponent({
    ...c,
    props: { sub: { type: Boolean }, border: { type: Boolean }, type: null },
    setup(o) {
      const { sub: l = !1, border: r = !1, type: n = 'primary' } = o,
        s = 'bu-title',
        u = e.computed(() => {
          let t = [s, `${s}--${n}`];
          return l && t.push(`${s}--sub`), r && t.push(`${s}--border`), t;
        });
      return (t, d) => (
        e.openBlock(),
        e.createElementBlock(
          'div',
          { class: e.normalizeClass(e.unref(u)) },
          [
            e.createElementVNode('div', a, [
              e.renderSlot(t.$slots, 'default'),
              e.renderSlot(t.$slots, 'left')
            ]),
            e.renderSlot(t.$slots, 'right')
          ],
          2
        )
      );
    }
  });
exports.default = i;
