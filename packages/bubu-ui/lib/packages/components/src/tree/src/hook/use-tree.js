'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const s = require('vue'),
  l = require('../utils.js'),
  p = require('./use-core.js'),
  q = require('./use-toggle.js'),
  f = require('./use-check.js'),
  L = require('./use-dragdrop.js'),
  T = require('./use-lazy-load.js');
function h(o, t, u) {
  const n = s.unref(o),
    e = s.ref(l.generateInnerTree(n)),
    r = p.useCore(e),
    a = [q.useToggle, f.useCheck],
    c = T.useLazyLoad(e, r, u),
    i = L.useDragdrop(t.dragdrop, e, r);
  return {
    ...a.reduce((d, g) => ({ ...d, ...g(e, r, u, c) }), {}),
    ...r,
    ...i,
    treeData: e
  };
}
exports.default = h;
