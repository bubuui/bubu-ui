'use strict';
const f = require('../../icon/index.js'),
  o = require('vue'),
  c = require('./notification.js'),
  d = require('../../../../../node_modules/.pnpm/@vueuse_shared@10.6.1/node_modules/@vueuse/shared/index.js'),
  m = o.defineComponent({
    name: 'BuNofication',
    emits: c.notificationEmits,
    props: c.notificationProps,
    components: { BuIcon: f.BuIcon },
    setup(t) {
      const e = o.ref(!1);
      let n;
      const r = o.computed(() =>
          t.position.endsWith('right') ? 'right' : 'left'
        ),
        u = o.computed(() => (t.position.startsWith('top') ? 'top' : 'bottom')),
        a = o.computed(() => ({
          [u.value]: `${t.offset}px`,
          zIndex: t.zIndex
        })),
        i = () => {
          console.log('en'), (e.value = !1);
        },
        s = () => {
          t.duration > 0 &&
            ({ stop: n } = d.useTimeoutFn(() => {
              e.value && i();
            }, t.duration));
        },
        l = () => {
          n == null || n();
        };
      return (
        o.onMounted(() => {
          s(), (e.value = !0);
        }),
        {
          visible: e,
          horizontalClass: r,
          positionStyle: a,
          close: i,
          startTimer: s,
          clearTimer: l
        }
      );
    }
  });
module.exports = m;
