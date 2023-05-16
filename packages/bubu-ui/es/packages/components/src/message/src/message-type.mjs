const t = (e) => e, n = {
  message: {
    type: [String, Object, Function],
    default: ""
  },
  type: {
    type: String,
    default: "info"
  },
  icon: {
    type: [String, Object, Function],
    default: ""
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: !1
  },
  duration: {
    type: Number,
    default: 3e3
  },
  showClose: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: Number,
    default: 16
  },
  id: {
    type: String,
    default: ""
  },
  onClose: {
    type: t(Function),
    required: !1
  }
};
export {
  t as definePropType,
  n as messageProps
};
