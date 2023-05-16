'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const l = require('../../../../../node_modules/.pnpm/@vue_shared@3.2.47/node_modules/@vue/shared/dist/shared.esm-bundler.js'),
  r = require('vue'),
  o = require('./instance.js'),
  i = require('./message.vue_vue_type_script_setup_true_lang.js');
let m = 1;
const _ = (e) => {
    const s = v(e);
    return o.instances.push(s), console.log('container', s.id), s.handler;
  },
  g = (e) => {
    const s = o.instances.indexOf(e);
    if (s === -1) return;
    o.instances.splice(s, 1);
    const { handler: t } = e;
    t.close();
  },
  v = (e) => {
    const s = `message_${m++}`,
      t = document.createElement('div'),
      n = {
        ...e,
        id: s,
        onClose: () => {
          var d;
          (d = e.onClose) == null || d.call(e), g(u);
        },
        onDestroy: () => {
          r.render(null, t);
        }
      },
      c = r.createVNode(
        i.default,
        n,
        l.isFunction(n.message) || r.isVNode(n.message)
          ? { default: l.isFunction(n.message) ? n.message : () => n.message }
          : null
      );
    r.render(c, t), document.body.append(t.firstElementChild);
    const a = c.component,
      u = {
        id: s,
        vnode: c,
        vm: a,
        handler: {
          close: () => {
            a.exposed.visible.value = !1;
          }
        }
      };
    return u;
  };
exports.default = _;
