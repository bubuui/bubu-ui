import { defineComponent as b, toRefs as x, ref as a, computed as p, onMounted as H, nextTick as M, createVNode as n } from "vue";
import { virtualListProps as y } from "./virtual-list-type.mjs";
const T = /* @__PURE__ */ b({
  name: "BuVirtualList",
  props: y,
  setup(f, {
    slots: o
  }) {
    const {
      data: u,
      itemHeight: t,
      component: d
    } = x(f), s = a(), i = a(0), v = a(0), r = a(0), h = (e) => {
      const l = e.target.scrollTop;
      r.value = Math.floor(l / t.value), v.value = l - l % t.value;
    }, m = p(() => Math.ceil(i.value / t.value)), g = p(() => u.value.slice(r.value, Math.min(r.value + m.value, u.value.length)));
    return H(() => {
      M(() => {
        var e;
        i.value = (e = s.value) == null ? void 0 : e.clientHeight, console.log("containerHeight", i.value);
      });
    }), () => n(d.value, {
      class: "bu-virtual-list--container",
      ref: s,
      onScroll: h
    }, {
      default: () => [n("div", {
        class: "bu-virtual-list--blank",
        style: {
          height: `${u.value.length * t.value}px`
        }
      }, null), n("div", {
        class: "bu-virtual-list",
        style: {
          transform: `translate3d(0,${v.value}px,0)`
        }
      }, [g.value.map((e, l) => {
        var c;
        return n("div", {
          style: {
            height: t.value + "px"
          }
        }, [(c = o.default) == null ? void 0 : c.call(o, {
          item: e,
          index: l
        })]);
      })])]
    });
  }
});
export {
  T as default
};
