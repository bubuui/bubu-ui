import {
  V as d,
  _ as b,
  o as h,
  c as A,
  a as i,
  w as n,
  b as e,
  d as t,
  r as y,
} from './app.111d27d4.js';
const { defineComponent: f } = d,
  E = f({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
          createTextVNode: o,
          resolveComponent: a,
          withCtx: s,
          createVNode: l,
          Fragment: D,
          openBlock: F,
          createElementBlock: c,
        } = d;
        function r(_, C) {
          const p = a('bu-title');
          return (
            F(),
            c(
              D,
              null,
              [
                l(p, { border: '' }, { default: s(() => [o('title')]), _: 1 }),
                l(p, null, { default: s(() => [o('title')]), _: 1 }),
                l(p, { sub: '' }, { default: s(() => [o('sub')]), _: 1 }),
              ],
              64,
            )
          );
        }
        return { render: r, ...{} };
      })(),
      'render-demo-1': (function () {
        const {
          resolveComponent: o,
          createVNode: a,
          createTextVNode: s,
          withCtx: l,
          openBlock: D,
          createBlock: F,
        } = d;
        function c(u, _) {
          const C = o('bu-icon'),
            p = o('bu-button'),
            m = o('bu-title');
          return (
            D(),
            F(
              m,
              { sub: '' },
              {
                left: l(() => [a(C, { name: 'question-circle', size: '16' })]),
                right: l(() => [
                  a(
                    p,
                    { type: 'primary' },
                    { default: l(() => [s('save')]), _: 1 },
                  ),
                ]),
                default: l(() => [s(' title ')]),
                _: 1,
              },
            )
          );
        }
        return { render: c, ...{} };
      })(),
    },
  }),
  $ = JSON.parse(
    '{"title":"Title 组件","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"插槽用法","slug":"插槽用法","link":"#插槽用法","children":[]}],"relativePath":"components/title.md"}',
  ),
  x = e(
    'h1',
    { id: 'title-组件', tabindex: '-1' },
    [
      t('Title 组件 '),
      e(
        'a',
        { class: 'header-anchor', href: '#title-组件', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  v = e(
    'h3',
    { id: '基础用法', tabindex: '-1' },
    [
      t('基础用法 '),
      e(
        'a',
        { class: 'header-anchor', href: '#基础用法', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  g = e('div', null, 'Title 基础用法', -1),
  k = e(
    'div',
    { class: 'language-vue' },
    [
      e('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        e('code', null, [
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'bu-title'),
            e('span', { style: { color: '#89DDFF' } }, ' border>'),
            e('span', { style: { color: '#A6ACCD' } }, 'title'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'bu-title'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'bu-title'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
            e('span', { style: { color: '#A6ACCD' } }, 'title'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'bu-title'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'bu-title'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'sub'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
            e('span', { style: { color: '#A6ACCD' } }, 'sub'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'bu-title'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  ),
  V = e(
    'h3',
    { id: '插槽用法', tabindex: '-1' },
    [
      t('插槽用法 '),
      e(
        'a',
        { class: 'header-anchor', href: '#插槽用法', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  N = e('div', null, 'Title 插槽', -1),
  B = e(
    'div',
    { class: 'language-vue' },
    [
      e('pre', { 'v-pre': '', class: 'shiki material-palenight' }, [
        e('code', null, [
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'bu-title'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'sub'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    title'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#A6ACCD' } }, ' '),
            e('span', { style: { color: '#89DDFF' } }, '#'),
            e('span', { style: { color: '#C792EA' } }, 'left'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '      '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'bu-icon'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'name'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'question-circle'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'size'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, '16'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '></'),
            e('span', { style: { color: '#F07178' } }, 'bu-icon'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#A6ACCD' } }, ' '),
            e('span', { style: { color: '#89DDFF' } }, '#'),
            e('span', { style: { color: '#C792EA' } }, 'right'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '      '),
            e('span', { style: { color: '#89DDFF' } }, '<'),
            e('span', { style: { color: '#F07178' } }, 'bu-button'),
            e('span', { style: { color: '#89DDFF' } }, ' '),
            e('span', { style: { color: '#C792EA' } }, 'type'),
            e('span', { style: { color: '#89DDFF' } }, '='),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#C3E88D' } }, 'primary'),
            e('span', { style: { color: '#89DDFF' } }, '"'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
            e('span', { style: { color: '#A6ACCD' } }, 'save'),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'bu-button'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '    '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#A6ACCD' } }, '  '),
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'bu-title'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }, [
            e('span', { style: { color: '#89DDFF' } }, '</'),
            e('span', { style: { color: '#F07178' } }, 'template'),
            e('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          t(`
`),
          e('span', { class: 'line' }),
        ]),
      ]),
    ],
    -1,
  );
function T(o, a, s, l, D, F) {
  const c = y('render-demo-0'),
    r = y('demo'),
    u = y('render-demo-1');
  return (
    h(),
    A('div', null, [
      x,
      v,
      i(
        r,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-title border>title</bu-title>
  <bu-title>title</bu-title>
  <bu-title sub>sub</bu-title>
</template>
`,
        },
        {
          description: n(() => [g]),
          highlight: n(() => [k]),
          default: n(() => [i(c)]),
          _: 1,
        },
      ),
      V,
      i(
        r,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-title sub>
    title
    <template #left>
      <bu-icon name="question-circle" size="16"></bu-icon>
    </template>
    <template #right>
      <bu-button type="primary">save</bu-button>
    </template>
  </bu-title>
</template>
`,
        },
        {
          description: n(() => [N]),
          highlight: n(() => [B]),
          default: n(() => [i(u)]),
          _: 1,
        },
      ),
    ])
  );
}
const q = b(E, [['render', T]]);
export { $ as __pageData, q as default };
