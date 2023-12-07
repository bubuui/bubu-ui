'use strict';
const s = require('./notification.vue2.js'),
  e = require('vue'),
  l = require('../../../../../_virtual/_plugin-vue_export-helper.js'),
  r = ['id'],
  a = { class: 'bu-notification--group' },
  c = { class: 'bu-notification--title' },
  u = { class: 'bu-notification--content' },
  d = { key: 0 },
  p = ['innerHTML'];
function m(o, n, v, y, k, B) {
  const i = e.resolveComponent('bu-icon');
  return (
    e.openBlock(),
    e.createBlock(
      e.Transition,
      {
        name: 'bu-notification-fade',
        onBeforeLeave: o.onClose,
        onAfterLeave: n[2] || (n[2] = (t) => o.$emit('destroy'))
      },
      {
        default: e.withCtx(() => [
          e.withDirectives(
            e.createElementVNode(
              'div',
              {
                id: o.id,
                class: e.normalizeClass(['bu-notification', o.horizontalClass]),
                style: e.normalizeStyle(o.positionStyle),
                onMouseenter:
                  n[0] || (n[0] = (...t) => o.clearTimer && o.clearTimer(...t)),
                onMouseleave:
                  n[1] || (n[1] = (...t) => o.startTimer && o.startTimer(...t))
              },
              [
                o.type
                  ? (e.openBlock(),
                    e.createBlock(
                      i,
                      {
                        key: 0,
                        name: o.type,
                        size: '24px',
                        class: e.normalizeClass([
                          'notification-title-icon',
                          o.type
                        ])
                      },
                      null,
                      8,
                      ['name', 'class']
                    ))
                  : e.createCommentVNode('', !0),
                e.createElementVNode('div', a, [
                  e.createElementVNode('div', c, e.toDisplayString(o.title), 1),
                  e.createElementVNode('div', u, [
                    e.renderSlot(o.$slots, 'default', {}, () => [
                      o.dangerouslyUseHTMLString
                        ? (e.openBlock(),
                          e.createElementBlock(
                            'p',
                            { key: 1, innerHTML: o.message },
                            null,
                            8,
                            p
                          ))
                        : (e.openBlock(),
                          e.createElementBlock(
                            'p',
                            d,
                            e.toDisplayString(o.message),
                            1
                          ))
                    ])
                  ]),
                  e.createVNode(
                    i,
                    {
                      onClick: o.close,
                      class: 'bu-notification--close',
                      name: 'close',
                      size: '18px'
                    },
                    null,
                    8,
                    ['onClick']
                  )
                ])
              ],
              46,
              r
            ),
            [[e.vShow, o.visible]]
          )
        ]),
        _: 3
      },
      8,
      ['onBeforeLeave']
    )
  );
}
const f = l(s, [['render', m]]);
module.exports = f;
