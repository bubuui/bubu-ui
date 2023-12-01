import { defineComponent as v, ref as F, computed as $, reactive as g, toRefs as w, provide as _, openBlock as x, createElementBlock as C, normalizeClass as W, renderSlot as k } from "vue";
const n = "bu-form", M = /* @__PURE__ */ v({
  name: "BuForm",
  __name: "form",
  props: {
    model: {},
    rules: {},
    labelPosition: {},
    labelWidth: {}
  },
  emits: ["submit"],
  setup(i, { expose: r, emit: c }) {
    const l = i, s = [], a = F(0), m = $(() => [n, `${n}--${l.labelPosition || "right"}`]), u = c, p = (e) => {
      e && (s.push(e), console.log("field.$label", e.$label), e.$label && !l.labelWidth && b(e.$label.value));
    }, b = (e) => {
      const t = window.getComputedStyle(e.firstElementChild).width, o = Math.ceil(Number.parseFloat(t)) + 2;
      o > a.value && (a.value = o), console.log(o, Number.parseFloat(t), Math.ceil(Number.parseFloat(t)));
    };
    function d(e) {
      const t = s.map((o) => o.validate());
      Promise.all(t).then(() => {
        e(!0);
      }).catch(() => {
        e(!1);
      });
    }
    function f(e) {
      e.preventDefault(), u("submit", e);
    }
    const h = g({
      ...w(l),
      addField: p,
      autoLabelWidth: a
    });
    return _("buFormKey", h), r({
      validate: d
    }), (e, t) => (x(), C("form", {
      class: W(m.value),
      onSubmit: f
    }, [
      k(e.$slots, "default")
    ], 34));
  }
});
export {
  M as default
};
