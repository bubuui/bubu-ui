import {
  V as m,
  f as d,
  _ as f,
  r as y,
  o as _,
  c as h,
  a as i,
  w as u,
  b as s,
  d as o,
} from './app.337dcb16.js';
const { defineComponent: C } = m,
  E = C({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
          createTextVNode: n,
          resolveComponent: t,
          withCtx: a,
          openBlock: c,
          createBlock: r,
        } = m;
        function p(F, D) {
          const A = t('bu-button');
          return (
            c(),
            r(
              A,
              { type: 'primary', onClick: F.preview },
              { default: a(() => [n('预览图片')]), _: 1 },
              8,
              ['onClick'],
            )
          );
        }
        const { BuImgPreview: l } = d,
          e = C({
            setup() {
              return {
                preview: () => {
                  l({
                    current: 1,
                    maxZoom: 10,
                    urls: [
                      'https://imgcrm.nbdeli.com/100016551/xq.jpg',
                      'https://sandbox.rsvp.ai/media/resources/738754654560858112',
                      'https://img2.baidu.com/it/u=3990732507,3148015412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    ],
                    fail: (D) => {
                      console.log('e', D);
                    },
                  });
                },
              };
            },
          });
        return { render: p, ...e };
      })(),
    },
  }),
  x = JSON.parse(
    '{"title":"图片预览（支持移动端双指放大，缩小，移动）","description":"","frontmatter":{},"headers":[],"relativePath":"components/imgpreview.md"}',
  ),
  b = s(
    'h1',
    { id: '图片预览-支持移动端双指放大-缩小-移动', tabindex: '-1' },
    [
      o('图片预览（支持移动端双指放大，缩小，移动） '),
      s(
        'a',
        {
          class: 'header-anchor',
          href: '#图片预览-支持移动端双指放大-缩小-移动',
          'aria-hidden': 'true',
        },
        '#',
      ),
    ],
    -1,
  ),
  v = s(
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
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-button'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'type'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'primary'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, '@click'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'preview'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, '预览图片'),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-button'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'BuImgPreview'),
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
            s('span', { style: { color: '#89DDFF' } }, ';'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'preview'),
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
            s('span', { style: { color: '#82AAFF' } }, 'BuImgPreview'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        current'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '1'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        maxZoom'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '10'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        urls'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s(
              'span',
              { style: { color: '#C3E88D' } },
              'https://imgcrm.nbdeli.com/100016551/xq.jpg',
            ),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s(
              'span',
              { style: { color: '#C3E88D' } },
              'https://sandbox.rsvp.ai/media/resources/738754654560858112',
            ),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s(
              'span',
              { style: { color: '#C3E88D' } },
              'https://img2.baidu.com/it/u=3990732507,3148015412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            ),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#82AAFF' } }, 'fail'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '('),
            s(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'e',
            ),
            s('span', { style: { color: '#89DDFF' } }, ')'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, '=>'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#A6ACCD' } }, 'console'),
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#82AAFF' } }, 'log'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'e'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'e'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
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
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'preview'),
            s('span', { style: { color: '#89DDFF' } }, ','),
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
function g(n, t, a, c, r, p) {
  const l = y('render-demo-0'),
    e = y('demo');
  return (
    _(),
    h('div', null, [
      b,
      i(
        e,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-button type="primary" @click="preview">预览图片</bu-button>
</template>
<script lang="ts">
import { ref } from 'vue';
import { BuImgPreview } from 'bubu-ui';
export default defineComponent({
  setup() {
    const preview = () => {
      BuImgPreview({
        current: 1,
        maxZoom: 10,
        urls: [
          'https://imgcrm.nbdeli.com/100016551/xq.jpg',
          'https://sandbox.rsvp.ai/media/resources/738754654560858112',
          'https://img2.baidu.com/it/u=3990732507,3148015412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        ],
        fail: (e) => {
          console.log('e', e);
        },
      });
    };
    return {
      preview,
    };
  },
});
<\/script>
`,
        },
        { highlight: u(() => [v]), default: u(() => [i(l)]), _: 1 },
      ),
    ])
  );
}
const B = f(E, [['render', g]]);
export { x as __pageData, B as default };
