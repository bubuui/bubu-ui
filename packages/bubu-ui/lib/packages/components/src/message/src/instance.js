'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const i = require('vue'),
  n = i.shallowReactive([]),
  c = (t) => {
    const e = n.findIndex((o) => o.id === t),
      r = n[e];
    let s;
    return e > 0 && (s = n[e - 1]), { current: r, prev: s };
  },
  a = (t) => {
    const { prev: e } = c(t);
    return e ? e.vm.exposed.bottom.value : 0;
  },
  f = (t, e) => (n.findIndex((s) => s.id === t) > 0 ? 20 : e);
exports.getInstance = c;
exports.getLastOffset = a;
exports.getOffsetOrSpace = f;
exports.instances = n;
