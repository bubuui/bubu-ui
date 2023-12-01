import { createVNode as e } from "vue";
const r = (o, {
  emit: l
}) => e("svg", {
  style: {
    width: "25px",
    height: "16px",
    display: "inline-block",
    transform: o.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => l("onClick")
}, [e("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
export {
  r as default
};
