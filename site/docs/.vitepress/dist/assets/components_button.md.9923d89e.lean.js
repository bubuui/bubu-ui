import {
  V as b,
  _ as m,
  r as d,
  o as _,
  c as A,
  a as y,
  w as r,
  b as o,
  d as s,
} from './app.337dcb16.js';
const { defineComponent: h } = b,
  E = h({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
          createTextVNode: e,
          resolveComponent: c,
          withCtx: l,
          createVNode: t,
          Fragment: p,
          openBlock: D,
          createElementBlock: F,
        } = b;
        function a(u, C) {
          const n = c('bu-button');
          return (
            D(),
            F(
              p,
              null,
              [
                t(n, null, { default: l(() => [e('default')]), _: 1 }),
                t(
                  n,
                  { type: 'primary' },
                  { default: l(() => [e('primary')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'success' },
                  { default: l(() => [e('success')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'warning' },
                  { default: l(() => [e('warning')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'error' },
                  { default: l(() => [e('error')]), _: 1 },
                ),
                t(n, { type: 'info' }, { default: l(() => [e('info')]), _: 1 }),
                t(n, { type: 'link' }, { default: l(() => [e('link')]), _: 1 }),
              ],
              64,
            )
          );
        }
        return { render: a, ...{} };
      })(),
      'render-demo-1': (function () {
        const {
          createTextVNode: e,
          resolveComponent: c,
          withCtx: l,
          createVNode: t,
          Fragment: p,
          openBlock: D,
          createElementBlock: F,
        } = b;
        function a(u, C) {
          const n = c('bu-button');
          return (
            D(),
            F(
              p,
              null,
              [
                t(
                  n,
                  { type: 'primary', size: 'small' },
                  { default: l(() => [e('small')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'primary' },
                  { default: l(() => [e('defautl')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'primary', size: 'large' },
                  { default: l(() => [e('defautl')]), _: 1 },
                ),
              ],
              64,
            )
          );
        }
        return { render: a, ...{} };
      })(),
      'render-demo-2': (function () {
        const {
          createTextVNode: e,
          resolveComponent: c,
          withCtx: l,
          createVNode: t,
          Fragment: p,
          openBlock: D,
          createElementBlock: F,
        } = b;
        function a(u, C) {
          const n = c('bu-button');
          return (
            D(),
            F(
              p,
              null,
              [
                t(
                  n,
                  { type: 'primary', shape: 'circle' },
                  { default: l(() => [e('circle')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'primary', shape: 'circle-icon' },
                  { default: l(() => [e('I')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'primary', shape: 'circle', loading: '' },
                  { default: l(() => [e('loading')]), _: 1 },
                ),
                t(
                  n,
                  { type: 'success', disabled: '' },
                  { default: l(() => [e('disabled')]), _: 1 },
                ),
              ],
              64,
            )
          );
        }
        return { render: a, ...{} };
      })(),
      'render-demo-3': (function () {
        const {
          createTextVNode: e,
          resolveComponent: c,
          withCtx: l,
          openBlock: t,
          createBlock: p,
        } = b;
        function D(a, i) {
          const u = c('bu-button');
          return (
            t(),
            p(
              u,
              { type: 'success', block: '' },
              { default: l(() => [e('block')]), _: 1 },
            )
          );
        }
        return { render: D, ...{} };
      })(),
    },
  }),
  O = JSON.parse(
    '{"title":"Button 组件","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"不同尺寸","slug":"不同尺寸","link":"#不同尺寸","children":[]},{"level":3,"title":"不同形状","slug":"不同形状","link":"#不同形状","children":[]},{"level":3,"title":"长按钮","slug":"长按钮","link":"#长按钮","children":[]}],"relativePath":"components/button.md"}',
  ),
  f = o(
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
  g = o(
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
  k = o('div', null, 'Button 基础用法', -1),
  x = o(
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
  v = o(
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
  B = o('div', null, 'Button 不同 size', -1),
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
  N = o(
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
  w = o('div', null, 'Button 不同 shape', -1),
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
  z = o(
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
  $ = o(
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
function I(e, c, l, t, p, D) {
  const F = d('render-demo-0'),
    a = d('demo'),
    i = d('render-demo-1'),
    u = d('render-demo-2'),
    C = d('render-demo-3');
  return (
    _(),
    A('div', null, [
      f,
      g,
      y(
        a,
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
          description: r(() => [k]),
          highlight: r(() => [x]),
          default: r(() => [y(F)]),
          _: 1,
        },
      ),
      v,
      y(
        a,
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
          description: r(() => [B]),
          highlight: r(() => [V]),
          default: r(() => [y(i)]),
          _: 1,
        },
      ),
      N,
      y(
        a,
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
          description: r(() => [w]),
          highlight: r(() => [T]),
          default: r(() => [y(u)]),
          _: 1,
        },
      ),
      z,
      y(
        a,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button type="success" block>block</bu-button>
</template>
`,
        },
        { highlight: r(() => [$]), default: r(() => [y(C)]), _: 1 },
      ),
    ])
  );
}
const P = m(E, [['render', I]]);
export { O as __pageData, P as default };
