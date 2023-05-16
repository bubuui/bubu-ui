'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const u = require('vue'),
  l = require('../utils.js'),
  p = require('./use-core.js'),
  j = require('./use-toggle.js'),
  q = require('./use-check.js'),
  f = require('./use-dragdrop.js'),
  h = require('./use-lazy-load.js');
function y(o, t, s) {
  const n = u.unref(o),
    e = u.ref(l.generateInnerTree(n)),
    r = p.useCore(e),
    a = [j.useToggle, q.useCheck],
    c = h.useLazyLoad(e, r, s),
    d = f.useDragdrop(t.dragdrop, e, r);
  return {
    ...a.reduce((i, g) => ({ ...i, ...g(e, r, s, c) }), {}),
    ...r,
    ...d,
    treeData: e
  };
}
exports.default = y;
