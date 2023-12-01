import {
  V as u,
  f as m,
  _ as d,
  o as f,
  c as _,
  a as D,
  w as y,
  b as s,
  d as o,
  r as i,
} from './app.111d27d4.js';
const { defineComponent: C } = u,
  g = C({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
          createTextVNode: n,
          resolveComponent: t,
          withCtx: a,
          openBlock: c,
          createBlock: p,
        } = u;
        function r(F, v) {
          const A = t('bu-button');
          return (
            c(),
            p(
              A,
              { onClick: F.open },
              { default: a(() => [n('show message')]), _: 1 },
              8,
              ['onClick'],
            )
          );
        }
        const { BuMessage: l } = m,
          e = C({
            setup() {
              return {
                open: () => {
                  console.log('23', l), l({ message: 'nihaoya' });
                },
              };
            },
          });
        return { render: r, ...e };
      })(),
    },
  }),
  E = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]}],"relativePath":"components/message.md"}',
  ),
  h = s(
    'h3',
    { id: '基本用法', tabindex: '-1' },
    [
      o('基本用法 '),
      s(
        'a',
        { class: 'header-anchor', href: '#基本用法', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  b = s(
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
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-button'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, '@click'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'open'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, 'show message'),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'button'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'template'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
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
          o(`
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
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'reactive'),
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
          o(`
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
            s('span', { style: { color: '#A6ACCD' } }, 'BuMessage'),
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
            s('span', { style: { color: '#C3E88D' } }, 'bubu-ui'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
          ]),
          o(`
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
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#F07178' } }, 'setup'),
            s('span', { style: { color: '#89DDFF' } }, '()'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'open'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '()'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, '=>'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'console'),
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#82AAFF' } }, 'log'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '23'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'BuMessage'),
            s('span', { style: { color: '#F07178' } }, ')'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#82AAFF' } }, 'BuMessage'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          message'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'nihaoya'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '          '),
            s(
              'span',
              { style: { color: '#676E95', 'font-style': 'italic' } },
              '// duration: 0',
            ),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#F07178' } }, ')'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
          ]),
          o(`
`),
          s('span', { class: 'line' }),
          o(`
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
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#A6ACCD' } }, 'open'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#A6ACCD' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'script'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  );
function B(n, t, a, c, p, r) {
  const l = i('render-demo-0'),
    e = i('demo');
  return (
    f(),
    _('div', null, [
      h,
      D(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
    <bu-button @click="open">show message</button>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
import { BuMessage } from 'bubu-ui'
export default defineComponent({
  setup() {
    const open = () => {
      console.log('23', BuMessage)
        BuMessage({
          message: "nihaoya",
          // duration: 0
        })
    }

    return {
        open
    };
  },
});
<\/script>
`,
        },
        { highlight: y(() => [b]), default: y(() => [D(l)]), _: 1 },
      ),
    ])
  );
}
const k = d(g, [['render', B]]);
export { E as __pageData, k as default };
