import {
  V as t,
  _ as u,
  r as C,
  o as m,
  c as h,
  a as A,
  w as d,
  b as l,
  d as s,
} from './app.337dcb16.js';
const { defineComponent: f } = t,
  g = f({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { resolveComponent: c, openBlock: r, createBlock: p } = t;
        function F(o, n) {
          const i = c('bu-rich-text-area');
          return (
            r(),
            p(
              i,
              {
                copy: '',
                modelValue: o.val,
                'onUpdate:modelValue': n[0] || (n[0] = (a) => (o.val = a)),
                placeholder: '请输入',
                imgPrevie: '',
                onImgUpload: o.upload,
                onChange: o.change,
              },
              null,
              8,
              ['modelValue', 'onImgUpload', 'onChange'],
            )
          );
        }
        const { defineComponent: D, ref: y } = t,
          e = D({
            setup() {
              const o = y('');
              return {
                val: o,
                upload: (a) => {
                  console.log('file', a);
                },
                change: () => {
                  console.log('change', o.value);
                },
              };
            },
          });
        return { render: F, ...e };
      })(),
    },
  }),
  B = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"RichTextArea 组件","slug":"richtextarea-组件","link":"#richtextarea-组件","children":[]}],"relativePath":"components/richTextArea.md"}',
  ),
  v = l(
    'h3',
    { id: 'richtextarea-组件', tabindex: '-1' },
    [
      s('RichTextArea 组件 '),
      l(
        'a',
        {
          class: 'header-anchor',
          href: '#richtextarea-组件',
          'aria-hidden': 'true',
        },
        '#',
      ),
    ],
    -1,
  ),
  E = l(
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
            l('span', { style: { color: '#F07178' } }, 'bu-rich-text-area'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'copy'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'v-model'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'val'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'placeholder'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, '请输入'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'imgPrevie'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, '@imgUpload'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'upload'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, '@change'),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#89DDFF' } }, '"'),
            l('span', { style: { color: '#C3E88D' } }, 'change'),
            l('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#89DDFF' } }, '  ></'),
            l('span', { style: { color: '#F07178' } }, 'bu-rich-text-area'),
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
            l('span', { style: { color: '#A6ACCD' } }, 'defineComponent'),
            l('span', { style: { color: '#89DDFF' } }, ','),
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
            l('span', { style: { color: '#A6ACCD' } }, 'val'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#82AAFF' } }, 'ref'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "''"),
            l('span', { style: { color: '#F07178' } }, ')'),
            l('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '    '),
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'upload'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '='),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '('),
            l(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'file',
            ),
            l('span', { style: { color: '#89DDFF' } }, ':'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#FFCB6B' } }, 'File'),
            l('span', { style: { color: '#89DDFF' } }, ')'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#C792EA' } }, '=>'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'console'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'log'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'file'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'file'),
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
            l('span', { style: { color: '#C792EA' } }, 'const'),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'change'),
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
            l('span', { style: { color: '#A6ACCD' } }, 'console'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#82AAFF' } }, 'log'),
            l('span', { style: { color: '#F07178' } }, '('),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#C3E88D' } }, 'change'),
            l('span', { style: { color: '#89DDFF' } }, "'"),
            l('span', { style: { color: '#89DDFF' } }, ','),
            l('span', { style: { color: '#F07178' } }, ' '),
            l('span', { style: { color: '#A6ACCD' } }, 'val'),
            l('span', { style: { color: '#89DDFF' } }, '.'),
            l('span', { style: { color: '#A6ACCD' } }, 'value'),
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
            l('span', { style: { color: '#A6ACCD' } }, 'val'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'upload'),
            l('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          s(`
`),
          l('span', { class: 'line' }, [
            l('span', { style: { color: '#F07178' } }, '      '),
            l('span', { style: { color: '#A6ACCD' } }, 'change'),
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
function _(c, r, p, F, D, y) {
  const e = C('render-demo-0'),
    o = C('demo');
  return (
    m(),
    h('div', null, [
      v,
      A(
        o,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-rich-text-area
    copy
    v-model="val"
    placeholder="请输入"
    imgPrevie
    @imgUpload="upload"
    @change="change"
  ></bu-rich-text-area>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const val = ref('');
    const upload = (file: File) => {
      console.log('file', file);
    };
    const change = () => {
      console.log('change', val.value);
    };
    return {
      val,
      upload,
      change,
    };
  },
});
<\/script>
`,
        },
        { highlight: d(() => [E]), default: d(() => [A(e)]), _: 1 },
      ),
    ])
  );
}
const b = u(g, [['render', _]]);
export { B as __pageData, b as default };
