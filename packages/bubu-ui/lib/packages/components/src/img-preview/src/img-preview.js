'use strict';
const r = require('vue'),
  c = require('./container.vue.js');
function s(t) {
  const o = document.body,
    e =
      document.querySelector('.ysj-imgage-wrapper') ||
      document.createElement('div');
  e.classList.add('ysj-imgage-wrapper'), (e.style.display = 'block');
  const n = r.createVNode(c, { config: t }, null);
  (n.props.onDestroy = () => {
    r.render(null, e);
  }),
    r.render(n, e),
    o.appendChild(e);
}
module.exports = s;
