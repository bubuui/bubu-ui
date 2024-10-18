import { isFunction as d } from "../../../../../node_modules/.pnpm/@vue_shared@3.5.12/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { render as m, createVNode as i, isVNode as u } from "vue";
import { instances as c } from "./instance.mjs";
import f from "./message.vue.mjs";
let g = 1;
const y = (e) => {
  const s = h(e);
  return c.push(s), console.log("container", s.id), s.handler;
}, p = (e) => {
  const s = c.indexOf(e);
  if (s === -1) return;
  c.splice(s, 1);
  const { handler: o } = e;
  o.close();
}, h = (e) => {
  const s = `message_${g++}`, o = document.createElement("div"), n = {
    ...e,
    id: s,
    onClose: () => {
      var l;
      (l = e.onClose) == null || l.call(e), p(a);
    },
    onDestroy: () => {
      m(null, o);
    }
  }, t = i(
    f,
    n,
    d(n.message) || u(n.message) ? {
      default: d(n.message) ? n.message : () => n.message
    } : null
  );
  m(t, o), document.body.append(o.firstElementChild);
  const r = t.component, a = {
    id: s,
    vnode: t,
    vm: r,
    handler: {
      close: () => {
        r.exposed.visible.value = !1;
      }
    }
  };
  return a;
};
export {
  y as default
};
