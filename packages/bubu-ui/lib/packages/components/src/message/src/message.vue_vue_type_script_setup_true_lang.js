'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  _ = require('./message-type.js'),
  h = require('../../icon/index.js'),
  d = require('./instance.js'),
  y = require('../../../../../node_modules/.pnpm/@vueuse_core@10.0.2_vue@3.2.36/node_modules/@vueuse/core/index.js'),
  B = require('../../../../../node_modules/.pnpm/@vueuse_shared@10.0.2_vue@3.2.36/node_modules/@vueuse/shared/index.js'),
  k = ['id'],
  b = { key: 0, class: 'bu-message--content' },
  M = ['innerHTML'],
  C = { name: 'BuMessage' },
  S = e.defineComponent({
    ...C,
    props: _.messageProps,
    setup(m, { expose: f }) {
      const o = m,
        n = e.ref(!1),
        u = e.ref(),
        r = e.ref(0);
      let t;
      const v = e.computed(() => d.getLastOffset(o.id)),
        p = e.computed(() => r.value + a.value),
        a = e.computed(() => d.getOffsetOrSpace(o.id, o.offset) + v.value);
      function g() {
        t == null || t();
      }
      function i() {
        o.duration !== 0 &&
          ({ stop: t } = B.useTimeoutFn(() => {
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
        y.useResizeObserver(u, () => {
          r.value = u.value.getBoundingClientRect().height;
        }),
        f({ close: l, visible: n, bottom: p }),
        (s, c) => (
          e.openBlock(),
          e.createBlock(
            e.Transition,
            {
              name: 'bu-message-fade',
              onAfterLeave: c[0] || (c[0] = (T) => s.$emit('destroy')),
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
                      ref: u,
                      style: e.normalizeStyle({
                        top: e.unref(a) + 'px',
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
                              b,
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
                              M
                            ))
                      ]),
                      s.showClose
                        ? (e.openBlock(),
                          e.createBlock(e.unref(h.BuIcon), {
                            key: 0,
                            class: 'bu-message--close',
                            name: 'close',
                            size: 16
                          }))
                        : e.createCommentVNode('', !0)
                    ],
                    46,
                    k
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
exports.default = S;
