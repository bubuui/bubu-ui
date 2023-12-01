import {
  V as b,
  _ as m,
  o as _,
  c as A,
  a as c,
  w as a,
  b as o,
  d as s,
  e as h,
  r as d,
} from './app.111d27d4.js';
const { defineComponent: E } = b,
  f = E({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
          createTextVNode: l,
          resolveComponent: r,
          withCtx: e,
          createVNode: t,
          Fragment: p,
          openBlock: D,
          createElementBlock: F,
        } = b;
        function y(i, C) {
          const n = r('bu-button');
          return (
            D(),
            F(
              p,
              null,
              [
                t(n, null, { default: e(() => [l('default')]), _: 1 }),
                t(
                  n,
                  { type: 'primary' },
                  { default: e(() => [l('primary')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'success' },
                  { default: e(() => [l('success')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'warning' },
                  { default: e(() => [l('warning')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'error' },
                  { default: e(() => [l('error')]), _: 1 },
                ),
                t(n, { type: 'info' }, { default: e(() => [l('info')]), _: 1 }),
                t(n, { type: 'link' }, { default: e(() => [l('link')]), _: 1 }),
              ],
              64,
            )
          );
        }
        return { render: y, ...{} };
      })(),
      'render-demo-1': (function () {
        const {
          createTextVNode: l,
          resolveComponent: r,
          withCtx: e,
          createVNode: t,
          Fragment: p,
          openBlock: D,
          createElementBlock: F,
        } = b;
        function y(i, C) {
          const n = r('bu-button');
          return (
            D(),
            F(
              p,
              null,
              [
                t(
                  n,
                  { type: 'primary', size: 'small' },
                  { default: e(() => [l('small')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'primary' },
                  { default: e(() => [l('defautl')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'primary', size: 'large' },
                  { default: e(() => [l('defautl')]), _: 1 },
                ),
              ],
              64,
            )
          );
        }
        return { render: y, ...{} };
      })(),
      'render-demo-2': (function () {
        const {
          createTextVNode: l,
          resolveComponent: r,
          withCtx: e,
          createVNode: t,
          Fragment: p,
          openBlock: D,
          createElementBlock: F,
        } = b;
        function y(i, C) {
          const n = r('bu-button');
          return (
            D(),
            F(
              p,
              null,
              [
                t(
                  n,
                  { type: 'primary', shape: 'circle' },
                  { default: e(() => [l('circle')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'primary', shape: 'circle-icon' },
                  { default: e(() => [l('I')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'primary', shape: 'circle', loading: '' },
                  { default: e(() => [l('loading')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'success', disabled: '' },
                  { default: e(() => [l('disabled')]), _: 1 },
                ),
              ],
              64,
            )
          );
        }
        return { render: y, ...{} };
      })(),
      'render-demo-3': (function () {
        const {
          createTextVNode: l,
          resolveComponent: r,
          withCtx: e,
          openBlock: t,
          createBlock: p,
        } = b;
        function D(y, u) {
          const i = r('bu-button');
          return (
            t(),
            p(
              i,
              { type: 'success', block: '' },
              { default: e(() => [l('block')]), _: 1 },
            )
          );
        }
        return { render: D, ...{} };
      })(),
    },
  }),
  j = JSON.parse(
    '{"title":"Button 组件","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"不同尺寸","slug":"不同尺寸","link":"#不同尺寸","children":[]},{"level":3,"title":"不同形状","slug":"不同形状","link":"#不同形状","children":[]},{"level":3,"title":"长按钮","slug":"长按钮","link":"#长按钮","children":[]}],"relativePath":"components/button.md"}',
  ),
  g = o(
    'h1',
    { id: 'button-组件', tabindex: '-1' },
    [
      s('Button 组件 '),
      o(
        'a',
        { class: 'header-anchor', href: '#button-组件', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  k = o(
    'h3',
    { id: '基础用法', tabindex: '-1' },
    [
      s('基础用法 '),
      o(
        'a',
        { class: 'header-anchor', href: '#基础用法', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  x = s('default'),
  v = h(
    `<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">bu-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">bu-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,
    1,
  ),
  B = o('div', null, 'Button 基础用法', -1),
  V = o(
    'div',
    { class: 'language-vue' },
    [
      o('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        o('code', null, [
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'default'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'primary'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'primary'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'success'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'success'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'warning'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'warning'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'error'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'error'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'info'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'info'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'link'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'link'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  N = o(
    'h3',
    { id: '不同尺寸', tabindex: '-1' },
    [
      s('不同尺寸 '),
      o(
        'a',
        { class: 'header-anchor', href: '#不同尺寸', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  w = o('div', null, 'Button 不同 size', -1),
  T = o(
    'div',
    { class: 'language-vue' },
    [
      o('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        o('code', null, [
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'primary'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'size'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'small'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'small'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'primary'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'defautl'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'primary'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'size'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'large'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'defautl'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  z = o(
    'h3',
    { id: '不同形状', tabindex: '-1' },
    [
      s('不同形状 '),
      o(
        'a',
        { class: 'header-anchor', href: '#不同形状', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  $ = o('div', null, 'Button 不同 shape', -1),
  I = o(
    'div',
    { class: 'language-vue' },
    [
      o('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        o('code', null, [
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'primary'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'shape'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'circle'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'circle'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'primary'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'shape'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'circle-icon'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'I'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'primary'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'shape'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'circle'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'loading'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'loading'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'success'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'disabled'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'disabled'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  S = o(
    'h3',
    { id: '长按钮', tabindex: '-1' },
    [
      s('长按钮 '),
      o(
        'a',
        { class: 'header-anchor', href: '#长按钮', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  J = o(
    'div',
    { class: 'language-vue' },
    [
      o('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        o('code', null, [
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'success'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'block'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'block'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  );
function O(l, r, e, t, p, D) {
  const F = d('bu-button'),
    y = d('render-demo-0'),
    u = d('demo'),
    i = d('render-demo-1'),
    C = d('render-demo-2'),
    n = d('render-demo-3');
  return (
    _(),
    A('div', null, [
      g,
      k,
      c(F, null, { default: a(() => [x]), _: 1 }),
      v,
      c(
        u,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button>default</bu-button>
  <bu-button type="primary">primary</bu-button>
  <bu-button type="success">success</bu-button>
  <bu-button type="warning">warning</bu-button>
  <bu-button type="error">error</bu-button>
  <bu-button type="info">info</bu-button>
  <bu-button type="link">link</bu-button>
</template>
`,
        },
        {
          description: a(() => [B]),
          highlight: a(() => [V]),
          default: a(() => [c(y)]),
          _: 1,
        },
      ),
      N,
      c(
        u,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button type="primary" size="small">small</bu-button>
  <bu-button type="primary">defautl</bu-button>
  <bu-button type="primary" size="large">defautl</bu-button>
</template>
`,
        },
        {
          description: a(() => [w]),
          highlight: a(() => [T]),
          default: a(() => [c(i)]),
          _: 1,
        },
      ),
      z,
      c(
        u,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button type="primary" shape="circle">circle</bu-button>
  <bu-button type="primary" shape="circle-icon">I</bu-button>
  <bu-button type="primary" shape="circle" loading>loading</bu-button>
  <bu-button type="success" disabled>disabled</bu-button>
</template>
`,
        },
        {
          description: a(() => [$]),
          highlight: a(() => [I]),
          default: a(() => [c(C)]),
          _: 1,
        },
      ),
      S,
      c(
        u,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button type="success" block>block</bu-button>
</template>
`,
        },
        { highlight: a(() => [J]), default: a(() => [c(n)]), _: 1 },
      ),
    ])
  );
}
const q = m(f, [['render', O]]);
export { j as __pageData, q as default };
