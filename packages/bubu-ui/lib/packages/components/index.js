'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const i = require('./src/index.js'),
  t = require('./src/button/index.js'),
  o = require('./src/checkbox/index.js'),
  d = require('./src/icon/index.js'),
  e = require('./src/container/index.js'),
  n = require('./src/form/index.js'),
  r = require('./src/grid/index.js'),
  c = require('./src/input/index.js'),
  B = require('./src/loading/index.js'),
  x = require('./src/message/index.js'),
  a = require('./src/modal/index.js'),
  l = require('./src/notification/index.js'),
  j = require('./src/space/index.js'),
  q = require('./src/split/index.js'),
  $ = require('./src/title/index.js'),
  m = require('./src/tree/index.js'),
  g = require('./src/virtual-list/index.js'),
  p = {
    install: (u) => {
      for (const s in i) u.use(i[s]);
    }
  };
exports.BuButton = t.BuButton;
exports.BuCheckbox = o.BuCheckbox;
exports.BuIcon = d.BuIcon;
exports.BuAside = e.BuAside;
exports.BuContainer = e.BuContainer;
exports.BuFooter = e.BuFooter;
exports.BuHeader = e.BuHeader;
exports.BuMain = e.BuMain;
exports.BuForm = n.BuForm;
exports.BuFormItem = n.BuFormItem;
exports.BuGrid = r.BuGrid;
exports.BuGridItem = r.BuGridItem;
exports.BuInput = c.BuInput;
exports.BuLoading = B.BuLoading;
exports.BuMessage = x.BuMessage;
exports.BuModal = a.BuModal;
exports.BuNotification = l.BuNotification;
exports.BuSpace = j.BuSpace;
exports.BuSplit = q.BuSplit;
exports.BuTitle = $.BuTitle;
exports.BuTree = m.BuTree;
exports.BuVirtualList = g.BuVirtualList;
exports.default = p;
