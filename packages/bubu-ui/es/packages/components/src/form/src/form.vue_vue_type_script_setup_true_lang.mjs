import { defineComponent as h, ref as v, computed as F, reactive as _, toRefs as $, provide as g, openBlock as w, createElementBlock as C, normalizeClass as W, unref as k, renderSlot as x } from "vue";
const B = {
  name: "BuForm"
}, N = /* @__PURE__ */ h({
  ...B,
  props: {
    model: null,
    rules: null,
    labelPosition: null,
    labelWidth: null
  },
  emits: ["submit"],
  setup(r, { expose: i, emit: u }) {
    const o = r, s = "bu-form", n = [], a = v(0), c = F(() => [s, `${s}--${o.labelPosition || "right"}`]), m = (e) => {
      e && (n.push(e), console.log("field.$label", e.$label), e.$label && !o.labelWidth && d(e.$label.value));
    }, d = (e) => {
      const t = window.getComputedStyle(e.firstElementChild).width, l = Math.ceil(Number.parseFloat(t)) + 2;
      l > a.value && (a.value = l), console.log(l, Number.parseFloat(t), Math.ceil(Number.parseFloat(t)));
    };
    function b(e) {
      const t = n.map((l) => l.validate());
      Promise.all(t).then(() => {
        e(!0);
      }).catch(() => {
        e(!1);
      });
    }
    function p(e) {
      e.preventDefault(), u("submit", e);
    }
    const f = _({
      ...$(o),
      addField: m,
      autoLabelWidth: a
    });
    return g("buFormKey", f), i({
      validate: b
    }), (e, t) => (w(), C("form", {
      class: W(k(c)),
      onSubmit: p
    }, [
      x(e.$slots, "default")
    ], 34));
  }
});
export {
  N as default
};
