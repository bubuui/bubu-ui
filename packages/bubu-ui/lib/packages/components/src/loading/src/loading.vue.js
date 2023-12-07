'use strict';
const e = require('vue'),
  s = { class: 'bu-loading-spinner' },
  l = { key: 0, class: 'bu-loading-svg bu-load-loop' },
  n = { key: 1, 'aria-hidden': 'true', class: 'bu-loading-svg bu-load-loop' },
  t = e.createElementVNode(
    'use',
    { 'xlink:href': '#icon-loading', fill: '#2d8cf0' },
    null,
    -1
  ),
  i = [t],
  a = { class: 'bu-loading-text' },
  r = e.defineComponent({
    __name: 'loading',
    props: {
      backgroundColor: {},
      text: {},
      fullscreen: { type: Boolean },
      customClass: {},
      visible: {}
    },
    setup(c) {
      return (o, d) => (
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
                    e.createElementVNode('div', s, [
                      o.$slots.spinner
                        ? (e.openBlock(),
                          e.createElementBlock('span', l, [
                            e.renderSlot(o.$slots, 'spinner')
                          ]))
                        : (e.openBlock(), e.createElementBlock('svg', n, i)),
                      e.createElementVNode(
                        'div',
                        a,
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
module.exports = r;
