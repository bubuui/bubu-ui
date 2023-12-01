'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  C = require('./button-type.js'),
  g = require('../../icon/index.js'),
  B = e.defineComponent({
    name: 'BuButton',
    props: C.buttonProps,
    emits: { click: (t) => t instanceof MouseEvent },
    setup(t, { slots: o, attrs: a, emit: c }) {
      const {
          type: n,
          size: s,
          block: i,
          disabled: d,
          shape: u,
          loading: r
        } = e.toRefs(t),
        l = 'bu-btn',
        v = u.value ? `${l}--${u.value}` : '',
        b = s.value ? `${l}--${s.value}` : '',
        f = e.computed(() => [
          l,
          `${l}--${n.value}`,
          `${b}`,
          `${v}`,
          { [`${l}--block`]: i.value }
        ]),
        p = o.default ? o.default() : '按钮',
        $ = n.value === 'link' ? 'a' : 'button',
        m = (k) => {
          t.loading || t.disabled || c('click', k);
        };
      return () =>
        e.createVNode(
          $,
          e.mergeProps({ class: f.value, disabled: d.value, onClick: m }, a),
          {
            default: () => [
              r.value &&
                e.createVNode(
                  g.BuIcon,
                  { class: 'bu-load-loop', name: 'loading', size: '18' },
                  null
                ),
              p
            ]
          }
        );
    }
  });
exports.default = B;
