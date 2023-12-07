import {
  V as C,
  _ as h,
  r as u,
  o as g,
  c as v,
  a as D,
  w as y,
  b as s,
  d as o,
} from './app.337dcb16.js';
const { defineComponent: f } = C,
  E = f({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
            createElementVNode: l,
            resolveComponent: t,
            withCtx: e,
            openBlock: a,
            createBlock: p,
          } = C,
          F = l('div', { class: 'demo' }, null, -1),
          c = l('div', { class: 'demo' }, null, -1),
          n = l('div', { class: 'demo' }, null, -1),
          r = l('div', { class: 'demo' }, null, -1);
        function m(A, i) {
          const d = t('bu-grid');
          return (
            a(), p(d, { cols: 4 }, { default: e(() => [F, c, n, r]), _: 1 })
          );
        }
        return { render: m, ...{} };
      })(),
      'render-demo-1': (function () {
        const {
            createElementVNode: l,
            resolveComponent: t,
            withCtx: e,
            createVNode: a,
            openBlock: p,
            createBlock: F,
          } = C,
          c = l('div', { class: 'demo' }, null, -1),
          n = l('div', { class: 'demo' }, null, -1);
        function r(_, A) {
          const i = t('bu-grid-item'),
            d = t('bu-grid');
          return (
            p(),
            F(
              d,
              { cols: 4 },
              {
                default: e(() => [
                  a(i, { offset: 1 }, { default: e(() => [c]), _: 1 }),
                  a(i, { offset: 1 }, { default: e(() => [n]), _: 1 }),
                ]),
                _: 1,
              },
            )
          );
        }
        return { render: r, ...{} };
      })(),
    },
  }),
  $ = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"input 基本用法","slug":"input-基本用法","link":"#input-基本用法","children":[]},{"level":3,"title":"偏移","slug":"偏移","link":"#偏移","children":[]}],"relativePath":"components/grid.md"}',
  );
const b = s(
    'h3',
    { id: 'input-基本用法', tabindex: '-1' },
    [
      o('input 基本用法 '),
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
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-grid'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':cols'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '4'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'demo'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'demo'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'demo'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'demo'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-grid'),
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
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#FFCB6B' } }, 'demo'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#B2CCD6' } }, 'background-color'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#A6ACCD' } }, '0080001f'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#B2CCD6' } }, 'height'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '108px'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  x = s(
    'h3',
    { id: '偏移', tabindex: '-1' },
    [
      o('偏移 '),
      s(
        'a',
        { class: 'header-anchor', href: '#偏移', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  k = s('p', null, '根据元素个素动态计算，再研究研究', -1),
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
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-grid'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':cols'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '4'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-grid-item'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':offset'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '1'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '><'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'demo'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-grid-item'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-grid-item'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':offset'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '1'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'class'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'demo'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'div'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-grid-item'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-grid'),
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
            s('span', { style: { color: '#F07178' } }, 'style'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#FFCB6B' } }, 'demo'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#B2CCD6' } }, 'background-color'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '#'),
            s('span', { style: { color: '#A6ACCD' } }, '0080001f'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#B2CCD6' } }, 'height'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#A6ACCD' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '108px'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '}'),
          ]),
          o(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'style'),
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
function N(l, t, e, a, p, F) {
  const c = u('render-demo-0'),
    n = u('demo'),
    r = u('render-demo-1');
  return (
    g(),
    v('div', null, [
      b,
      D(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-grid :cols="4">
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
  </bu-grid>
</template>
<style>
.demo {
  background-color: #0080001f;
  height: 108px;
}
</style>
`,
        },
        { highlight: y(() => [B]), default: y(() => [D(c)]), _: 1 },
      ),
      x,
      k,
      D(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-grid :cols="4">
    <bu-grid-item :offset="1"><div class="demo"></div></bu-grid-item>
    <bu-grid-item :offset="1"> <div class="demo"></div></bu-grid-item>
  </bu-grid>
</template>
<style>
.demo {
  background-color: #0080001f;
  height: 108px;
}
</style>
`,
        },
        { highlight: y(() => [V]), default: y(() => [D(r)]), _: 1 },
      ),
    ])
  );
}
const J = h(E, [['render', N]]);
export { $ as __pageData, J as default };
