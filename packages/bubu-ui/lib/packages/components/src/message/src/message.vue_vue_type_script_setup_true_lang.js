'use strict';
const e = require('vue'),
  h = require('./message-type.js'),
  y = require('../../icon/index.js'),
  d = require('./instance.js'),
  B = require('../../../../../node_modules/.pnpm/@vueuse_core@10.6.1/node_modules/@vueuse/core/index.js'),
  k = require('../../../../../node_modules/.pnpm/@vueuse_shared@10.6.1/node_modules/@vueuse/shared/index.js'),
  b = ['id'],
  C = { key: 0, class: 'bu-message--content' },
  _ = ['innerHTML'],
  L = e.defineComponent({
    name: 'BuMessage',
    __name: 'message',
    props: h.messageProps,
    emits: ['destory'],
    setup(m, { expose: f }) {
      const n = e.ref(!1),
        r = e.ref(),
        o = m,
        u = e.ref(0);
      let t;
      const p = e.computed(() => d.getLastOffset(o.id)),
        v = e.computed(() => u.value + a.value),
        a = e.computed(() => d.getOffsetOrSpace(o.id, o.offset) + p.value);
      function g() {
        t == null || t();
      }
      function i() {
        o.duration !== 0 &&
          ({ stop: t } = k.useTimeoutFn(() => {
            l();
          }, o.duration));
      }
      function l() {
        n.value = !1;
      }
      return (
        e.onMounted(() => {
          i(), (n.value = !0);
        }),
        B.useResizeObserver(r, () => {
          u.value = r.value.getBoundingClientRect().height;
        }),
        f({ close: l, visible: n, bottom: v }),
        (s, c) => (
          e.openBlock(),
          e.createBlock(
            e.Transition,
            {
              name: 'bu-message-fade',
              onAfterLeave: c[0] || (c[0] = (M) => s.$emit('destroy')),
              onBeforeLeave: s.onClose
            },
            {
              default: e.withCtx(() => [
                e.withDirectives(
                  e.createElementVNode(
                    'div',
                    {
                      class: e.normalizeClass([
                        'bu-message',
                        [`bu-message--${s.type}`, s.showClose ? 'is-close' : '']
                      ]),
                      id: s.id,
                      ref_key: 'messageRef',
                      ref: r,
                      style: e.normalizeStyle({
                        top: a.value + 'px',
                        zIndex: 99
                      }),
                      onMouseenter: g,
                      onMouseleave: i
                    },
                    [
                      e.renderSlot(s.$slots, 'default', {}, () => [
                        s.dangerouslyUseHTMLString
                          ? (e.openBlock(),
                            e.createElementBlock(
                              'p',
                              C,
                              e.toDisplayString(s.message),
                              1
                            ))
                          : (e.openBlock(),
                            e.createElementBlock(
                              'p',
                              {
                                key: 1,
                                class: 'bu-message--content',
                                innerHTML: s.message
                              },
                              null,
                              8,
                              _
                            ))
                      ]),
                      s.showClose
                        ? (e.openBlock(),
                          e.createBlock(e.unref(y.BuIcon), {
                            key: 0,
                            class: 'bu-message--close',
                            name: 'close',
                            size: 16
                          }))
                        : e.createCommentVNode('', !0)
                    ],
                    46,
                    b
                  ),
                  [[e.vShow, n.value]]
                )
              ]),
              _: 3
            },
            8,
            ['onBeforeLeave']
          )
        )
      );
    }
  });
module.exports = L;
