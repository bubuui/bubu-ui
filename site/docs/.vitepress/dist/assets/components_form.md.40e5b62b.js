import {
  V as u,
  _ as g,
  r as d,
  o as h,
  c as V,
  a as f,
  w as i,
  b as s,
  d as l,
} from './app.337dcb16.js';
const { defineComponent: x } = u,
  w = x({
    name: 'component-doc',
    components: {
      'render-demo-0': (function () {
        const {
          resolveComponent: a,
          createVNode: n,
          withCtx: t,
          createTextVNode: m,
          openBlock: C,
          createBlock: A,
        } = u;
        function c(o, e) {
          const p = a('bu-input'),
            F = a('bu-form-item'),
            D = a('bu-button'),
            v = a('bu-form');
          return (
            C(),
            A(
              v,
              {
                model: o.form,
                rules: o.rules,
                ref: 'formEl',
                'label-position': 'left',
              },
              {
                default: t(() => [
                  n(
                    F,
                    { label: '账号144534', prop: 'name' },
                    {
                      default: t(() => [
                        n(
                          p,
                          {
                            type: 'text',
                            modelValue: o.form.name,
                            'onUpdate:modelValue':
                              e[0] || (e[0] = (y) => (o.form.name = y)),
                          },
                          null,
                          8,
                          ['modelValue'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  n(
                    F,
                    { label: '密码', prop: 'password' },
                    {
                      default: t(() => [
                        n(
                          p,
                          {
                            type: 'text',
                            modelValue: o.form.password,
                            'onUpdate:modelValue':
                              e[1] || (e[1] = (y) => (o.form.password = y)),
                          },
                          null,
                          8,
                          ['modelValue'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  n(
                    D,
                    { type: 'primary', onClick: o.submit },
                    { default: t(() => [m('submit')]), _: 1 },
                    8,
                    ['onClick'],
                  ),
                ]),
                _: 1,
              },
              8,
              ['model', 'rules'],
            )
          );
        }
        const { reactive: r, defineComponent: E, ref: b } = u,
          _ = E({
            setup() {
              const o = r({ name: '234', password: '' }),
                e = b(),
                p = r({
                  name: [
                    {
                      required: !0,
                      min: 4,
                      max: 20,
                      message: '长度在 1 到 20 个字符',
                      trigger: 'blur',
                    },
                  ],
                  password: [
                    {
                      required: !1,
                      min: 4,
                      max: 20,
                      message: '长度在 1 到 20 个字符',
                      trigger: 'blur',
                    },
                  ],
                });
              return {
                form: o,
                rules: p,
                formEl: e,
                submit: () => {
                  console.log('formEl.value', e.value),
                    e.value.validate((D) => {
                      console.log('isValid', D);
                    });
                },
              };
            },
          });
        return { render: c, ..._ };
      })(),
    },
  }),
  U = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"form","slug":"form","link":"#form","children":[]},{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]}],"relativePath":"components/form.md"}',
  ),
  B = s(
    'h3',
    { id: 'form', tabindex: '-1' },
    [
      l('form '),
      s(
        'a',
        { class: 'header-anchor', href: '#form', 'aria-hidden': 'true' },
        '#',
      ),
    ],
    -1,
  ),
  k = s(
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
  N = s('div', null, 'Form 基础用法', -1),
  q = s(
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
            s('span', { style: { color: '#F07178' } }, 'bu-form'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'form'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, ':rules'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'rules'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'ref'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'formEl'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'label-position'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'left'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-form-item'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'label'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '账号144534'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'prop'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'name'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'type'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'text'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'form.name'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' />'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-form-item'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-form-item'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'label'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, '密码'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'prop'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'password'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '<'),
            s('span', { style: { color: '#F07178' } }, 'bu-input'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'type'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'text'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, 'v-model'),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#C3E88D' } }, 'form.password'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, ' />'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-form-item'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '    '),
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
            s('span', { style: { color: '#C3E88D' } }, 'submit'),
            s('span', { style: { color: '#89DDFF' } }, '"'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
            s('span', { style: { color: '#A6ACCD' } }, 'submit'),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-button'),
            s('span', { style: { color: '#89DDFF' } }, '>'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#A6ACCD' } }, '  '),
            s('span', { style: { color: '#89DDFF' } }, '</'),
            s('span', { style: { color: '#F07178' } }, 'bu-form'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'reactive'),
            s('span', { style: { color: '#89DDFF' } }, ','),
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
            s('span', { style: { color: '#A6ACCD' } }, 'form'),
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
            s('span', { style: { color: '#F07178' } }, '      name'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '234'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      password'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "''"),
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
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'formEl'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#82AAFF' } }, 'ref'),
            s('span', { style: { color: '#F07178' } }, '()'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '    '),
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'rules'),
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
            s('span', { style: { color: '#F07178' } }, '      name'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          required'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'true'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          min'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '4'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          max'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '20'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          message'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '长度在 1 到 20 个字符'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          trigger'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'blur'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      ]'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      password'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' ['),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          required'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#FF9CAC' } }, 'false'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          min'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '4'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          max'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#F78C6C' } }, '20'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          message'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, '长度在 1 到 20 个字符'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '          trigger'),
            s('span', { style: { color: '#89DDFF' } }, ':'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'blur'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#89DDFF' } }, '},'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      ]'),
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
            s('span', { style: { color: '#C792EA' } }, 'const'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'submit'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '='),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '()'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#C792EA' } }, '=>'),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#89DDFF' } }, '{'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'console'),
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#82AAFF' } }, 'log'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'formEl.value'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'formEl'),
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#A6ACCD' } }, 'value'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'formEl'),
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#A6ACCD' } }, 'value'),
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#82AAFF' } }, 'validate'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, '('),
            s(
              'span',
              { style: { color: '#A6ACCD', 'font-style': 'italic' } },
              'isValid',
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
            s('span', { style: { color: '#F07178' } }, '        '),
            s('span', { style: { color: '#A6ACCD' } }, 'console'),
            s('span', { style: { color: '#89DDFF' } }, '.'),
            s('span', { style: { color: '#82AAFF' } }, 'log'),
            s('span', { style: { color: '#F07178' } }, '('),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#C3E88D' } }, 'isValid'),
            s('span', { style: { color: '#89DDFF' } }, "'"),
            s('span', { style: { color: '#89DDFF' } }, ','),
            s('span', { style: { color: '#F07178' } }, ' '),
            s('span', { style: { color: '#A6ACCD' } }, 'isValid'),
            s('span', { style: { color: '#F07178' } }, ')'),
            s('span', { style: { color: '#89DDFF' } }, ';'),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#89DDFF' } }, '}'),
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
            s('span', { style: { color: '#A6ACCD' } }, 'form'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'rules'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'formEl'),
            s('span', { style: { color: '#89DDFF' } }, ','),
          ]),
          l(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F07178' } }, '      '),
            s('span', { style: { color: '#A6ACCD' } }, 'submit'),
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
function $(a, n, t, m, C, A) {
  const c = d('render-demo-0'),
    r = d('demo');
  return (
    h(),
    V('div', null, [
      B,
      k,
      f(
        r,
        {
          customClass: 'undefined',
          sourceCode: `<template>
  <bu-form :model="form" :rules="rules" ref="formEl" label-position="left">
    <bu-form-item label="账号144534" prop="name">
      <bu-input type="text" v-model="form.name" />
    </bu-form-item>
    <bu-form-item label="密码" prop="password">
      <bu-input type="text" v-model="form.password" />
    </bu-form-item>
    <bu-button type="primary" @click="submit">submit</bu-button>
  </bu-form>
</template>
<script lang="ts">
import { reactive, defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const form = reactive({
      name: '234',
      password: '',
    });
    const formEl = ref();
    const rules = reactive({
      name: [
        {
          required: true,
          min: 4,
          max: 20,
          message: '长度在 1 到 20 个字符',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: false,
          min: 4,
          max: 20,
          message: '长度在 1 到 20 个字符',
          trigger: 'blur',
        },
      ],
    });
    const submit = () => {
      console.log('formEl.value', formEl.value);
      formEl.value.validate((isValid) => {
        console.log('isValid', isValid);
      });
    };
    return {
      form,
      rules,
      formEl,
      submit,
    };
  },
});
<\/script>
`,
        },
        {
          description: i(() => [N]),
          highlight: i(() => [q]),
          default: i(() => [f(c)]),
          _: 1,
        },
      ),
    ])
  );
}
const J = g(w, [['render', $]]);
export { U as __pageData, J as default };
