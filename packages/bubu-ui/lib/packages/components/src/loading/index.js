'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const s = require('./src/directive.js'),
  i = require('./src/service.js');
require('./style/loading.css');
const r = {
  install(e) {
    e.directive('loading', s.vLoading),
      (e.config.globalProperties.$loading = i.Loading);
  },
  service: i.Loading
};
exports.BuLoading = r;
exports.default = r;