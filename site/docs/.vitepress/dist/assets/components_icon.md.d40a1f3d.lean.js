import {
  V as d,
  _ as m,
  r as y,
  o as _,
  c as E,
  a as c,
  w as u,
  e as h,
  b as s,
  d as o,
} from './app.337dcb16.js';
const { defineComponent: A } = d,
  b = A({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
          resolveComponent: n,
          createVNode: l,
          withCtx: p,
          openBlock: r,
          createBlock: F,
        } = d;
        function D(t, C) {
          const e = n('bu-icon'),
            a = n('bu-space');
          return (
            r(),
            F(a, null, {
              default: p(() => [
                l(e, { name: 'search' }),
                l(e, { name: 'search', type: 'primary' }),
                l(e, { component: 'success', type: 'primary' }),
              ]),
              _: 1,
            })
          );
        }
        return { render: D, ...{} };
      })(),
      'render-demo-1': (function () {
        const {
          resolveComponent: n,
          createVNode: l,
          withCtx: p,
          openBlock: r,
          createBlock: F,
        } = d;
        function D(t, C) {
          const e = n('bu-icon'),
            a = n('bu-space');
          return (
            r(),
            F(a, null, {
              default: p(() => [
                l(e, { name: 'https://vitejs.dev/logo.svg', width: '20' }),
              ]),
              _: 1,
            })
          );
        }
        return { render: D, ...{} };
      })(),
      'render-demo-2': (function () {
        const {
          resolveComponent: n,
          createVNode: l,
          withCtx: p,
          openBlock: r,
          createBlock: F,
        } = d;
        function D(t, C) {
          const e = n('bu-icon'),
            a = n('bu-space');
          return (
            r(),
            F(a, null, {
              default: p(() => [
                l(e, { name: 'search', type: 'primary' }),
                l(e, { name: 'search', color: 'red' }),
                l(e, { name: 'search', color: 'red', size: '30px' }),
              ]),
              _: 1,
            })
          );
        }
        return { render: D, ...{} };
      })(),
    },
  }),
  j = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"进阶用法","slug":"进阶用法","link":"#进阶用法","children":[]},{"level":3,"title":"所有图标","slug":"所有图标","link":"#所有图标","children":[]}],"relativePath":"components/icon.md"}',
  ),
  g = h(
    `<h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h3><p>支持字体图标使用方式，以及 svg 使用方式。（svg 的可扩展性会比较高,摘抄自阿里图标库）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">支持多色图标了，不再受单色限制。</span></span>
<span class="line"><span style="color:#A6ACCD;">通过一些技巧，支持像字体那样，通过 font-size,color 来调整样式。</span></span>
<span class="line"><span style="color:#A6ACCD;">兼容性较差，支持 ie9+,及现代浏览器。</span></span>
<span class="line"><span style="color:#A6ACCD;">浏览器渲染 svg 的性能一般，还不如 png。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,
    3,
  ),
  v = s(
    'div',
    { class: 'language-vue' },
    [
      s('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-space'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'search'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'search'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'type'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'primary'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'component'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'success'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'type'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'primary'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-space'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  B = s(
    'p',
    null,
    '支持 url，内部会使用 img 渲染，width 等属性会透传给 img',
    -1,
  ),
  f = s(
    'div',
    { class: 'language-vue' },
    [
      s('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-space'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s(
              'span',
              { style: { color: '#C3E88D' } },
              'https://vitejs.dev/logo.svg',
            ),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'width'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '20'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-space'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  x = s(
    'h3',
    { id: '进阶用法', tabindex: '-1' },
    [
      o('进阶用法 '),
      s(
        'a',
        { class: 'header-anchor', href: '#进阶用法', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  k = s(
    'p',
    null,
    '颜色可通过 color 自定义，但是绝大多时候，我们只需要跟主题颜色一致即可，所以额外提供了 type 属性',
    -1,
  ),
  w = s(
    'div',
    { class: 'language-vue' },
    [
      s('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-space'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'search'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'type'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'primary'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'search'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'color'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'red'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'search'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'color'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'red'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'size'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '30px'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-space'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  V = s(
    'h3',
    { id: '所有图标', tabindex: '-1' },
    [
      o('所有图标 '),
      s(
        'a',
        { class: 'header-anchor', href: '#所有图标', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  N = s(
    'p',
    null,
    '颜色可通过 color 自定义，但是绝大多时候，我们只需要跟主题颜色一致即可，所以额外提供了 type 属性',
    -1,
  );
function z(n, l, p, r, F, D) {
  const i = y('render-demo-0'),
    t = y('demo'),
    C = y('render-demo-1'),
    e = y('render-demo-2'),
    a = y('bu-icon');
  return (
    _(),
    E('div', null, [
      g,
      c(
        t,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-space>
    <bu-icon name="search"></bu-icon>
    <bu-icon name="search" type="primary"></bu-icon>
    <bu-icon component="success" type="primary"></bu-icon>
  </bu-space>
</template>
`,
        },
        { highlight: u(() => [v]), default: u(() => [c(i)]), _: 1 },
      ),
      B,
      c(
        t,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-space>
    <bu-icon name="https://vitejs.dev/logo.svg" width="20"></bu-icon>
  </bu-space>
</template>
`,
        },
        { highlight: u(() => [f]), default: u(() => [c(C)]), _: 1 },
      ),
      x,
      k,
      c(
        t,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-space>
    <bu-icon name="search" type="primary"></bu-icon>
    <bu-icon name="search" color="red"></bu-icon>
    <bu-icon name="search" color="red" size="30px"></bu-icon>
  </bu-space>
</template>
`,
        },
        { highlight: u(() => [w]), default: u(() => [c(e)]), _: 1 },
      ),
      V,
      N,
      c(
        t,
        { customClass: 'undefined', sourceCode: '' },
        {
          default: u(() => [
            c(a, { name: 'search' }),
            c(a, { name: 'success' }),
          ]),
          _: 1,
        },
      ),
    ])
  );
}
const S = m(b, [['render', z]]);
export { j as __pageData, S as default };
