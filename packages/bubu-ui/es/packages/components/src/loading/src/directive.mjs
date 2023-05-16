import { ref as v } from "vue";
import { isObject as g, hyphenate as L, isString as x } from "../../../../../node_modules/.pnpm/@vue_shared@3.2.47/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { Loading as B } from "./service.mjs";
const m = (e, o) => {
  var u, d, f, i;
  const t = o.instance, r = (s) => g(o.value) ? o.value[s] : void 0, p = (s) => {
    const a = x(s) && (t == null ? void 0 : t[s]) || s;
    return a && v(a);
  }, c = (s) => p(e.getAttribute(`bu-loading-${L(s)}`)), l = (u = r("fullscreen")) != null ? u : o.modifiers.fullscreen, n = {
    text: c("text"),
    spinner: c("spinner"),
    background: c("background"),
    customClass: c("customClass"),
    fullscreen: l,
    target: (d = r("target")) != null ? d : l ? void 0 : e,
    body: (f = r("body")) != null ? f : o.modifiers.body,
    lock: (i = r("lock")) != null ? i : o.modifiers.lock
  };
  e.BuLoading = {
    options: n,
    instance: B(n)
  };
}, C = {
  mounted(e, o) {
    console.log("binding", o), o.value && m(e, o);
  },
  updated(e, o) {
    const t = e.BuLoading;
    o.oldValue !== o.value && (o.value && !o.oldValue ? m(e, o) : t == null || t.instance.close());
  },
  unmounted(e) {
    var o;
    (o = e.BuLoading) == null || o.instance.close();
  }
};
export {
  C as vLoading
};
