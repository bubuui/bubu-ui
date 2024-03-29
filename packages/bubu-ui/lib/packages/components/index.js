'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const u = require('./src/index.js');
require('./styles/iconfont/iconfont.css.js');
require('./styles/iconfont/iconfont.js');
const o = require('./src/button/index.js'),
  B = require('./src/checkbox/index.js'),
  d = require('./src/icon/index.js'),
  e = require('./src/container/index.js'),
  i = require('./src/form/index.js'),
  r = require('./src/grid/index.js'),
  c = require('./src/input/index.js'),
  s = require('./src/loading/index.js'),
  a = require('./src/message/index.js'),
  x = require('./src/modal/index.js'),
  q = require('./src/notification/index.js'),
  $ = require('./src/space/index.js'),
  l = require('./src/split/index.js'),
  m = require('./src/title/index.js'),
  I = require('./src/tree/index.js'),
  g = require('./src/virtual-list/index.js'),
  M = require('./src/img-preview/index.js'),
  p = require('./src/rich-textarea/index.js'),
  T = {
    install: (n) => {
      for (const t in u) n.use(u[t]);
    }
  };
exports.BuButton = o.BuButton;
exports.BuCheckbox = B.BuCheckbox;
exports.BuIcon = d.BuIcon;
exports.BuAside = e.BuAside;
exports.BuContainer = e.BuContainer;
exports.BuFooter = e.BuFooter;
exports.BuHeader = e.BuHeader;
exports.BuMain = e.BuMain;
exports.BuForm = i.BuForm;
exports.BuFormItem = i.BuFormItem;
exports.BuGrid = r.BuGrid;
exports.BuGridItem = r.BuGridItem;
exports.BuInput = c.BuInput;
exports.BuLoading = s.BuLoading;
exports.BuMessage = a.BuMessage;
exports.BuModal = x.BuModal;
exports.BuNotification = q.BuNotification;
exports.BuSpace = $.BuSpace;
exports.BuSplit = l.BuSplit;
exports.BuTitle = m.BuTitle;
exports.BuTree = I.BuTree;
exports.BuVirtualList = g.BuVirtualList;
exports.BuImgPreview = M.BuImgPreview;
exports.BuRichTextArea = p.BuRichTextArea;
exports.default = T;
