'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = (t) => t,
  o = {
    message: { type: [String, Object, Function], default: '' },
    type: { type: String, default: 'info' },
    icon: { type: [String, Object, Function], default: '' },
    dangerouslyUseHTMLString: { type: Boolean, default: !1 },
    duration: { type: Number, default: 3e3 },
    showClose: { type: Boolean, default: !1 },
    offset: { type: Number, default: 16 },
    id: { type: String, default: '' },
    onClose: { type: e(Function), required: !1 }
  };
exports.definePropType = e;
exports.messageProps = o;
