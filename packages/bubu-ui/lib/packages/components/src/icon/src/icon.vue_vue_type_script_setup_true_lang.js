'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  c = ['xlink:href', 'fill'],
  a = ['src', 'alt'],
  r = { name: 'BuIcon' },
  s = e.defineComponent({
    ...r,
    props: { name: null, size: null, color: null, type: null, component: null },
    setup(t) {
      const l = t,
        o = e.computed(() =>
          typeof l.size == 'number' ? `${l.size}px` : l.size
        );
      return (n, u) => (
        e.openBlock(),
        e.createElementBlock(
          e.Fragment,
          null,
          [
            t.component
              ? (e.openBlock(),
                e.createElementBlock(
                  'svg',
                  e.mergeProps(
                    {
                      key: 0,
                      class: [
                        n.$attrs.class,
                        'icon',
                        'icon-svg',
                        t.type && `icon-${t.type}`
                      ],
                      style: { width: e.unref(o), height: e.unref(o) },
                      'aria-hidden': 'true'
                    },
                    n.$attrs
                  ),
                  [
                    e.createElementVNode(
                      'use',
                      { 'xlink:href': `#icon-${t.component}`, fill: t.color },
                      null,
                      8,
                      c
                    )
                  ],
                  16
                ))
              : e.createCommentVNode('', !0),
            t.name
              ? (e.openBlock(),
                e.createElementBlock(
                  e.Fragment,
                  { key: 1 },
                  [
                    /http|https/.test(t.name)
                      ? (e.openBlock(),
                        e.createElementBlock(
                          'img',
                          e.mergeProps({ key: 0 }, n.$attrs, {
                            src: t.name,
                            alt: t.name
                          }),
                          null,
                          16,
                          a
                        ))
                      : (e.openBlock(),
                        e.createElementBlock(
                          'span',
                          e.mergeProps(
                            {
                              key: 1,
                              class: [
                                'bu-icon',
                                'icon-' + t.name,
                                t.type && `icon-${t.type}`,
                                n.$attrs.class
                              ]
                            },
                            n.$attrs,
                            { style: { fontSize: e.unref(o), color: t.color } }
                          ),
                          null,
                          16
                        ))
                  ],
                  64
                ))
              : e.createCommentVNode('', !0)
          ],
          64
        )
      );
    }
  });
exports.default = s;
