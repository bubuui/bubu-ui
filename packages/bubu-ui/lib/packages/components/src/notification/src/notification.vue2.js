'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const d = require('../../icon/index.js'),
  e = require('vue'),
  u = require('./notification.js'),
  f = require('../../../../../node_modules/.pnpm/@vueuse_shared@10.6.1/node_modules/@vueuse/shared/index.js'),
  m = e.defineComponent({
    name: 'BuNofication',
    emits: u.notificationEmits,
    props: u.notificationProps,
    components: { BuIcon: d.BuIcon },
    setup(t) {
      const o = e.ref(!1);
      let n;
      const c = e.computed(() =>
          t.position.endsWith('right') ? 'right' : 'left'
        ),
        r = e.computed(() => (t.position.startsWith('top') ? 'top' : 'bottom')),
        a = e.computed(() => ({
          [r.value]: `${t.offset}px`,
          zIndex: t.zIndex
        })),
        i = () => {
          console.log('en'), (o.value = !1);
        },
        s = () => {
          t.duration > 0 &&
            ({ stop: n } = f.useTimeoutFn(() => {
              o.value && i();
            }, t.duration));
        },
        l = () => {
          n == null || n();
        };
      return (
        e.onMounted(() => {
          s(), (o.value = !0);
        }),
        {
          visible: o,
          horizontalClass: c,
          positionStyle: a,
          close: i,
          startTimer: s,
          clearTimer: l
        }
      );
    }
  });
exports.default = m;
