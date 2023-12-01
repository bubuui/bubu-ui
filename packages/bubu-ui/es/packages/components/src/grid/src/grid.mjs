import { defineComponent as i, toRefs as m, renderSlot as y, createVNode as x, h as G } from "vue";
const h = /* @__PURE__ */ i({
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
  setup(o, {
    slots: s
  }) {
    const {
      cols: d,
      xGap: u,
      yGap: f
    } = m(o);
    let r = 1;
    return () => {
      const p = y(s, "default", {
        key: 0
      }, () => []);
      return (p.children ?? []).length === 0 ? null : x("div", {
        style: {
          "grid-template-columns": `repeat(${d.value}, minmax(0px, 1fr))`,
          gap: `${f.value}px ${u.value}px`,
          display: "grid"
        }
      }, [p.children && p.children.map((e) => {
        var n, l, a;
        let t = {};
        e && e.type.name === "BuGridItem" && (r += ((n = e.props) == null ? void 0 : n.offset) || 0, t = {
          style: {
            "grid-column": `${r} / span ${((l = e.props) == null ? void 0 : l.span) || 1}`
          }
        });
        const c = G(e, t);
        return r += ((a = e.props) == null ? void 0 : a.span) || 1, c;
      })]);
    };
  }
});
export {
  h as default
};
