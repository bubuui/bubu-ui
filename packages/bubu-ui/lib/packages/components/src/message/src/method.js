'use strict';
const i = require('../../../../../node_modules/.pnpm/@vue_shared@3.3.9/node_modules/@vue/shared/dist/shared.esm-bundler.js'),
  c = require('vue'),
  o = require('./instance.js'),
  u = require('./message.vue.js');
let m = 1;
const g = (e) => {
    const s = v(e);
    return o.instances.push(s), console.log('container', s.id), s.handler;
  },
  _ = (e) => {
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
          (d = e.onClose) == null || d.call(e), _(l);
        },
        onDestroy: () => {
          c.render(null, t);
        }
      },
      r = c.createVNode(
        u,
        n,
        i.isFunction(n.message) || c.isVNode(n.message)
          ? { default: i.isFunction(n.message) ? n.message : () => n.message }
          : null
      );
    c.render(r, t), document.body.append(t.firstElementChild);
    const a = r.component,
      l = {
        id: s,
        vnode: r,
        vm: a,
        handler: {
          close: () => {
            a.exposed.visible.value = !1;
          }
        }
      };
    return l;
  };
module.exports = g;
