import { defineComponent as m, toRefs as y, renderSlot as x, createVNode as G, h as g } from "vue";
const v = /* @__PURE__ */ m({
  name: "BuGrid",
  props: {
    cols: {
      type: Number
    },
    xGap: {
      type: Number,
      default: 15
    },
    yGap: {
      type: Number,
      default: 15
    }
  },
  setup(s, {
    slots: d
  }) {
    const {
      cols: u,
      xGap: f,
      yGap: c
    } = y(s);
    let r = 1;
    return () => {
      var t;
      const p = x(d, "default", {
        key: 0
      }, () => []);
      return ((t = p.children) != null ? t : []).length === 0 ? null : G("div", {
        style: {
          "grid-template-columns": `repeat(${u.value}, minmax(0px, 1fr))`,
          gap: `${c.value}px ${f.value}px`,
          display: "grid"
        }
      }, [p.children && p.children.map((e) => {
        var l, a, o;
        let n = {};
        e && e.type.name === "BuGridItem" && (r += ((l = e.props) == null ? void 0 : l.offset) || 0, n = {
          style: {
            "grid-column": `${r} / span ${((a = e.props) == null ? void 0 : a.span) || 1}`
          }
        });
        const i = g(e, n);
        return r += ((o = e.props) == null ? void 0 : o.span) || 1, i;
      })]);
    };
  }
});
export {
  v as default
};
