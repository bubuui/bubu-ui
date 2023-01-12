import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";
const sidebar = {
  "/": [
    {
      text: "快速开始",
      link: "/",
      items: [
        {
          text: "test",
          link: "/test",
        },
      ],
    },
  ],
};

export default defineConfig({
  themeConfig: {
    sidebar,
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      md.use(demoBlockPlugin);
    },
  },
});
