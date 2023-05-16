'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  C = require('./button-type.js'),
  g = require('../../icon/index.js'),
  y = e.defineComponent({
    name: 'BuButton',
    props: C.buttonProps,
    emits: { click: (t) => t instanceof MouseEvent },
    setup(t, { slots: l, attrs: a, emit: c }) {
      const {
          type: n,
          size: s,
          block: i,
          disabled: d,
          shape: u,
          loading: r
        } = e.toRefs(t),
        o = 'bu-btn',
        v = u.value ? `${o}--${u.value}` : '',
        b = s.value ? `${o}--${s.value}` : '',
        p = e.computed(() => [
          o,
          `${o}--${n.value}`,
          `${b}`,
          `${v}`,
          { [`${o}--block`]: i.value }
        ]),
        f = l.default ? l.default() : '\u6309\u94AE',
        $ = n.value === 'link' ? 'a' : 'button',
        m = (k) => {
          t.loading || t.disabled || c('click', k);
        };
      return () =>
        e.createVNode(
          $,
          e.mergeProps({ class: p.value, disabled: d.value, onClick: m }, a),
          {
            default: () => [
              r.value &&
                e.createVNode(
                  g.BuIcon,
                  { class: 'bu-load-loop', name: 'loading', size: '18' },
                  null
                ),
              f
            ]
          }
        );
    }
  });
exports.default = y;
