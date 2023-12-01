import {
  V as u,
  _ as f,
  o as b,
  c as _,
  a as y,
  w as i,
  b as s,
  d as l,
  r as A,
} from './app.111d27d4.js';
const { defineComponent: m } = u,
  v = m({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { resolveComponent: p, openBlock: o, createBlock: a } = u;
        function c(t, e) {
          const D = p('bu-input');
          return (
            o(),
            a(
              D,
              {
                placeholder: 'Please input',
                modelValue: t.input,
                'onUpdate:modelValue': e[0] || (e[0] = (n) => (t.input = n)),
              },
              null,
              8,
              ['modelValue'],
            )
          );
        }
        const { ref: r } = u,
          F = m({
            setup() {
              return { input: r('') };
            },
          });
        return { render: c, ...F };
      })(),
      'render-demo-1': (function () {
        const {
          resolveComponent: p,
          createVNode: o,
          Fragment: a,
          openBlock: c,
          createElementBlock: r,
        } = u;
        function F(e, D) {
          const n = p('bu-input');
          return (
            c(),
            r(
              a,
              null,
              [
                o(n, {
                  class: 'm-b-10',
                  size: 'small',
                  placeholder: 'Please input',
                }),
                o(n, { class: 'm-b-10', placeholder: 'Please input' }),
                o(n, {
                  class: 'm-b-10',
                  size: 'large',
                  placeholder: 'Please input',
                }),
              ],
              64,
            )
          );
        }
        return { render: F, ...{} };
      })(),
      'render-demo-2': (function () {
        const { resolveComponent: p, openBlock: o, createBlock: a } = u;
        function c(t, e) {
          const D = p('bu-input');
          return (
            o(),
            a(
              D,
              {
                disabled: '',
                placeholder: 'Please input',
                modelValue: t.input,
                'onUpdate:modelValue': e[0] || (e[0] = (n) => (t.input = n)),
              },
              null,
              8,
              ['modelValue'],
            )
          );
        }
        const { ref: r } = u,
          F = m({
            setup() {
              return { input: r('') };
            },
          });
        return { render: c, ...F };
      })(),
      'render-demo-3': (function () {
        const { resolveComponent: p, openBlock: o, createBlock: a } = u;
        function c(t, e) {
          const D = p('bu-input');
          return (
            o(),
            a(
              D,
              {
                placeholder: 'Please input',
                clearable: '',
                modelValue: t.input,
                'onUpdate:modelValue': e[0] || (e[0] = (n) => (t.input = n)),
              },
              null,
              8,
              ['modelValue'],
            )
          );
        }
        const { ref: r } = u,
          F = m({
            setup() {
              return { input: r('') };
            },
          });
        return { render: c, ...F };
      })(),
      'render-demo-4': (function () {
        const {
          resolveComponent: p,
          createVNode: o,
          withCtx: a,
          Fragment: c,
          openBlock: r,
          createElementBlock: F,
        } = u;
        function t(n, C) {
          const d = p('bu-input'),
            h = p('bu-icon');
          return (
            r(),
            F(
              c,
              null,
              [
                o(
                  d,
                  {
                    class: 'm-b-10',
                    placeholder: 'Please input',
                    clearable: '',
                    modelValue: n.input,
                    'onUpdate:modelValue':
                      C[0] || (C[0] = (E) => (n.input = E)),
                    prefixIcon: 'search',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                o(
                  d,
                  {
                    class: 'm-b-10',
                    placeholder: 'Please input',
                    modelValue: n.input,
                    'onUpdate:modelValue':
                      C[1] || (C[1] = (E) => (n.input = E)),
                  },
                  {
                    suffix: a(() => [o(h, { name: 'search', size: '20' })]),
                    _: 1,
                  },
                  8,
                  ['modelValue'],
                ),
                o(
                  d,
                  { class: 'm-b-10', placeholder: 'Please input' },
                  {
                    prepend: a(() => [o(h, { name: 'search', size: '20' })]),
                    _: 1,
                  },
                ),
                o(
                  d,
                  { class: 'm-b-10', placeholder: 'Please input' },
                  {
                    append: a(() => [o(h, { name: 'search', size: '20' })]),
                    _: 1,
                  },
                ),
              ],
              64,
            )
          );
        }
        const { ref: e } = u,
          D = m({
            setup() {
              return { input: e('') };
            },
          });
        return { render: t, ...D };
      })(),
    },
  }),
  J = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"input 基本用法","slug":"input-基本用法","link":"#input-基本用法","children":[]},{"level":3,"title":"input 尺寸","slug":"input-尺寸","link":"#input-尺寸","children":[]},{"level":3,"title":"input disbaled 禁用","slug":"input-disbaled-禁用","link":"#input-disbaled-禁用","children":[]},{"level":3,"title":"Input 可清空","slug":"input-可清空","link":"#input-可清空","children":[]},{"level":3,"title":"Input 带图标","slug":"input-带图标","link":"#input-带图标","children":[]}],"relativePath":"components/input.md"}',
  ),
  g = s(
    'h3',
    { id: 'input-基本用法', tabindex: '-1' },
    [
      l('input 基本用法 '),
      s(
        'a',
        {
          class: 'header-anchor',
          href: '#input-基本用法',
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
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' />'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'input'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "''"),
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
            s('span', { style: { color: '#A6ACCD' } }, 'input'),
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
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  P = s(
    'h3',
    { id: 'input-尺寸', tabindex: '-1' },
    [
      l('input 尺寸 '),
      s(
        'a',
        { class: 'header-anchor', href: '#input-尺寸', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  x = s(
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
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'm-b-10'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'size'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'small'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' />'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'm-b-10'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' />'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'm-b-10'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'size'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'large'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' />'),
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
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  B = s(
    'h3',
    { id: 'input-disbaled-禁用', tabindex: '-1' },
    [
      l('input disbaled 禁用 '),
      s(
        'a',
        {
          class: 'header-anchor',
          href: '#input-disbaled-禁用',
          'aria-hidden': 'true',
        },
        '#',
      ),
    ],
    -1,
  ),
  V = s(
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
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'disabled'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' />'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'input'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "''"),
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
            s('span', { style: { color: '#A6ACCD' } }, 'input'),
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
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  z = s(
    'h3',
    { id: 'input-可清空', tabindex: '-1' },
    [
      l('Input 可清空 '),
      s(
        'a',
        {
          class: 'header-anchor',
          href: '#input-可清空',
          'aria-hidden': 'true',
        },
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
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'clearable'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' />'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'input'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "''"),
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
            s('span', { style: { color: '#A6ACCD' } }, 'input'),
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
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  I = s(
    'h3',
    { id: 'input-带图标', tabindex: '-1' },
    [
      l('Input 带图标 '),
      s(
        'a',
        {
          class: 'header-anchor',
          href: '#input-带图标',
          'aria-hidden': 'true',
        },
        '#',
      ),
    ],
    -1,
  ),
  U = s(
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
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'm-b-10'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'clearable'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'prefixIcon'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'search'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '  ></'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'm-b-10'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'suffix'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'search'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'size'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '20'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'm-b-10'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'prepend'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'search'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'size'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '20'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'm-b-10'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'placeholder'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'Please input'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#C792EA' } }, 'append'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'search'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'size'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '20'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-icon'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'input'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "''"),
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
            s('span', { style: { color: '#A6ACCD' } }, 'input'),
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
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  );
function w(p, o, a, c, r, F) {
  const t = A('render-demo-0'),
    e = A('demo'),
    D = A('render-demo-1'),
    n = A('render-demo-2'),
    C = A('render-demo-3'),
    d = A('render-demo-4');
  return (
    b(),
    _('div', null, [
      g,
      y(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-input placeholder="Please input" v-model="input" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default defineComponent({
  setup() {
    const input = ref('');
    return {
      input,
    };
  },
});
<\/script>
`,
        },
        { highlight: i(() => [k]), default: i(() => [y(t)]), _: 1 },
      ),
      P,
      y(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-input class="m-b-10" size="small" placeholder="Please input" />
  <bu-input class="m-b-10" placeholder="Please input" />
  <bu-input class="m-b-10" size="large" placeholder="Please input" />
</template>
`,
        },
        { highlight: i(() => [x]), default: i(() => [y(D)]), _: 1 },
      ),
      B,
      y(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-input disabled placeholder="Please input" v-model="input" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default defineComponent({
  setup() {
    const input = ref('');
    return {
      input,
    };
  },
});
<\/script>
`,
        },
        { highlight: i(() => [V]), default: i(() => [y(n)]), _: 1 },
      ),
      z,
      y(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-input placeholder="Please input" clearable v-model="input" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default defineComponent({
  setup() {
    const input = ref('');
    return {
      input,
    };
  },
});
<\/script>
`,
        },
        { highlight: i(() => [N]), default: i(() => [y(C)]), _: 1 },
      ),
      I,
      y(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-input
    class="m-b-10"
    placeholder="Please input"
    clearable
    v-model="input"
    prefixIcon="search"
  ></bu-input>

  <bu-input class="m-b-10" placeholder="Please input" v-model="input">
    <template #suffix>
      <bu-icon name="search" size="20"></bu-icon>
    </template>
  </bu-input>

  <bu-input class="m-b-10" placeholder="Please input">
    <template #prepend>
      <bu-icon name="search" size="20"></bu-icon>
    </template>
  </bu-input>

  <bu-input class="m-b-10" placeholder="Please input">
    <template #append>
      <bu-icon name="search" size="20"></bu-icon>
    </template>
  </bu-input>
</template>
<script lang="ts">
import { ref } from 'vue';
export default defineComponent({
  setup() {
    const input = ref('');
    return {
      input,
    };
  },
});
<\/script>
`,
        },
        { highlight: i(() => [U]), default: i(() => [y(d)]), _: 1 },
      ),
    ])
  );
}
const O = f(v, [['render', w]]);
export { J as __pageData, O as default };
