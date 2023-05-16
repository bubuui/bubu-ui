'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  n = { class: 'bu-loading-spinner' },
  t = { key: 0, class: 'bu-loading-svg bu-load-loop' },
  s = { key: 1, 'aria-hidden': 'true', class: 'bu-loading-svg bu-load-loop' },
  a = e.createElementVNode(
    'use',
    { 'xlink:href': '#icon-loading', fill: '#2d8cf0' },
    null,
    -1
  ),
  i = [a],
  c = { class: 'bu-loading-text' },
  d = e.defineComponent({
    name: 'loading',
    props: {
      backgroundColor: null,
      text: null,
      fullscreen: { type: Boolean },
      customClass: null,
      visible: null
    },
    setup(l) {
      return (o, r) => (
        e.openBlock(),
        e.createBlock(
          e.Transition,
          { name: 'bu-loading-fade' },
          {
            default: e.withCtx(() => [
              e.withDirectives(
                e.createElementVNode(
                  'div',
                  {
                    class: e.normalizeClass([
                      'bu-loading-mask',
                      [l.customClass, l.fullscreen ? 'is-fullscreen' : '']
                    ]),
                    style: e.normalizeStyle({
                      backgroundColor: l.backgroundColor
                    })
                  },
                  [
                    e.createElementVNode('div', n, [
                      o.$slots.spinner
                        ? (e.openBlock(),
                          e.createElementBlock('span', t, [
                            e.renderSlot(o.$slots, 'spinner')
                          ]))
                        : (e.openBlock(), e.createElementBlock('svg', s, i)),
                      e.createElementVNode(
                        'div',
                        c,
                        e.toDisplayString(l.text),
                        1
                      )
                    ])
                  ],
                  6
                ),
                [[e.vShow, l.visible]]
              )
            ]),
            _: 3
          }
        )
      );
    }
  });
exports.default = d;
