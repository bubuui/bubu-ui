import {
  V as t,
  _ as A,
  o as m,
  c as f,
  a as i,
  w as n,
  b as o,
  d as s,
  r as u,
} from './app.111d27d4.js';
const { defineComponent: h } = t,
  _ = h({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { resolveComponent: a, openBlock: c, createBlock: r } = t;
        function p(l, y) {
          const C = a('bu-checkbox');
          return (
            c(),
            r(
              C,
              {
                modelValue: l.val,
                'onUpdate:modelValue': y[0] || (y[0] = (d) => (l.val = d)),
                label: 'A',
              },
              null,
              8,
              ['modelValue'],
            )
          );
        }
        const { defineComponent: F, ref: D } = t,
          e = F({
            setup() {
              return { val: D(!1) };
            },
          });
        return { render: p, ...e };
      })(),
    },
  }),
  V = JSON.parse(
    '{"title":"Checkbox 组件","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]}],"relativePath":"components/checkbox.md"}',
  ),
  b = o(
    'h1',
    { id: 'checkbox-组件', tabindex: '-1' },
    [
      s('Checkbox 组件 '),
      o(
        'a',
        {
          class: 'header-anchor',
          href: '#checkbox-组件',
          'aria-hidden': 'true',
        },
        '#',
      ),
    ],
    -1,
  ),
  v = o(
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
  x = o('div', null, 'checkbox 基础用法', -1),
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
            o('span', { style: { color: '#F07178' } }, 'bu-checkbox'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'v-model'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'val'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, ' '),
            o('span', { style: { color: '#C792EA' } }, 'label'),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#C3E88D' } }, 'A'),
            o('span', { style: { color: '#89DDFF' } }, '"'),
            o('span', { style: { color: '#89DDFF' } }, '></'),
            o('span', { style: { color: '#F07178' } }, 'bu-checkbox'),
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
            o('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            o('span', { style: { color: '#89DDFF' } }, ','),
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
            o('span', { style: { color: '#A6ACCD' } }, 'val'),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#89DDFF' } }, '='),
            o('span', { style: { color: '#F07178' } }, ' '),
            o('span', { style: { color: '#82AAFF' } }, 'ref'),
            o('span', { style: { color: '#F07178' } }, '('),
            o('span', { style: { color: '#FF9CAC' } }, 'false'),
            o('span', { style: { color: '#F07178' } }, ')'),
            o('span', { style: { color: '#89DDFF' } }, ';'),
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
            o('span', { style: { color: '#A6ACCD' } }, 'val'),
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
function E(a, c, r, p, F, D) {
  const e = u('render-demo-0'),
    l = u('demo');
  return (
    m(),
    f('div', null, [
      b,
      v,
      i(
        l,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-checkbox v-model="val" label="A"></bu-checkbox>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const val = ref(false);
    return {
      val,
    };
  },
});
<\/script>
`,
        },
        {
          description: n(() => [x]),
          highlight: n(() => [k]),
          default: n(() => [i(e)]),
          _: 1,
        },
      ),
    ])
  );
}
const B = A(_, [['render', E]]);
export { V as __pageData, B as default };
