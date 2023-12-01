import {
  V as y,
  _ as h,
  o as E,
  c as v,
  a as m,
  w as u,
  b as s,
  d as l,
  r as _,
} from './app.111d27d4.js';
const { defineComponent: g } = y,
  b = g({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
            createTextVNode: n,
            resolveComponent: i,
            withCtx: t,
            createVNode: c,
            openBlock: C,
            createElementBlock: A,
          } = y,
          r = { class: 'demo' };
        function a(o, e) {
          const d = i('bu-split');
          return (
            C(),
            A('div', r, [
              c(
                d,
                {
                  modelValue: o.split,
                  'onUpdate:modelValue': e[0] || (e[0] = (D) => (o.split = D)),
                },
                {
                  left: t(() => [n(' Left Pane ')]),
                  right: t(() => [n(' Right Pane ')]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
            ])
          );
        }
        const { defineComponent: F, ref: p } = y,
          f = F({
            setup() {
              return { split: p(0.5) };
            },
          });
        return { render: a, ...f };
      })(),
      'render-demo-1': (function () {
        const {
            createTextVNode: n,
            resolveComponent: i,
            withCtx: t,
            createVNode: c,
            openBlock: C,
            createElementBlock: A,
          } = y,
          r = { class: 'demo' };
        function a(o, e) {
          const d = i('bu-split');
          return (
            C(),
            A('div', r, [
              c(
                d,
                {
                  modelValue: o.split,
                  'onUpdate:modelValue': e[0] || (e[0] = (D) => (o.split = D)),
                  mode: 'vertical',
                },
                {
                  top: t(() => [n(' Top pane ')]),
                  bottom: t(() => [n(' Bottom Pane ')]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
            ])
          );
        }
        const { defineComponent: F, ref: p } = y,
          f = F({
            setup() {
              return { split: p(0.5) };
            },
          });
        return { render: a, ...f };
      })(),
      'render-demo-2': (function () {
        const {
            createTextVNode: n,
            resolveComponent: i,
            withCtx: t,
            createVNode: c,
            openBlock: C,
            createElementBlock: A,
          } = y,
          r = { class: 'demo' };
        function a(o, e) {
          const d = i('bu-split');
          return (
            C(),
            A('div', r, [
              c(
                d,
                {
                  modelValue: o.split,
                  'onUpdate:modelValue': e[1] || (e[1] = (D) => (o.split = D)),
                  mode: 'vertical',
                },
                {
                  top: t(() => [
                    c(
                      d,
                      {
                        modelValue: o.split1,
                        'onUpdate:modelValue':
                          e[0] || (e[0] = (D) => (o.split1 = D)),
                      },
                      {
                        left: t(() => [n(' Left Pane ')]),
                        right: t(() => [n(' Right Pane ')]),
                        _: 1,
                      },
                      8,
                      ['modelValue'],
                    ),
                  ]),
                  bottom: t(() => [n(' Bottom Pane ')]),
                  _: 1,
                },
                8,
                ['modelValue'],
              ),
            ])
          );
        }
        const { defineComponent: F, ref: p } = y,
          f = F({
            setup() {
              const o = p(0.5),
                e = p(0.5);
              return { split: o, split1: e };
            },
          });
        return { render: a, ...f };
      })(),
    },
  }),
  L = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Split 组件","slug":"split-组件","link":"#split-组件","children":[]},{"level":3,"title":"Split 组件","slug":"split-组件-1","link":"#split-组件-1","children":[]},{"level":3,"title":"组件嵌套","slug":"组件嵌套","link":"#组件嵌套","children":[]}],"relativePath":"components/split.md"}',
  );
const x = s(
    'h3',
    { id: 'split-组件', tabindex: '-1' },
    [
      l('Split 组件 '),
      s(
        'a',
        { class: 'header-anchor', href: '#split-组件', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  B = s(
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
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'demo'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-split'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'split'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'left'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, ' Left Pane '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'right'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, ' Right Pane '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-split'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'lang'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'ts'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'vue'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'export',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'default',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            s('span', { style: { color: '#A6ACCD' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#F07178' } }, 'setup'),
            s('span', { style: { color: '#89DDFF' } }, '()'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'split'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#F78C6C' } }, '0.5'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'return',
            ),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'split'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#FFCB6B' } }, 'demo'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#B2CCD6' } }, 'height'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '200px'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  V = s(
    'h3',
    { id: 'split-组件-1', tabindex: '-1' },
    [
      l('Split 组件 '),
      s(
        'a',
        {
          class: 'header-anchor',
          href: '#split-组件-1',
          'aria-hidden': 'true',
        },
        '#',
      ),
    ],
    -1,
  ),
  k = s(
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
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'demo'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-split'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'split'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'mode'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'vertical'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'top'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, ' Top pane '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'bottom'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, ' Bottom Pane '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-split'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'lang'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'ts'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'vue'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'export',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'default',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            s('span', { style: { color: '#A6ACCD' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#F07178' } }, 'setup'),
            s('span', { style: { color: '#89DDFF' } }, '()'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'split'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#F78C6C' } }, '0.5'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'return',
            ),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'split'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#FFCB6B' } }, 'demo'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#B2CCD6' } }, 'height'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '200px'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  P = s(
    'h3',
    { id: '组件嵌套', tabindex: '-1' },
    [
      l('组件嵌套 '),
      s(
        'a',
        { class: 'header-anchor', href: '#组件嵌套', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  N = s(
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
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'demo'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-split'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'split'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'mode'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'vertical'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'top'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-split'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'split1'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'left'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, ' Left Pane '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'right'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, ' Right Pane '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-split'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'bottom'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, ' Bottom Pane '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-split'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'lang'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'ts'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'import',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'from',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'vue'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'export',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'default',
            ),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'defineComponent'),
            s('span', { style: { color: '#A6ACCD' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#F07178' } }, 'setup'),
            s('span', { style: { color: '#89DDFF' } }, '()'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'split'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#F78C6C' } }, '0.5'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'split1'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#F78C6C' } }, '0.5'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s(
              'span',
              { style: { color: '#89DDFF', 'font-style': 'italic' } },
              'return',
            ),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'split'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'split1'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#FFCB6B' } }, 'demo'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#B2CCD6' } }, 'height'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '200px'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  );
function T(n, i, t, c, C, A) {
  const r = _('render-demo-0'),
    a = _('demo'),
    F = _('render-demo-1'),
    p = _('render-demo-2');
  return (
    E(),
    v('div', null, [
      x,
      m(
        a,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div class="demo">
    <bu-split v-model="split">
      <template #left> Left Pane </template>
      <template #right> Right Pane </template>
    </bu-split>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const split = ref(0.5);
    return {
      split,
    };
  },
});
<\/script>
<style>
.demo {
  height: 200px;
}
</style>
`,
        },
        { highlight: u(() => [B]), default: u(() => [m(r)]), _: 1 },
      ),
      V,
      m(
        a,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div class="demo">
    <bu-split v-model="split" mode="vertical">
      <template #top> Top pane </template>
      <template #bottom> Bottom Pane </template>
    </bu-split>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const split = ref(0.5);
    return {
      split,
    };
  },
});
<\/script>
<style>
.demo {
  height: 200px;
}
</style>
`,
        },
        { highlight: u(() => [k]), default: u(() => [m(F)]), _: 1 },
      ),
      P,
      m(
        a,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <div class="demo">
    <bu-split v-model="split" mode="vertical">
      <template #top>
        <bu-split v-model="split1">
          <template #left> Left Pane </template>
          <template #right> Right Pane </template>
        </bu-split>
      </template>
      <template #bottom> Bottom Pane </template>
    </bu-split>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const split = ref(0.5);
    const split1 = ref(0.5);
    return {
      split,
      split1,
    };
  },
});
<\/script>
<style>
.demo {
  height: 200px;
}
</style>
`,
        },
        { highlight: u(() => [N]), default: u(() => [m(p)]), _: 1 },
      ),
    ])
  );
}
const R = h(b, [['render', T]]);
export { L as __pageData, R as default };
