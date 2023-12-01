'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const t = {
    id: { type: String, default: '0' },
    position: {
      type: String,
      values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      default: 'top-right'
    },
    type: {
      type: String,
      values: ['', 'success', 'warning', 'info', 'error'],
      default: ''
    },
    dangerouslyUseHTMLString: { type: Boolean, default: !1 },
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    duration: { type: Number, default: 450 },
    zIndex: { type: Number, default: 0 },
    offset: { type: Number, default: 0 },
    onClose: { type: Function, required: !0 }
  },
  e = { destroy: () => !0 };
exports.notificationEmits = e;
exports.notificationProps = t;
