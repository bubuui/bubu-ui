import {
  V as A,
  _ as f,
  o as v,
  c as x,
  a as D,
  w as i,
  b as o,
  d as e,
  r as b,
} from './app.111d27d4.js';
const { defineComponent: E } = A,
  k = E({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
            createTextVNode: a,
            resolveComponent: l,
            withCtx: n,
            createVNode: s,
            openBlock: p,
            createElementBlock: F,
          } = A,
          c = { class: 'common-layout' };
        function t(m, _) {
          const r = l('bu-header'),
            y = l('bu-main'),
            u = l('bu-container');
          return (
            p(),
            F('div', c, [
              s(u, null, {
                default: n(() => [
                  s(r, null, { default: n(() => [a('Header')]), _: 1 }),
                  s(y, null, { default: n(() => [a('Main')]), _: 1 }),
                ]),
                _: 1,
              }),
            ])
          );
        }
        return { render: t, ...{} };
      })(),
      'render-demo-1': (function () {
        const {
            createTextVNode: a,
            resolveComponent: l,
            withCtx: n,
            createVNode: s,
            openBlock: p,
            createElementBlock: F,
          } = A,
          c = { class: 'common-layout' };
        function t(m, _) {
          const r = l('bu-header'),
            y = l('bu-main'),
            u = l('bu-footer'),
            C = l('bu-container');
          return (
            p(),
            F('div', c, [
              s(C, null, {
                default: n(() => [
                  s(r, null, { default: n(() => [a('Header')]), _: 1 }),
                  s(y, null, { default: n(() => [a('Main')]), _: 1 }),
                  s(u, null, { default: n(() => [a('footer')]), _: 1 }),
                ]),
                _: 1,
              }),
            ])
          );
        }
        return { render: t, ...{} };
      })(),
      'render-demo-2': (function () {
        const {
            createTextVNode: a,
            resolveComponent: l,
            withCtx: n,
            createVNode: s,
            openBlock: p,
            createElementBlock: F,
          } = A,
          c = { class: 'common-layout' };
        function t(m, _) {
          const r = l('bu-aside'),
            y = l('bu-main'),
            u = l('bu-container');
          return (
            p(),
            F('div', c, [
              s(u, null, {
                default: n(() => [
                  s(r, null, { default: n(() => [a('aside')]), _: 1 }),
                  s(y, null, { default: n(() => [a('Main')]), _: 1 }),
                ]),
                _: 1,
              }),
            ])
          );
        }
        return { render: t, ...{} };
      })(),
      'render-demo-3': (function () {
        const {
            createTextVNode: a,
            resolveComponent: l,
            withCtx: n,
            createVNode: s,
            openBlock: p,
            createElementBlock: F,
          } = A,
          c = { class: 'common-layout' };
        function t(m, _) {
          const r = l('bu-header'),
            y = l('bu-aside'),
            u = l('bu-main'),
            C = l('bu-container');
          return (
            p(),
            F('div', c, [
              s(C, null, {
                default: n(() => [
                  s(r, null, { default: n(() => [a('Header')]), _: 1 }),
                  s(C, null, {
                    default: n(() => [
                      s(y, null, { default: n(() => [a('aside')]), _: 1 }),
                      s(u, null, { default: n(() => [a('Main')]), _: 1 }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }),
            ])
          );
        }
        return { render: t, ...{} };
      })(),
      'render-demo-4': (function () {
        const {
            createTextVNode: a,
            resolveComponent: l,
            withCtx: n,
            createVNode: s,
            openBlock: p,
            createElementBlock: F,
          } = A,
          c = { class: 'common-layout' };
        function t(m, _) {
          const r = l('bu-header'),
            y = l('bu-aside'),
            u = l('bu-main'),
            C = l('bu-footer'),
            h = l('bu-container');
          return (
            p(),
            F('div', c, [
              s(h, null, {
                default: n(() => [
                  s(r, null, { default: n(() => [a('Header')]), _: 1 }),
                  s(h, null, {
                    default: n(() => [
                      s(
                        y,
                        { width: '200px' },
                        { default: n(() => [a('Aside')]), _: 1 },
                      ),
                      s(h, null, {
                        default: n(() => [
                          s(u, null, { default: n(() => [a('Main')]), _: 1 }),
                          s(C, null, { default: n(() => [a('Footer')]), _: 1 }),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }),
            ])
          );
        }
        return { render: t, ...{} };
      })(),
    },
  }),
  J = JSON.parse(
    '{"title":"Container 组件","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]}],"relativePath":"components/container.md"}',
  ),
  g = o(
    'h1',
    { id: 'container-组件', tabindex: '-1' },
    [
      e('Container 组件 '),
      o(
        'a',
        {
          class: 'header-anchor',
          href: '#container-组件',
          'aria-hidden': 'true',
        },
        '#',
      ),
    ],
    -1,
  ),
  V = o(
    'h3',
    { id: '基础用法', tabindex: '-1' },
    [
      e('基础用法 '),
      o(
        'a',
        { class: 'header-anchor', href: '#基础用法', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  N = o(
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
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'class'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'common-layout'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-header'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Header'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-header'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Main'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
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
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'class'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'common-layout'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-header'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Header'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-header'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Main'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-footer'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'footer'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-footer'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  w = o(
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
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'class'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'common-layout'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-aside'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'aside'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-aside'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Main'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  M = o(
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
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'class'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'common-layout'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-header'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Header'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-header'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '        '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-aside'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'aside'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-aside'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '        '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Main'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  H = o(
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
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'class'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'common-layout'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-header'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Header'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-header'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '        '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-aside'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'width'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, '200px'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Aside'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-aside'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '        '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '          '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Main'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-main'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '          '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-footer'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Footer'),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-footer'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '        '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'bu-container'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'div'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          e(`
`),
          o('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  );
function T(a, l, n, s, p, F) {
  const c = b('render-demo-0'),
    t = b('demo'),
    d = b('render-demo-1'),
    m = b('render-demo-2'),
    _ = b('render-demo-3'),
    r = b('render-demo-4');
  return (
    v(),
    x('div', null, [
      g,
      V,
      D(
        t,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div class="common-layout">
    <bu-container>
      <bu-header>Header</bu-header>
      <bu-main>Main</bu-main>
    </bu-container>
  </div>
</template>
`,
        },
        { highlight: i(() => [N]), default: i(() => [D(c)]), _: 1 },
      ),
      D(
        t,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div class="common-layout">
    <bu-container>
      <bu-header>Header</bu-header>
      <bu-main>Main</bu-main>
      <bu-footer>footer</bu-footer>
    </bu-container>
  </div>
</template>
`,
        },
        { highlight: i(() => [B]), default: i(() => [D(d)]), _: 1 },
      ),
      D(
        t,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div class="common-layout">
    <bu-container>
      <bu-aside>aside</bu-aside>
      <bu-main>Main</bu-main>
    </bu-container>
  </div>
</template>
`,
        },
        { highlight: i(() => [w]), default: i(() => [D(m)]), _: 1 },
      ),
      D(
        t,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div class="common-layout">
    <bu-container>
      <bu-header>Header</bu-header>
      <bu-container>
        <bu-aside>aside</bu-aside>
        <bu-main>Main</bu-main>
      </bu-container>
    </bu-container>
  </div>
</template>
`,
        },
        { highlight: i(() => [M]), default: i(() => [D(_)]), _: 1 },
      ),
      D(
        t,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div class="common-layout">
    <bu-container>
      <bu-header>Header</bu-header>
      <bu-container>
        <bu-aside width="200px">Aside</bu-aside>
        <bu-container>
          <bu-main>Main</bu-main>
          <bu-footer>Footer</bu-footer>
        </bu-container>
      </bu-container>
    </bu-container>
  </div>
</template>
`,
        },
        { highlight: i(() => [H]), default: i(() => [D(r)]), _: 1 },
      ),
    ])
  );
}
const O = f(k, [['render', T]]);
export { J as __pageData, O as default };
