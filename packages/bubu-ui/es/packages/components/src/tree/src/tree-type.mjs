const e = {
  data: {
    type: Object,
    required: !0
  },
  // 是否显示参考线
  lineable: {
    type: Boolean,
    default: !1
  },
  checkable: {
    type: Boolean,
    default: !1
  },
  dragdrop: {
    type: [Boolean, Object],
    default: !1
  },
  height: {
    type: Number
  },
  itemHeight: {
    type: Number,
    default: 30
  }
};
export {
  e as treeProps
};
