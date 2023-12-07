import {
  V as b,
  f as E,
  _ as h,
  r as m,
  o as _,
  c as g,
  a as A,
  w as d,
  b as o,
  d as s,
} from './app.337dcb16.js';
const { defineComponent: f } = b,
  k = f({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
          createTextVNode: t,
          resolveComponent: i,
          withCtx: e,
          createVNode: a,
          Fragment: u,
          openBlock: C,
          createElementBlock: F,
        } = b;
        function p(n, l) {
          const c = i('bu-button');
          return (
            C(),
            F(
              u,
              null,
              [
                a(
                  c,
                  { onClick: l[0] || (l[0] = (r) => n.open()) },
                  { default: e(() => [t('open')]), _: 1 },
                ),
                a(
                  c,
                  { onClick: l[1] || (l[1] = (r) => n.open(0)) },
                  { default: e(() => [t('open')]), _: 1 },
                ),
              ],
              64,
            )
          );
        }
        const { BuNotification: D } = E,
          y = f({
            setup() {
              return {
                open: (l) => {
                  D({ title: '34234', message: 'hahah', duration: l });
                },
              };
            },
          });
        return { render: p, ...y };
      })(),
      'render-demo-1': (function () {
        const {
          createTextVNode: t,
          resolveComponent: i,
          withCtx: e,
          createVNode: a,
          Fragment: u,
          openBlock: C,
          createElementBlock: F,
        } = b;
        function p(n, l) {
          const c = i('bu-button');
          return (
            C(),
            F(
              u,
              null,
              [
                a(
                  c,
                  { onClick: l[0] || (l[0] = (r) => n.open('success')) },
                  { default: e(() => [t('suceess')]), _: 1 },
                ),
                a(
                  c,
                  { onClick: l[1] || (l[1] = (r) => n.open('warning')) },
                  { default: e(() => [t('Warning')]), _: 1 },
                ),
                a(
                  c,
                  { onClick: l[2] || (l[2] = (r) => n.open('info')) },
                  { default: e(() => [t('info')]), _: 1 },
                ),
                a(
                  c,
                  { onClick: l[3] || (l[3] = (r) => n.open('error')) },
                  { default: e(() => [t('error')]), _: 1 },
                ),
              ],
              64,
            )
          );
        }
        const { BuNotification: D } = E,
          y = f({
            setup() {
              return {
                open: (l) => {
                  D({
                    title: 'this is title',
                    message: 'this is content',
                    type: l,
                  });
                },
              };
            },
          });
        return { render: p, ...y };
      })(),
      'render-demo-2': (function () {
        const {
          createTextVNode: t,
          resolveComponent: i,
          withCtx: e,
          createVNode: a,
          Fragment: u,
          openBlock: C,
          createElementBlock: F,
        } = b;
        function p(n, l) {
          const c = i('bu-button');
          return (
            C(),
            F(
              u,
              null,
              [
                a(
                  c,
                  { onClick: l[0] || (l[0] = (r) => n.open('top-left')) },
                  { default: e(() => [t('top-left')]), _: 1 },
                ),
                a(
                  c,
                  { onClick: l[1] || (l[1] = (r) => n.open('top-right')) },
                  { default: e(() => [t('top-right')]), _: 1 },
                ),
                a(
                  c,
                  { onClick: l[2] || (l[2] = (r) => n.open('bottom-left')) },
                  { default: e(() => [t('bottom-left')]), _: 1 },
                ),
                a(
                  c,
                  { onClick: l[3] || (l[3] = (r) => n.open('bottom-right')) },
                  { default: e(() => [t('error')]), _: 1 },
                ),
              ],
              64,
            )
          );
        }
        const { BuNotification: D } = E,
          y = f({
            setup() {
              return {
                open: (l) => {
                  D({
                    title: 'this is title',
                    message: 'this is content',
                    position: l,
                    duration: 0,
                  });
                },
              };
            },
          });
        return { render: p, ...y };
      })(),
    },
  }),
  I = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"不同类型的通知","slug":"不同类型的通知","link":"#不同类型的通知","children":[]},{"level":3,"title":"自定义消息位置","slug":"自定义消息位置","link":"#自定义消息位置","children":[]}],"relativePath":"components/notification.md"}',
  ),
  B = o(
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
  v = o('p', null, '当 duration 为 0 时，弹窗不会主动关闭', -1),
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
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'open()'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'open'),
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
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'open(0)'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'open'),
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
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'script'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'lang'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'ts'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'ref'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'vue'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'BuNotification'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'bubu-ui'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'export',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'default',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            o('span', { style: { color: '#A6ACCD' } }, '('),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#F07178' } }, 'setup'),
            o('span', { style: { color: '#89DDFF' } }, '()'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o('span', { style: { color: '#C792EA' } }, 'const'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'open'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '('),
            o(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'time',
            ),
            o('span', { style: { color: '#89DDFF' } }, ')'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, '=>'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '      '),
            o('span', { style: { color: '#82AAFF' } }, 'BuNotification'),
            o('span', { style: { color: '#F07178' } }, '('),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        title'),
            o('span', { style: { color: '#89DDFF' } }, ':'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, '34234'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        message'),
            o('span', { style: { color: '#89DDFF' } }, ':'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'hahah'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        duration'),
            o('span', { style: { color: '#89DDFF' } }, ':'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'time'),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#F07178' } }, ')'),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'return',
            ),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '      '),
            o('span', { style: { color: '#A6ACCD' } }, 'open'),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#A6ACCD' } }, ')'),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'script'),
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
    { id: '不同类型的通知', tabindex: '-1' },
    [
      s('不同类型的通知 '),
      o(
        'a',
        {
          class: 'header-anchor',
          href: '#不同类型的通知',
          'aria-hidden': 'true',
        },
        '#',
      ),
    ],
    -1,
  ),
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
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, "open('success')"),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'suceess'),
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
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, "open('warning')"),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'Warning'),
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
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, "open('info')"),
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
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, "open('error')"),
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
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'script'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'lang'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'ts'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'ref'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'vue'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'BuNotification'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'bubu-ui'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'export',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'default',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            o('span', { style: { color: '#A6ACCD' } }, '('),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#F07178' } }, 'setup'),
            o('span', { style: { color: '#89DDFF' } }, '()'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o('span', { style: { color: '#C792EA' } }, 'const'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'open'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '('),
            o(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'type',
            ),
            o('span', { style: { color: '#89DDFF' } }, ')'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, '=>'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '      '),
            o('span', { style: { color: '#82AAFF' } }, 'BuNotification'),
            o('span', { style: { color: '#F07178' } }, '('),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        title'),
            o('span', { style: { color: '#89DDFF' } }, ':'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'this is title'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        message'),
            o('span', { style: { color: '#89DDFF' } }, ':'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'this is content'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        '),
            o('span', { style: { color: '#A6ACCD' } }, 'type'),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#F07178' } }, ')'),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'return',
            ),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '      '),
            o('span', { style: { color: '#A6ACCD' } }, 'open'),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#A6ACCD' } }, ')'),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'script'),
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
  $ = o(
    'h3',
    { id: '自定义消息位置', tabindex: '-1' },
    [
      s('自定义消息位置 '),
      o(
        'a',
        {
          class: 'header-anchor',
          href: '#自定义消息位置',
          'aria-hidden': 'true',
        },
        '#',
      ),
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
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'bu-button'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, "open('top-left')"),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'top-left'),
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
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, "open('top-right')"),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'top-right'),
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
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, "open('bottom-left')"),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
            o('span', { style: { color: '#A6ACCD' } }, 'bottom-left'),
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
            o('span', { style: { color: '#C792EA' } }, '@click'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, "open('bottom-right')"),
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
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'template'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '<'),
            o('span', { style: { color: '#F07178' } }, 'script'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'lang'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'ts'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'ref'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'vue'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'BuNotification'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'bubu-ui'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'export',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'default',
            ),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            o('span', { style: { color: '#A6ACCD' } }, '('),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#A6ACCD' } }, '  '),
            o('span', { style: { color: '#F07178' } }, 'setup'),
            o('span', { style: { color: '#89DDFF' } }, '()'),
            o('span', { style: { color: '#A6ACCD' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o('span', { style: { color: '#C792EA' } }, 'const'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#A6ACCD' } }, 'open'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '('),
            o(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'position',
            ),
            o('span', { style: { color: '#89DDFF' } }, ')'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, '=>'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '      '),
            o('span', { style: { color: '#82AAFF' } }, 'BuNotification'),
            o('span', { style: { color: '#F07178' } }, '('),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        title'),
            o('span', { style: { color: '#89DDFF' } }, ':'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'this is title'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        message'),
            o('span', { style: { color: '#89DDFF' } }, ':'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#C3E88D' } }, 'this is content'),
            o('span', { style: { color: '#89DDFF' } }, "'"),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        '),
            o('span', { style: { color: '#A6ACCD' } }, 'position'),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '        duration'),
            o('span', { style: { color: '#89DDFF' } }, ':'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#F78C6C' } }, '0'),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '      '),
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#F07178' } }, ')'),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'return',
            ),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '      '),
            o('span', { style: { color: '#A6ACCD' } }, 'open'),
            o('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '    '),
            o('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#F07178' } }, '  '),
            o('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '}'),
            o('span', { style: { color: '#A6ACCD' } }, ')'),
            o('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          o('span', { class: 'line' }, [
            o('span', { style: { color: '#89DDFF' } }, '</'),
            o('span', { style: { color: '#F07178' } }, 'script'),
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
function T(t, i, e, a, u, C) {
  const F = m('render-demo-0'),
    p = m('demo'),
    D = m('render-demo-1'),
    y = m('render-demo-2');
  return (
    _(),
    g('div', null, [
      B,
      v,
      A(
        p,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button @click="open()">open</bu-button>
  <bu-button @click="open(0)">open</bu-button>
</template>
<script lang="ts">
import { ref } from 'vue';
import { BuNotification } from 'bubu-ui';
export default defineComponent({
  setup() {
    const open = (time) => {
      BuNotification({
        title: '34234',
        message: 'hahah',
        duration: time,
      });
    };
    return {
      open,
    };
  },
});
<\/script>
`,
        },
        { highlight: d(() => [N]), default: d(() => [A(F)]), _: 1 },
      ),
      x,
      A(
        p,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button @click="open('success')">suceess</bu-button>
  <bu-button @click="open('warning')">Warning</bu-button>
  <bu-button @click="open('info')">info</bu-button>
  <bu-button @click="open('error')">error</bu-button>
</template>
<script lang="ts">
import { ref } from 'vue';
import { BuNotification } from 'bubu-ui';
export default defineComponent({
  setup() {
    const open = (type) => {
      BuNotification({
        title: 'this is title',
        message: 'this is content',
        type,
      });
    };
    return {
      open,
    };
  },
});
<\/script>
`,
        },
        { highlight: d(() => [V]), default: d(() => [A(D)]), _: 1 },
      ),
      $,
      A(
        p,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button @click="open('top-left')">top-left</bu-button>
  <bu-button @click="open('top-right')">top-right</bu-button>
  <bu-button @click="open('bottom-left')">bottom-left</bu-button>
  <bu-button @click="open('bottom-right')">error</bu-button>
</template>
<script lang="ts">
import { ref } from 'vue';
import { BuNotification } from 'bubu-ui';
export default defineComponent({
  setup() {
    const open = (position) => {
      BuNotification({
        title: 'this is title',
        message: 'this is content',
        position,
        duration: 0,
      });
    };
    return {
      open,
    };
  },
});
<\/script>
`,
        },
        { highlight: d(() => [w]), default: d(() => [A(y)]), _: 1 },
      ),
    ])
  );
}
const J = h(k, [['render', T]]);
export { I as __pageData, J as default };
