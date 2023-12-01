'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  y = require('./message-type.js'),
  B = require('../../icon/index.js'),
  d = require('./instance.js'),
  k = require('../../../../../node_modules/.pnpm/@vueuse_core@10.6.1/node_modules/@vueuse/core/index.js'),
  b = require('../../../../../node_modules/.pnpm/@vueuse_shared@10.6.1/node_modules/@vueuse/shared/index.js'),
  h = ['id'],
  M = { key: 0, class: 'bu-message--content' },
  C = ['innerHTML'],
  S = e.defineComponent({
    name: 'BuMessage',
    __name: 'message',
    props: y.messageProps,
    emits: ['destory'],
    setup(m, { expose: f }) {
      const t = e.ref(!1),
        r = e.ref(),
        o = m,
        a = e.ref(0);
      let n;
      const g = e.computed(() => d.getLastOffset(o.id)),
        p = e.computed(() => a.value + i.value),
        i = e.computed(() => d.getOffsetOrSpace(o.id, o.offset) + g.value);
      function v() {
        n == null || n();
      }
      function l() {
        o.duration !== 0 &&
          ({ stop: n } = b.useTimeoutFn(() => {
            u();
          }, o.duration));
      }
      function u() {
        t.value = !1;
      }
      return (
        e.onMounted(() => {
          l(), (t.value = !0);
        }),
        k.useResizeObserver(r, () => {
          a.value = r.value.getBoundingClientRect().height;
        }),
        f({ close: u, visible: t, bottom: p }),
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
                      ref: r,
                      style: e.normalizeStyle({
                        top: i.value + 'px',
                        zIndex: 99
                      }),
                      onMouseenter: v,
                      onMouseleave: l
                    },
                    [
                      e.renderSlot(s.$slots, 'default', {}, () => [
                        s.dangerouslyUseHTMLString
                          ? (e.openBlock(),
                            e.createElementBlock(
                              'p',
                              M,
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
                              C
                            ))
                      ]),
                      s.showClose
                        ? (e.openBlock(),
                          e.createBlock(e.unref(B.BuIcon), {
                            key: 0,
                            class: 'bu-message--close',
                            name: 'close',
                            size: 16
                          }))
                        : e.createCommentVNode('', !0)
                    ],
                    46,
                    h
                  ),
                  [[e.vShow, t.value]]
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
