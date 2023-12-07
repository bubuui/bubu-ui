'use strict';
const e = require('vue'),
  s = ['xlink:href', 'fill'],
  r = ['src', 'alt'],
  a = e.defineComponent({
    name: 'BuIcon',
    __name: 'icon',
    props: { name: {}, size: {}, color: {}, type: {}, component: {} },
    setup(l) {
      const n = l,
        t = e.computed(() =>
          typeof n.size == 'number' ? `${n.size}px` : n.size
        );
      return (o, c) => (
        e.openBlock(),
        e.createElementBlock(
          e.Fragment,
          null,
          [
            o.component
              ? (e.openBlock(),
                e.createElementBlock(
                  'svg',
                  e.mergeProps(
                    {
                      key: 0,
                      class: [
                        o.$attrs.class,
                        'icon',
                        'icon-svg',
                        o.type && `icon-${o.type}`
                      ],
                      style: { width: t.value, height: t.value },
                      'aria-hidden': 'true'
                    },
                    o.$attrs
                  ),
                  [
                    e.createElementVNode(
                      'use',
                      { 'xlink:href': `#icon-${o.component}`, fill: o.color },
                      null,
                      8,
                      s
                    )
                  ],
                  16
                ))
              : e.createCommentVNode('', !0),
            o.name
              ? (e.openBlock(),
                e.createElementBlock(
                  e.Fragment,
                  { key: 1 },
                  [
                    /http|https/.test(o.name)
                      ? (e.openBlock(),
                        e.createElementBlock(
                          'img',
                          e.mergeProps({ key: 0 }, o.$attrs, {
                            src: o.name,
                            alt: o.name
                          }),
                          null,
                          16,
                          r
                        ))
                      : (e.openBlock(),
                        e.createElementBlock(
                          'span',
                          e.mergeProps(
                            {
                              key: 1,
                              class: [
                                'bu-icon',
                                'icon-' + o.name,
                                o.type && `icon-${o.type}`,
                                o.$attrs.class
                              ]
                            },
                            o.$attrs,
                            { style: { fontSize: t.value, color: o.color } }
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
module.exports = a;
