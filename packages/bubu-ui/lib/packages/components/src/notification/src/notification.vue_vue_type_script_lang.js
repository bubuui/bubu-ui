'use strict';
const l = require('../../icon/index.js'),
  t = require('vue'),
  u = require('./notification2.js'),
  f = require('../../../../../node_modules/.pnpm/@vueuse_shared@10.6.1/node_modules/@vueuse/shared/index.js'),
  m = t.defineComponent({
    name: 'BuNofication',
    emits: u.notificationEmits,
    props: u.notificationProps,
    components: { BuIcon: l.BuIcon },
    setup(e) {
      const o = t.ref(!1);
      let n;
      const c = t.computed(() =>
          e.position.endsWith('right') ? 'right' : 'left'
        ),
        r = t.computed(() => (e.position.startsWith('top') ? 'top' : 'bottom')),
        a = t.computed(() => ({
          [r.value]: `${e.offset}px`,
          zIndex: e.zIndex
        })),
        i = () => {
          console.log('en'), (o.value = !1);
        },
        s = () => {
          e.duration > 0 &&
            ({ stop: n } = f.useTimeoutFn(() => {
              o.value && i();
            }, e.duration));
        },
        d = () => {
          n == null || n();
        };
      return (
        t.onMounted(() => {
          s(), (o.value = !0);
        }),
        {
          visible: o,
          horizontalClass: c,
          positionStyle: a,
          close: i,
          startTimer: s,
          clearTimer: d
        }
      );
    }
  });
module.exports = m;
