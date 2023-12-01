'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  l = { class: 'bu-loading-spinner' },
  s = { key: 0, class: 'bu-loading-svg bu-load-loop' },
  n = { key: 1, 'aria-hidden': 'true', class: 'bu-loading-svg bu-load-loop' },
  t = e.createElementVNode(
    'use',
    { 'xlink:href': '#icon-loading', fill: '#2d8cf0' },
    null,
    -1
  ),
  a = [t],
  i = { class: 'bu-loading-text' },
  r = e.defineComponent({
    __name: 'loading',
    props: {
      backgroundColor: {},
      text: {},
      fullscreen: { type: Boolean },
      customClass: {},
      visible: {}
    },
    setup(d) {
      return (o, c) => (
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
                      [o.customClass, o.fullscreen ? 'is-fullscreen' : '']
                    ]),
                    style: e.normalizeStyle({
                      backgroundColor: o.backgroundColor
                    })
                  },
                  [
                    e.createElementVNode('div', l, [
                      o.$slots.spinner
                        ? (e.openBlock(),
                          e.createElementBlock('span', s, [
                            e.renderSlot(o.$slots, 'spinner')
                          ]))
                        : (e.openBlock(), e.createElementBlock('svg', n, a)),
                      e.createElementVNode(
                        'div',
                        i,
                        e.toDisplayString(o.text),
                        1
                      )
                    ])
                  ],
                  6
                ),
                [[e.vShow, o.visible]]
              )
            ]),
            _: 3
          }
        )
      );
    }
  });
exports.default = r;
