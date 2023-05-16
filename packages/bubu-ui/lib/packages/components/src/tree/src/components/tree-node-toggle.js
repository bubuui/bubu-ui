'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  o = (t, { emit: l }) =>
    e.createVNode(
      'svg',
      {
        style: {
          width: '25px',
          height: '16px',
          display: 'inline-block',
          transform: t.expanded ? 'rotate(90deg)' : ''
        },
        viewBox: '0 0 1024 1024',
        xmlns: 'http://www.w3.org/2000/svg',
        onClick: () => l('onClick')
      },
      [
        e.createVNode(
          'path',
          { fill: 'currentColor', d: 'M384 192v640l384-320.064z' },
          null
        )
      ]
    );
exports.default = o;
