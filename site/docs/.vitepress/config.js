import { defineConfig } from 'vitepress';
import { demoBlockPlugin } from 'vitepress-theme-demoblock';
// const pkg = require('vitepress/package.json');
const sidebar = {
  '/guide/': sidebarGuide(),
  '/components/': sidebarComponent(),
};

function sidebarGuide() {
  return [
    {
      text: '开始',
      collapsible: true,
      items: [
        { text: '什么是bubu-ui?', link: '/guide/start' },
        { text: '快速开始', link: '/guide/quickStart' },
      ],
    },
  ];
}

function sidebarComponent() {
  return [
    {
      text: '布局组件',
      items: [
        {
          text: 'Container组件',
          link: '/components/container',
        },
        {
          text: 'Grid组件',
          link: '/components/grid',
        },
        {
          text: 'Space组件',
          link: '/components/space',
        },
        {
          text: 'Split组件',
          link: '/components/split',
        },
      ],
    },
    {
      text: '基础组件',
      items: [
        {
          text: 'Button组件',
          link: '/components/button',
        },
        {
          text: 'Title组件',
          link: '/components/title',
        },
        {
          text: 'Icon组件',
          link: '/components/icon',
        },
      ],
    },
    {
      text: '表单组件',
      items: [
        {
          text: 'Input组件',
          link: '/components/input',
        },
        {
          text: 'Checkbox组件',
          link: '/components/checkbox',
        },
        {
          text: 'Form组件',
          link: '/components/form',
        },
      ],
    },
    {
      text: '数据展示',
      items: [
        {
          text: 'Tree组件',
          link: '/components/tree',
        },
      ],
    },
    {
      text: '反馈组件',
      items: [
        {
          text: 'Notification组件',
          link: '/components/notification',
        },
        {
          text: 'Loading组件',
          link: '/components/loading',
        },
        {
          text: 'Message组件',
          link: '/components/message',
        },
      ],
    },
  ];
}

function nav() {
  return [
    { text: '指南', link: '/guide/start', activeMatch: '/guide/' },
    { text: '组件', link: '/components/button', activeMatch: '/components/' },
    {
      //   text: pkg.version,
      items: [
        {
          text: 'bubu-cli',
          link: 'https://github.com/yeshaojun/bubu-cli',
        },
        {
          text: 'mini-vue',
          link: 'https://github.com/yeshaojun/v3-mini',
        },
      ],
    },
  ];
}

export default defineConfig({
  title: 'BuBu-UI',
  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],
  themeConfig: {
    sidebar,
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BuBuUI/bubu-ui/' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      md.use(demoBlockPlugin, {
        scriptImports: ["import * as bubuUI from '@bubu-ui/components'"],
        scriptReplaces: [
          {
            searchValue: /import ({.*}) from 'bubu-ui'/g,
            replaceValue: (s, s1) => `const ${s1} = bubuUI`,
          },
        ],
      });
    },
  },
});
