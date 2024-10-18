import { ref as f } from "vue";
import { isObject as i, hyphenate as m, isString as p } from "../../../../../node_modules/.pnpm/@vue_shared@3.5.12/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { Loading as v } from "./service.mjs";
const u = (e, o) => {
  const t = o.instance, r = (s) => i(o.value) ? o.value[s] : void 0, d = (s) => {
    const a = p(s) && (t == null ? void 0 : t[s]) || s;
    return a && f(a);
  }, c = (s) => d(e.getAttribute(`bu-loading-${m(s)}`)), l = r("fullscreen") ?? o.modifiers.fullscreen, n = {
    text: c("text"),
    spinner: c("spinner"),
    background: c("background"),
    customClass: c("customClass"),
    fullscreen: l,
    target: r("target") ?? (l ? void 0 : e),
    body: r("body") ?? o.modifiers.body,
    lock: r("lock") ?? o.modifiers.lock
  };
  e.BuLoading = {
    options: n,
    instance: v(n)
  };
}, B = {
  mounted(e, o) {
    console.log("binding", o), o.value && u(e, o);
  },
  updated(e, o) {
    const t = e.BuLoading;
    o.oldValue !== o.value && (o.value && !o.oldValue ? u(e, o) : t == null || t.instance.close());
  },
  unmounted(e) {
    var o;
    (o = e.BuLoading) == null || o.instance.close();
  }
};
export {
  B as vLoading
};
