import {
  V as _,
  _ as A,
  o as E,
  c as m,
  a as y,
  w as b,
  b as o,
  d as s,
  r as C,
} from './app.111d27d4.js';
const { defineComponent: h } = _,
  S = h({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
            createElementVNode: n,
            createTextVNode: t,
            resolveComponent: e,
            withCtx: l,
            createVNode: a,
            openBlock: F,
            createBlock: u,
          } = _,
          p = n('div', null, 'TEST1', -1);
        function D(c, T) {
          const r = e('bu-button'),
            i = e('bu-space');
          return (
            F(),
            u(i, null, {
              default: l(() => [
                p,
                a(r, null, { default: l(() => [t('TEST2')]), _: 1 }),
                a(r, null, { default: l(() => [t('TEST3')]), _: 1 }),
                a(r, null, { default: l(() => [t('TEST4')]), _: 1 }),
              ]),
              _: 1,
            })
          );
        }
        return { render: D, ...{} };
      })(),
      'render-demo-1': (function () {
        const {
            createElementVNode: n,
            createTextVNode: t,
            resolveComponent: e,
            withCtx: l,
            createVNode: a,
            openBlock: F,
            createBlock: u,
          } = _,
          p = n('div', null, 'TEST1', -1);
        function D(c, T) {
          const r = e('bu-button'),
            i = e('bu-space');
          return (
            F(),
            u(
              i,
              { direction: 'vertical' },
              {
                default: l(() => [
                  p,
                  a(r, null, { default: l(() => [t('TEST2')]), _: 1 }),
                  a(r, null, { default: l(() => [t('TEST3')]), _: 1 }),
                  a(r, null, { default: l(() => [t('TEST4')]), _: 1 }),
                ]),
                _: 1,
              },
            )
          );
        }
        return { render: D, ...{} };
      })(),
      'render-demo-2': (function () {
        const {
            createElementVNode: n,
            createTextVNode: t,
            resolveComponent: e,
            withCtx: l,
            createVNode: a,
            openBlock: F,
            createBlock: u,
          } = _,
          p = n('div', null, 'TEST1', -1);
        function D(c, T) {
          const r = e('bu-button'),
            i = e('bu-space');
          return (
            F(),
            u(
              i,
              { size: '30px' },
              {
                default: l(() => [
                  p,
                  a(r, null, { default: l(() => [t('TEST2')]), _: 1 }),
                  a(r, null, { default: l(() => [t('TEST3')]), _: 1 }),
                  a(r, null, { default: l(() => [t('TEST4')]), _: 1 }),
                ]),
                _: 1,
              },
            )
          );
        }
        return { render: D, ...{} };
      })(),
      'render-demo-3': (function () {
        const {
          createTextVNode: n,
          resolveComponent: t,
          withCtx: e,
          createVNode: l,
          openBlock: a,
          createBlock: F,
        } = _;
        function u(D, d) {
          const c = t('bu-button'),
            T = t('bu-space');
          return (
            a(),
            F(
              T,
              { wrap: '', size: '30px' },
              {
                default: e(() => [
                  l(c, null, { default: e(() => [n('TEST1')]), _: 1 }),
                  l(c, null, { default: e(() => [n('TEST2')]), _: 1 }),
                  l(c, null, { default: e(() => [n('TEST3')]), _: 1 }),
                  l(c, null, { default: e(() => [n('TEST4')]), _: 1 }),
                  l(c, null, { default: e(() => [n('TEST5')]), _: 1 }),
                  l(c, null, { default: e(() => [n('TEST6')]), _: 1 }),
                  l(c, null, { default: e(() => [n('TEST7')]), _: 1 }),
                  l(c, null, { default: e(() => [n('TEST8')]), _: 1 }),
                ]),
                _: 1,
              },
            )
          );
        }
        return { render: u, ...{} };
      })(),
    },
  }),
  P = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Space 组件","slug":"space-组件","link":"#space-组件","children":[]},{"level":3,"title":"垂直布局","slug":"垂直布局","link":"#垂直布局","children":[]},{"level":3,"title":"控制间距的大小","slug":"控制间距的大小","link":"#控制间距的大小","children":[]},{"level":3,"title":"自动换行","slug":"自动换行","link":"#自动换行","children":[]}],"relativePath":"components/space.md"}',
  ),
  f = o(
    'h3',
    { id: 'space-组件', tabindex: '-1' },
    [
      s('Space 组件 '),
      o(
        'a',
        { class: 'header-anchor', href: '#space-组件', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  v = o(
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
            o('span', { style: { color: '#F07178' } }, 'bu-space'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST1'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST2'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST3'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST4'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-space'),
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
  x = o(
    'h3',
    { id: '垂直布局', tabindex: '-1' },
    [
      s('垂直布局 '),
      o(
        'a',
        { class: 'header-anchor', href: '#垂直布局', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  V = o(
    'p',
    null,
    '使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制.',
    -1,
  ),
  k = o(
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
            o('span', { style: { color: '#F07178' } }, 'bu-space'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'direction'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'vertical'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST1'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST2'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST3'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST4'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-space'),
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
    { id: '控制间距的大小', tabindex: '-1' },
    [
      s('控制间距的大小 '),
      o(
        'a',
        {
          class: 'header-anchor',
          href: '#控制间距的大小',
          'aria-hidden': 'true',
        },
        '#',
      ),
    ],
    -1,
  ),
  g = o('p', null, '通过调整 size 的值来控制间距的大小', -1),
  B = o(
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
            o('span', { style: { color: '#F07178' } }, 'bu-space'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'size'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, '30px'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST1'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST2'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST3'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST4'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-space'),
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
  w = o(
    'h3',
    { id: '自动换行', tabindex: '-1' },
    [
      s('自动换行 '),
      o(
        'a',
        { class: 'header-anchor', href: '#自动换行', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  z = o('p', null, '设置 wrap', -1),
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
            o('span', { style: { color: '#F07178' } }, 'bu-space'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'wrap'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'size'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, '30px'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST1'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST2'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST3'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST4'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST5'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST6'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST7'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'TEST8'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-space'),
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
function J(n, t, e, l, a, F) {
  const u = C('render-demo-0'),
    p = C('demo'),
    D = C('render-demo-1'),
    d = C('render-demo-2'),
    c = C('render-demo-3');
  return (
    E(),
    m('div', null, [
      f,
      y(
        p,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-space>
    <div>TEST1</div>
    <bu-button>TEST2</bu-button>
    <bu-button>TEST3</bu-button>
    <bu-button>TEST4</bu-button>
  </bu-space>
</template>
`,
        },
        { highlight: b(() => [v]), default: b(() => [y(u)]), _: 1 },
      ),
      x,
      V,
      y(
        p,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-space direction="vertical">
    <div>TEST1</div>
    <bu-button>TEST2</bu-button>
    <bu-button>TEST3</bu-button>
    <bu-button>TEST4</bu-button>
  </bu-space>
</template>
`,
        },
        { highlight: b(() => [k]), default: b(() => [y(D)]), _: 1 },
      ),
      N,
      g,
      y(
        p,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-space size="30px">
    <div>TEST1</div>
    <bu-button>TEST2</bu-button>
    <bu-button>TEST3</bu-button>
    <bu-button>TEST4</bu-button>
  </bu-space>
</template>
`,
        },
        { highlight: b(() => [B]), default: b(() => [y(d)]), _: 1 },
      ),
      w,
      z,
      y(
        p,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-space wrap size="30px">
    <bu-button>TEST1</bu-button>
    <bu-button>TEST2</bu-button>
    <bu-button>TEST3</bu-button>
    <bu-button>TEST4</bu-button>
    <bu-button>TEST5</bu-button>
    <bu-button>TEST6</bu-button>
    <bu-button>TEST7</bu-button>
    <bu-button>TEST8</bu-button>
  </bu-space>
</template>
`,
        },
        { highlight: b(() => [$]), default: b(() => [y(c)]), _: 1 },
      ),
    ])
  );
}
const j = A(S, [['render', J]]);
export { P as __pageData, j as default };
