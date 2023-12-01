import {
  V as c,
  _ as m,
  o as h,
  c as f,
  a as i,
  w as t,
  b as s,
  d as l,
  r as d,
} from './app.111d27d4.js';
const { defineComponent: C } = c,
  _ = C({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const { resolveComponent: p, openBlock: F, createBlock: r } = c;
        function D(o, n) {
          const a = p('bu-tree');
          return F(), r(a, { data: o.data }, null, 8, ['data']);
        }
        const { reactive: e } = c,
          y = C({
            setup() {
              return {
                data: e([
                  {
                    label: 'test1',
                    id: '12',
                    children: [
                      {
                        label: 'test1-1',
                        id: '12-1',
                        children: [{ label: 'test1-1-1', id: '12-1-1' }],
                      },
                      { label: 'test1-2', id: '12-2' },
                    ],
                  },
                  { label: 'test2', id: '13' },
                ]),
              };
            },
          });
        return { render: D, ...y };
      })(),
      'render-demo-1': (function () {
        const { resolveComponent: p, openBlock: F, createBlock: r } = c;
        function D(o, n) {
          const a = p('bu-tree');
          return F(), r(a, { data: o.data, checkable: '' }, null, 8, ['data']);
        }
        const { reactive: e } = c,
          y = C({
            setup() {
              return {
                data: e([
                  {
                    label: 'test1',
                    id: '12',
                    children: [
                      {
                        label: 'test1-1',
                        id: '12-1',
                        children: [{ label: 'test1-1-1', id: '12-1-1' }],
                      },
                      { label: 'test1-2', id: '12-2' },
                    ],
                  },
                  { label: 'test2', id: '13' },
                ]),
              };
            },
          });
        return { render: D, ...y };
      })(),
      'render-demo-2': (function () {
        const { resolveComponent: p, openBlock: F, createBlock: r } = c;
        function D(o, n) {
          const a = p('bu-tree');
          return F(), r(a, { data: o.data, lineable: '' }, null, 8, ['data']);
        }
        const { reactive: e } = c,
          y = C({
            setup() {
              return {
                data: e([
                  {
                    label: 'test1',
                    id: '12',
                    children: [
                      {
                        label: 'test1-1',
                        id: '12-1',
                        children: [{ label: 'test1-1-1', id: '12-1-1' }],
                      },
                      { label: 'test1-2', id: '12-2' },
                    ],
                  },
                  { label: 'test2', id: '13' },
                ]),
              };
            },
          });
        return { render: D, ...y };
      })(),
      'render-demo-3': (function () {
        const { resolveComponent: p, openBlock: F, createBlock: r } = c;
        function D(o, n) {
          const a = p('bu-tree');
          return (
            F(),
            r(a, { data: o.data, dragdrop: o.dragdrop }, null, 8, [
              'data',
              'dragdrop',
            ])
          );
        }
        const { reactive: e } = c,
          y = C({
            setup() {
              const o = e([
                  {
                    label: 'test1',
                    id: '12',
                    children: [
                      {
                        label: 'test1-1',
                        id: '12-1',
                        children: [
                          { label: 'test1-1-1', id: '12-1-1' },
                          { label: 'test1-1-2', id: '12-1-2' },
                        ],
                      },
                      { label: 'test1-2', id: '12-2' },
                    ],
                  },
                  { label: 'test2', id: '13' },
                ]),
                n = e({ dropNext: !0, dropPrev: !0, dropInner: !0 });
              return { data: o, dragdrop: n };
            },
          });
        return { render: D, ...y };
      })(),
      'render-demo-4': (function () {
        const { resolveComponent: p, openBlock: F, createBlock: r } = c;
        function D(o, n) {
          const a = p('bu-tree');
          return (
            F(),
            r(
              a,
              {
                data: o.data,
                dragdrop: o.dragdrop,
                height: 200,
                itemHeight: 40,
              },
              null,
              8,
              ['data', 'dragdrop'],
            )
          );
        }
        const { reactive: e } = c,
          y = C({
            setup() {
              const o = e([
                  {
                    label: 'test1',
                    id: '12',
                    children: [
                      {
                        label: 'test1-1',
                        id: '12-1',
                        children: [
                          { label: 'test1-1-1', id: '12-1-1' },
                          { label: 'test1-1-2', id: '12-1-2' },
                        ],
                      },
                      { label: 'test1-2', id: '12-2' },
                    ],
                  },
                  { label: 'test2', id: '13' },
                  { label: 'test3', id: '14' },
                  { label: 'test4', id: '15' },
                  { label: 'test5', id: '16' },
                  { label: 'test6', id: '17' },
                  { label: 'test7', id: '18' },
                  { label: 'test8', id: '19' },
                ]),
                n = e({ dropNext: !0, dropPrev: !0, dropInner: !0 });
              return { data: o, dragdrop: n };
            },
          });
        return { render: D, ...y };
      })(),
      'render-demo-5': (function () {
        const { resolveComponent: p, openBlock: F, createBlock: r } = c;
        function D(n, a) {
          const u = p('bu-tree');
          return (
            F(),
            r(u, { data: n.data, onLazyLoad: n.lazyLoad }, null, 8, [
              'data',
              'onLazyLoad',
            ])
          );
        }
        const { defineComponent: e, ref: y } = c,
          o = e({
            setup() {
              return {
                data: y([
                  {
                    id: 'node-1',
                    label: 'node-1',
                    children: [
                      {
                        id: 'node-1-1',
                        label: 'node 1-1 - dynamic loading',
                        isLeaf: !1,
                      },
                      { id: 'node 1-2', label: 'node 1-2' },
                    ],
                  },
                  {
                    id: 'node-2',
                    label: 'node 2 - dynamic loading',
                    isLeaf: !1,
                  },
                ]),
                lazyLoad: (u, A) => {
                  setTimeout(() => {
                    A({
                      treeItems: [
                        {
                          label: 'lazy node 1',
                          expanded: !0,
                          children: [
                            { id: 'lazy node 1-1', label: 'lazy node 1-1' },
                            { id: 'lazy node 1-2', label: 'lazy node 1-2' },
                          ],
                        },
                        { id: 'lazy node 2', label: 'lazy node 2' },
                      ],
                      node: u,
                    });
                  }, 1e3);
                },
              };
            },
          });
        return { render: D, ...o };
      })(),
    },
  }),
  S = JSON.parse(
    '{"title":"Tree 组件","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"多选","slug":"多选","link":"#多选","children":[]},{"level":3,"title":"辅助线","slug":"辅助线","link":"#辅助线","children":[]},{"level":3,"title":"拖拽","slug":"拖拽","link":"#拖拽","children":[]},{"level":3,"title":"虚拟列表","slug":"虚拟列表","link":"#虚拟列表","children":[]},{"level":3,"title":"懒加载","slug":"懒加载","link":"#懒加载","children":[]}],"relativePath":"components/tree.md"}',
  ),
  v = s(
    'h1',
    { id: 'tree-组件', tabindex: '-1' },
    [
      l('Tree 组件 '),
      s(
        'a',
        { class: 'header-anchor', href: '#tree-组件', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  g = s(
    'h3',
    { id: '基础用法', tabindex: '-1' },
    [
      l('基础用法 '),
      s(
        'a',
        { class: 'header-anchor', href: '#基础用法', 'aria-hidden': 'true' },
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
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':data'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
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
          s('span', { class: 'line' }),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'reactive'),
            s('span', { style: { color: '#F07178' } }, '(['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '13'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    ])'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
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
  k = s(
    'h3',
    { id: '多选', tabindex: '-1' },
    [
      l('多选 '),
      s(
        'a',
        { class: 'header-anchor', href: '#多选', 'aria-hidden': 'true' },
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
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':data'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'checkable'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
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
          s('span', { class: 'line' }),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'reactive'),
            s('span', { style: { color: '#F07178' } }, '(['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '13'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    ])'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
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
    { id: '辅助线', tabindex: '-1' },
    [
      l('辅助线 '),
      s(
        'a',
        { class: 'header-anchor', href: '#辅助线', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  L = s(
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
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':data'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'lineable'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
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
          s('span', { class: 'line' }),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'reactive'),
            s('span', { style: { color: '#F07178' } }, '(['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '13'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    ])'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
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
  N = s(
    'h3',
    { id: '拖拽', tabindex: '-1' },
    [
      l('拖拽 '),
      s(
        'a',
        { class: 'header-anchor', href: '#拖拽', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  I = s(
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
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':data'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':dragdrop'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'dragdrop'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
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
          s('span', { class: 'line' }),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'reactive'),
            s('span', { style: { color: '#F07178' } }, '(['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '13'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    ])'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'dragdrop'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'reactive'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      dropNext'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'true'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      dropPrev'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'true'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      dropInner'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'true'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'dragdrop'),
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
    { id: '虚拟列表', tabindex: '-1' },
    [
      l('虚拟列表 '),
      s(
        'a',
        { class: 'header-anchor', href: '#虚拟列表', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  T = s(
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
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, ':data'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, ':dragdrop'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'dragdrop'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, ':height'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '200'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, ':itemHeight'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '40'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#89DDFF' } }, '  ></'),
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
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
          s('span', { class: 'line' }),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'reactive'),
            s('span', { style: { color: '#F07178' } }, '(['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '12-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '13'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test3'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '14'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test4'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '15'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test5'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '16'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test6'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '17'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test7'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '18'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'test8'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '19'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    ])'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'dragdrop'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'reactive'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      dropNext'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'true'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      dropPrev'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'true'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      dropInner'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'true'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'dragdrop'),
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
  V = s(
    'h3',
    { id: '懒加载', tabindex: '-1' },
    [
      l('懒加载 '),
      s(
        'a',
        { class: 'header-anchor', href: '#懒加载', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  $ = s(
    'p',
    null,
    '通过设置该节点 isLeaf 参数为 false, 组件回调 lazyLoad 方法实现节点懒加载。',
    -1,
  ),
  H = s(
    'div',
    null,
    '通过设置该节点 isLeaf 参数为 false, 组件回调 lazyLoad 方法实现节点懒加载。',
    -1,
  ),
  w = s(
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
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':data'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, '@lazy-load'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'lazyLoad'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '></'),
            s('span', { style: { color: '#F07178' } }, 'bu-tree'),
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
          s('span', { class: 'line' }),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '(['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'node-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'node-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'node-1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s(
              'span',
              { style: { color: '#C3E88D' } },
              'node 1-1 - dynamic loading',
            ),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            isLeaf'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'false'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'node 1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'node 1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'node-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s(
              'span',
              { style: { color: '#C3E88D' } },
              'node 2 - dynamic loading',
            ),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        isLeaf'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'false'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    ])'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'lazyLoad'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '('),
            s(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'node',
            ),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'callback',
            ),
            s('span', { style: { color: '#89DDFF' } }, ')'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, '=>'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#82AAFF' } }, 'setTimeout'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '()'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, '=>'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'lazy node 1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            expanded'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'true'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            children'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'lazy node 1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'lazy node 1-1'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'lazy node 1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '                label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'lazy node 1-2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '              '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            id'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'lazy node 2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '            label'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'lazy node 2'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        ]'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#82AAFF' } }, 'callback'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          treeItems'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          '),
            s('span', { style: { color: '#A6ACCD' } }, 'node'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '1000'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '};'),
          ]),
          l(`
`),
          s('span', { class: 'line' }),
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
            s('span', { style: { color: '#A6ACCD' } }, 'data'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'lazyLoad'),
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
function J(p, F, r, D, e, y) {
  const o = d('render-demo-0'),
    n = d('demo'),
    a = d('render-demo-1'),
    u = d('render-demo-2'),
    A = d('render-demo-3'),
    b = d('render-demo-4'),
    E = d('render-demo-5');
  return (
    h(),
    f('div', null, [
      v,
      g,
      i(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-tree :data="data"></bu-tree>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive([
      {
        label: 'test1',
        id: '12',
        children: [
          {
            label: 'test1-1',
            id: '12-1',
            children: [
              {
                label: 'test1-1-1',
                id: '12-1-1',
              },
            ],
          },
          {
            label: 'test1-2',
            id: '12-2',
          },
        ],
      },
      {
        label: 'test2',
        id: '13',
      },
    ]);
    return {
      data,
    };
  },
});
<\/script>
`,
        },
        { highlight: t(() => [B]), default: t(() => [i(o)]), _: 1 },
      ),
      k,
      i(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-tree :data="data" checkable></bu-tree>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive([
      {
        label: 'test1',
        id: '12',
        children: [
          {
            label: 'test1-1',
            id: '12-1',
            children: [
              {
                label: 'test1-1-1',
                id: '12-1-1',
              },
            ],
          },
          {
            label: 'test1-2',
            id: '12-2',
          },
        ],
      },
      {
        label: 'test2',
        id: '13',
      },
    ]);
    return {
      data,
    };
  },
});
<\/script>
`,
        },
        { highlight: t(() => [x]), default: t(() => [i(a)]), _: 1 },
      ),
      z,
      i(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-tree :data="data" lineable></bu-tree>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive([
      {
        label: 'test1',
        id: '12',
        children: [
          {
            label: 'test1-1',
            id: '12-1',
            children: [
              {
                label: 'test1-1-1',
                id: '12-1-1',
              },
            ],
          },
          {
            label: 'test1-2',
            id: '12-2',
          },
        ],
      },
      {
        label: 'test2',
        id: '13',
      },
    ]);
    return {
      data,
    };
  },
});
<\/script>
`,
        },
        { highlight: t(() => [L]), default: t(() => [i(u)]), _: 1 },
      ),
      N,
      i(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-tree :data="data" :dragdrop="dragdrop"></bu-tree>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive([
      {
        label: 'test1',
        id: '12',
        children: [
          {
            label: 'test1-1',
            id: '12-1',
            children: [
              {
                label: 'test1-1-1',
                id: '12-1-1',
              },
              {
                label: 'test1-1-2',
                id: '12-1-2',
              },
            ],
          },
          {
            label: 'test1-2',
            id: '12-2',
          },
        ],
      },
      {
        label: 'test2',
        id: '13',
      },
    ]);
    const dragdrop = reactive({
      dropNext: true,
      dropPrev: true,
      dropInner: true,
    });
    return {
      data,
      dragdrop,
    };
  },
});
<\/script>
`,
        },
        { highlight: t(() => [I]), default: t(() => [i(A)]), _: 1 },
      ),
      P,
      i(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-tree
    :data="data"
    :dragdrop="dragdrop"
    :height="200"
    :itemHeight="40"
  ></bu-tree>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive([
      {
        label: 'test1',
        id: '12',
        children: [
          {
            label: 'test1-1',
            id: '12-1',
            children: [
              {
                label: 'test1-1-1',
                id: '12-1-1',
              },
              {
                label: 'test1-1-2',
                id: '12-1-2',
              },
            ],
          },
          {
            label: 'test1-2',
            id: '12-2',
          },
        ],
      },
      {
        label: 'test2',
        id: '13',
      },
      {
        label: 'test3',
        id: '14',
      },
      {
        label: 'test4',
        id: '15',
      },
      {
        label: 'test5',
        id: '16',
      },
      {
        label: 'test6',
        id: '17',
      },
      {
        label: 'test7',
        id: '18',
      },
      {
        label: 'test8',
        id: '19',
      },
    ]);
    const dragdrop = reactive({
      dropNext: true,
      dropPrev: true,
      dropInner: true,
    });
    return {
      data,
      dragdrop,
    };
  },
});
<\/script>
`,
        },
        { highlight: t(() => [T]), default: t(() => [i(b)]), _: 1 },
      ),
      V,
      $,
      i(
        n,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-tree :data="data" @lazy-load="lazyLoad"></bu-tree>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 'node-1',
        label: 'node-1',
        children: [
          {
            id: 'node-1-1',
            label: 'node 1-1 - dynamic loading',
            isLeaf: false,
          },
          {
            id: 'node 1-2',
            label: 'node 1-2',
          },
        ],
      },
      {
        id: 'node-2',
        label: 'node 2 - dynamic loading',
        isLeaf: false,
      },
    ]);

    const lazyLoad = (node, callback) => {
      setTimeout(() => {
        const data = [
          {
            label: 'lazy node 1',
            expanded: true,
            children: [
              {
                id: 'lazy node 1-1',
                label: 'lazy node 1-1',
              },
              {
                id: 'lazy node 1-2',
                label: 'lazy node 1-2',
              },
            ],
          },
          {
            id: 'lazy node 2',
            label: 'lazy node 2',
          },
        ];
        callback({
          treeItems: data,
          node,
        });
      }, 1000);
    };

    return {
      data,
      lazyLoad,
    };
  },
});
<\/script>
`,
        },
        {
          description: t(() => [H]),
          highlight: t(() => [w]),
          default: t(() => [i(E)]),
          _: 1,
        },
      ),
    ])
  );
}
const j = m(_, [['render', J]]);
export { S as __pageData, j as default };
