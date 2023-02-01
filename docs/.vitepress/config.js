import { defineConfig } from 'vitepress';
import { demoBlockPlugin } from 'vitepress-theme-demoblock';
const pkg = require('vitepress/package.json');
const sidebar = {
  '/guide/': sidebarGuide(),
  '/components/': sidebarComponent(),
};

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [{ text: 'What is VitePress?', link: '/guide/start' }],
    },
  ];
}

function sidebarComponent() {
  return [
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
      ],
    },
    {
      text: '表单组件',
      items: [
        {
          text: 'Form组件',
          link: '/components/form',
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
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
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
      md.use(demoBlockPlugin);
    },
  },
});
