import { treeProps as e } from "../tree-type.mjs";
const t = {
  ...e,
  treeNode: {
    type: Object,
    required: !0
  },
  onClick: {
    type: [Function, Array]
  }
};
export {
  t as treeNodeProps
};
