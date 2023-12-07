'use strict';
const a = require('./container.vue2.js'),
  e = require('vue');
require('./container.vue3.js');
const d = require('../../../../../_virtual/_plugin-vue_export-helper.js'),
  s = (o) => (e.pushScopeId('data-v-cf1226f6'), (o = o()), e.popScopeId(), o),
  c = { class: 'ysj-image-container' },
  u = { class: 'ysj-image-container-header' },
  m = { key: 0 },
  p = { key: 1, class: 'ysj-image-opt' },
  g = s(() =>
    e.createElementVNode(
      'svg',
      { class: 'iconpark-icon' },
      [e.createElementVNode('use', { href: '#zoom-in' })],
      -1
    )
  ),
  h = [g],
  k = s(() =>
    e.createElementVNode(
      'svg',
      { class: 'iconpark-icon' },
      [e.createElementVNode('use', { href: '#zoom-out' })],
      -1
    )
  ),
  v = [k],
  f = s(() =>
    e.createElementVNode(
      'svg',
      { class: 'iconpark-icon' },
      [e.createElementVNode('use', { href: '#download-four' })],
      -1
    )
  ),
  w = [f],
  E = s(() =>
    e.createElementVNode(
      'svg',
      { class: 'iconpark-icon' },
      [e.createElementVNode('use', { href: '#full-screen' })],
      -1
    )
  ),
  V = [E],
  N = s(() =>
    e.createElementVNode(
      'svg',
      { class: 'iconpark-icon' },
      [e.createElementVNode('use', { href: '#close' })],
      -1
    )
  ),
  C = [N],
  y = { class: 'loading-wrapper' },
  B = { class: 'loading-wrapper' },
  D = { key: 1 },
  S = ['src'],
  b = s(() =>
    e.createElementVNode(
      'svg',
      { class: 'iconpark-icon' },
      [e.createElementVNode('use', { href: '#left' })],
      -1
    )
  ),
  j = [b],
  F = s(() =>
    e.createElementVNode(
      'svg',
      { class: 'iconpark-icon' },
      [e.createElementVNode('use', { href: '#right' })],
      -1
    )
  ),
  T = [F];
function $(o, t, R, I, M, q) {
  const r = e.resolveComponent('swipe-item'),
    i = e.resolveComponent('swipe');
  return (
    e.openBlock(),
    e.createElementBlock('div', c, [
      e.createElementVNode('div', u, [
        e.renderSlot(o.$slots, 'default', {}, void 0, !0),
        o.config.header
          ? e.createCommentVNode('', !0)
          : (e.openBlock(),
            e.createElementBlock(
              'div',
              m,
              e.toDisplayString(
                o.dataConfig.current + '/' + o.dataConfig.urls.length
              ),
              1
            )),
        !o.config.header && o.browserRedirect === 'Desktop'
          ? (e.openBlock(),
            e.createElementBlock('div', p, [
              e.createElementVNode(
                'button',
                { onClick: t[0] || (t[0] = (n) => o.zoom('big')) },
                h
              ),
              e.createElementVNode(
                'button',
                { onClick: t[1] || (t[1] = (n) => o.zoom('small')) },
                v
              ),
              e.createElementVNode(
                'button',
                {
                  onClick:
                    t[2] || (t[2] = (...n) => o.dwonload && o.dwonload(...n))
                },
                w
              ),
              e.createElementVNode(
                'button',
                {
                  onClick:
                    t[3] || (t[3] = (...n) => o.getFull && o.getFull(...n))
                },
                V
              ),
              e.createElementVNode(
                'button',
                {
                  onClick: t[4] || (t[4] = (...n) => o.close && o.close(...n))
                },
                C
              )
            ]))
          : e.createCommentVNode('', !0)
      ]),
      o.browserRedirect === 'Desktop'
        ? (e.openBlock(),
          e.createElementBlock(
            'div',
            {
              key: 0,
              class: 'ysj-image-container-content',
              onMousedown:
                t[5] || (t[5] = (...n) => o.mousedown && o.mousedown(...n)),
              onMousemove:
                t[6] || (t[6] = (...n) => o.mousemove && o.mousemove(...n)),
              onMouseup: t[7] || (t[7] = (...n) => o.mouseup && o.mouseup(...n))
            },
            [
              e.withDirectives(
                e.createElementVNode('span', y, '图片加载中', 512),
                [[e.vShow, o.loading]]
              ),
              e.withDirectives(
                e.createElementVNode('span', B, '图片加载失败', 512),
                [[e.vShow, o.error]]
              ),
              e.withDirectives(
                e.createElementVNode(
                  'img',
                  {
                    ref: 'imgDom',
                    alt: '',
                    style: e.normalizeStyle(o.imgTransform)
                  },
                  null,
                  4
                ),
                [[e.vShow, !o.loading]]
              )
            ],
            32
          ))
        : (e.openBlock(),
          e.createElementBlock('div', D, [
            e.createVNode(
              i,
              {
                class: 'ysj-my-swipe',
                active: o.dataConfig.current - 1,
                onChange: o.changeSwipe
              },
              {
                default: e.withCtx(() => [
                  (e.openBlock(!0),
                  e.createElementBlock(
                    e.Fragment,
                    null,
                    e.renderList(
                      o.config.urls,
                      (n, l) => (
                        e.openBlock(),
                        e.createBlock(
                          r,
                          {
                            key: n,
                            onTouchstart: o.touchstart,
                            onTouchmove: o.touchmove,
                            onTouchend: o.touchend
                          },
                          {
                            default: e.withCtx(() => [
                              e.createElementVNode(
                                'img',
                                {
                                  src: n,
                                  style: e.normalizeStyle(
                                    l === o.dataConfig.current - 1
                                      ? o.imgStyle
                                      : {}
                                  ),
                                  alt: '',
                                  class: 'img-item'
                                },
                                null,
                                12,
                                S
                              )
                            ]),
                            _: 2
                          },
                          1032,
                          ['onTouchstart', 'onTouchmove', 'onTouchend']
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              8,
              ['active', 'onChange']
            )
          ])),
      o.dataConfig.current > 1 && o.browserRedirect === 'Desktop'
        ? (e.openBlock(),
          e.createElementBlock(
            'div',
            {
              key: 2,
              class: 'ysj-image-arraw-left',
              onClick:
                t[8] ||
                (t[8] = e.withModifiers(
                  (...n) => o.arrawLeft && o.arrawLeft(...n),
                  ['stop']
                ))
            },
            j
          ))
        : e.createCommentVNode('', !0),
      o.dataConfig.current < o.dataConfig.urls.length &&
      o.browserRedirect === 'Desktop'
        ? (e.openBlock(),
          e.createElementBlock(
            'div',
            {
              key: 3,
              class: 'ysj-image-arraw-right',
              onClick:
                t[9] ||
                (t[9] = e.withModifiers(
                  (...n) => o.arrawRight && o.arrawRight(...n),
                  ['stop']
                ))
            },
            T
          ))
        : e.createCommentVNode('', !0)
    ])
  );
}
const z = d(a, [
  ['render', $],
  ['__scopeId', 'data-v-cf1226f6']
]);
module.exports = z;
