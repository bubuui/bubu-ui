import {
  V as C,
  f as b,
  _ as k,
  r as E,
  o as x,
  c as B,
  a as d,
  w as m,
  b as l,
  d as s,
} from './app.337dcb16.js';
const { defineComponent: _ } = C,
  L = _({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
            renderList: r,
            Fragment: u,
            openBlock: a,
            createElementBlock: n,
            toDisplayString: p,
            createElementVNode: A,
            resolveDirective: F,
            withDirectives: c,
          } = C,
          D = { 'bu-loading-text': '哈哈' };
        function y(t, o) {
          const i = F('loading');
          return c(
            (a(),
            n('div', D, [
              A('ul', null, [
                (a(!0),
                n(
                  u,
                  null,
                  r(t.list, (e) => (a(), n('li', { key: e }, p(e), 1))),
                  128,
                )),
              ]),
            ])),
            [[i, t.loading]],
          );
        }
        const { ref: f, reactive: g } = C,
          v = _({
            setup() {
              const t = f(!0),
                o = g(Array.from({ length: 10 }, (i, e) => e));
              return { loading: t, list: o };
            },
          });
        return { render: y, ...v };
      })(),
      'render-demo-1': (function () {
        const {
          createTextVNode: r,
          resolveComponent: u,
          resolveDirective: a,
          withCtx: n,
          openBlock: p,
          createBlock: A,
          withDirectives: F,
          createVNode: c,
          Fragment: D,
          createElementBlock: y,
        } = C;
        function f(o, i) {
          const e = u('bu-button'),
            h = a('loading');
          return (
            p(),
            y(
              D,
              null,
              [
                F(
                  (p(),
                  A(
                    e,
                    { type: 'primary', onClick: o.openFullScreen1 },
                    { default: n(() => [r('指令方式')]), _: 1 },
                    8,
                    ['onClick'],
                  )),
                  [
                    [
                      h,
                      o.fullscreenLoading,
                      void 0,
                      { fullscreen: !0, lock: !0 },
                    ],
                  ],
                ),
                c(
                  e,
                  { type: 'primary', onClick: o.openFullScreen2 },
                  { default: n(() => [r('service方式')]), _: 1 },
                  8,
                  ['onClick'],
                ),
              ],
              64,
            )
          );
        }
        const { ref: g } = C,
          { BuLoading: v } = b,
          t = _({
            setup() {
              const o = g(!1);
              return {
                fullscreenLoading: o,
                openFullScreen1: () => {
                  (o.value = !0),
                    setTimeout(() => {
                      o.value = !1;
                    }, 2e3);
                },
                openFullScreen2: () => {
                  const h = v.service({
                    lock: !0,
                    text: 'Loading',
                    background: 'rgba(0, 0, 0, 0.7)',
                  });
                  setTimeout(() => {
                    h.close();
                  }, 2e3);
                },
              };
            },
          });
        return { render: f, ...t };
      })(),
      'render-demo-2': (function () {
        const {
            renderList: r,
            Fragment: u,
            openBlock: a,
            createElementBlock: n,
            toDisplayString: p,
            createElementVNode: A,
            resolveDirective: F,
            withDirectives: c,
          } = C,
          D = { 'bu-loading-text': '哈哈', 'bu-loading-spinner': 'search' };
        function y(t, o) {
          const i = F('loading');
          return c(
            (a(),
            n('div', D, [
              A('ul', null, [
                (a(!0),
                n(
                  u,
                  null,
                  r(t.list, (e) => (a(), n('li', { key: e }, p(e), 1))),
                  128,
                )),
              ]),
            ])),
            [[i, t.loading]],
          );
        }
        const { ref: f, reactive: g } = C,
          v = _({
            setup() {
              const t = f(!0),
                o = g(Array.from({ length: 10 }, (i, e) => e));
              return { loading: t, list: o };
            },
          });
        return { render: y, ...v };
      })(),
    },
  }),
  O = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"铺满","slug":"铺满","link":"#铺满","children":[]},{"level":3,"title":"自定义图标","slug":"自定义图标","link":"#自定义图标","children":[]}],"relativePath":"components/loading.md"}',
  ),
  S = l(
    'h3',
    { id: '基本用法', tabindex: '-1' },
    [
      s('基本用法 '),
      l(
        'a',
        { class: 'header-anchor', href: '#基本用法', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  V = l(
    'div',
    { class: 'language-vue' },
    [
      l('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        l('code', null, [
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'div'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-loading'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'loading'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'bu-loading-text'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '哈哈'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'ul'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'li'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-for'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item in list'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':key'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '{{ item }}'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'li'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'ul'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'div'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'lang'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'ts'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'reactive'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'vue'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'export',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'default',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'loading'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#F07178' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'list'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'reactive'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#A6ACCD' } }, 'Array'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'from'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' length'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '10'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'x',
            ),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'i',
            ),
            l('span', { style: { color: '#89DDFF' } }, ')'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'i'),
            l('span', { style: { color: '#F07178' } }, '))'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'return',
            ),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'loading'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'list'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  N = l(
    'h3',
    { id: '铺满', tabindex: '-1' },
    [
      s('铺满 '),
      l(
        'a',
        { class: 'header-anchor', href: '#铺满', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  w = l(
    'div',
    { class: 'language-vue' },
    [
      l('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        l('code', null, [
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'bu-button'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'type'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'primary'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    '),
            l(
              'span',
              { style: { color: '#C792EA' } },
              'v-loading.fullscreen.lock',
            ),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'fullscreenLoading'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, '@click'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'openFullScreen1'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    >'),
            l('span', { style: { color: '#A6ACCD' } }, '指令方式'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'bu-button'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '  >'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'bu-button'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'type'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'primary'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '@click'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'openFullScreen2'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, 'service方式'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'bu-button'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'lang'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'ts'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'vue'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'BuLoading'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'bubu-ui'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'export',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'default',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'fullscreenLoading'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'false'),
            l('span', { style: { color: '#F07178' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'openFullScreen1'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'fullscreenLoading'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#82AAFF' } }, 'setTimeout'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#A6ACCD' } }, 'fullscreenLoading'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'false'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '},'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2000'),
            l('span', { style: { color: '#F07178' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          l('span', { class: 'line' }),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'openFullScreen2'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'loading'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'BuLoading'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'service'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        lock'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        text'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'Loading'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        background'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'rgba(0, 0, 0, 0.7)'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#F07178' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#82AAFF' } }, 'setTimeout'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '        '),
            l('span', { style: { color: '#A6ACCD' } }, 'loading'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'close'),
            l('span', { style: { color: '#F07178' } }, '()'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '},'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '2000'),
            l('span', { style: { color: '#F07178' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'return',
            ),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'fullscreenLoading'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'openFullScreen1'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'openFullScreen2'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  T = l(
    'h3',
    { id: '自定义图标', tabindex: '-1' },
    [
      s('自定义图标 '),
      l(
        'a',
        { class: 'header-anchor', href: '#自定义图标', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  $ = l(
    'div',
    { class: 'language-vue' },
    [
      l('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        l('code', null, [
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'div'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-loading'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'loading'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'bu-loading-text'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '哈哈'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'bu-loading-spinner'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'search'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'ul'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '      '),
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'li'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'v-for'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item in list'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, ':key'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'item'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
            l('span', { style: { color: '#A6ACCD' } }, '{{ item }}'),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'li'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'ul'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'div'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'template'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '<'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, 'lang'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'ts'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'ref'),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'reactive'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'vue'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'export',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'default',
            ),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            l('span', { style: { color: '#A6ACCD' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#A6ACCD' } }, '  '),
            l('span', { style: { color: '#F07178' } }, 'setup'),
            l('span', { style: { color: '#89DDFF' } }, '()'),
            l('span', { style: { color: '#A6ACCD' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'loading'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#FF9CAC' } }, 'true'),
            l('span', { style: { color: '#F07178' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'list'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'reactive'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#A6ACCD' } }, 'Array'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'from'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, '{'),
            l('span', { style: { color: '#F07178' } }, ' length'),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#F78C6C' } }, '10'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '},'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'x',
            ),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'i',
            ),
            l('span', { style: { color: '#89DDFF' } }, ')'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'i'),
            l('span', { style: { color: '#F07178' } }, '))'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'return',
            ),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'loading'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'list'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '  '),
            l('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '}'),
            l('span', { style: { color: '#A6ACCD' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '</'),
            l('span', { style: { color: '#F07178' } }, 'script'),
            l('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          s(`
`),
          l('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  );
function I(r, u, a, n, p, A) {
  const F = E('render-demo-0'),
    c = E('demo'),
    D = E('render-demo-1'),
    y = E('render-demo-2');
  return (
    x(),
    B('div', null, [
      S,
      d(
        c,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div v-loading="loading" bu-loading-text="哈哈">
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
export default defineComponent({
  setup() {
    const loading = ref(true);
    const list = reactive(Array.from({ length: 10 }, (x, i) => i));
    return {
      loading,
      list,
    };
  },
});
<\/script>
`,
        },
        { highlight: m(() => [V]), default: m(() => [d(F)]), _: 1 },
      ),
      N,
      d(
        c,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button
    type="primary"
    v-loading.fullscreen.lock="fullscreenLoading"
    @click="openFullScreen1"
    >指令方式</bu-button
  >
  <bu-button type="primary" @click="openFullScreen2">service方式</bu-button>
</template>
<script lang="ts">
import { ref } from 'vue';
import { BuLoading } from 'bubu-ui';
export default defineComponent({
  setup() {
    const fullscreenLoading = ref(false);
    const openFullScreen1 = () => {
      fullscreenLoading.value = true;
      setTimeout(() => {
        fullscreenLoading.value = false;
      }, 2000);
    };

    const openFullScreen2 = () => {
      const loading = BuLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    };
    return {
      fullscreenLoading,
      openFullScreen1,
      openFullScreen2,
    };
  },
});
<\/script>
`,
        },
        { highlight: m(() => [w]), default: m(() => [d(D)]), _: 1 },
      ),
      T,
      d(
        c,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div v-loading="loading" bu-loading-text="哈哈" bu-loading-spinner="search">
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
export default defineComponent({
  setup() {
    const loading = ref(true);
    const list = reactive(Array.from({ length: 10 }, (x, i) => i));
    return {
      loading,
      list,
    };
  },
});
<\/script>
`,
        },
        { highlight: m(() => [$]), default: m(() => [d(y)]), _: 1 },
      ),
    ])
  );
}
const P = k(L, [['render', I]]);
export { O as __pageData, P as default };
