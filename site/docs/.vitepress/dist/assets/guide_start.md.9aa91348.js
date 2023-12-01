import { _ as e, o as a, c as i, e as t } from './app.111d27d4.js';
const b = JSON.parse(
    '{"title":"为什么要自己写一个 ui 库？","description":"","frontmatter":{},"headers":[{"level":3,"title":"第一个理由是：","slug":"第一个理由是","link":"#第一个理由是","children":[]},{"level":3,"title":"第二个理由是：","slug":"第二个理由是","link":"#第二个理由是","children":[]},{"level":3,"title":"第三个理由是：","slug":"第三个理由是","link":"#第三个理由是","children":[]}],"relativePath":"guide/start.md"}',
  ),
  r = { name: 'guide/start.md' },
  d = t(
    '<h1 id="为什么要自己写一个-ui-库" tabindex="-1">为什么要自己写一个 ui 库？ <a class="header-anchor" href="#为什么要自己写一个-ui-库" aria-hidden="true">#</a></h1><h3 id="第一个理由是" tabindex="-1">第一个理由是： <a class="header-anchor" href="#第一个理由是" aria-hidden="true">#</a></h3><p>在大部分情况下，传统 UI 库都是够用的，但是在一些特定情况下，可能需要多个 UI 库进行补充使用，比较麻烦。</p><p>而 bubu-ui 则是作为传统库的补充而创建。</p><p>我举个几个简单例子</p><ol><li><p>比如拖动布局的组件 Split，在 element-plus, antd-vue 等库中是没有这个组件的，但是有时候又需要用，可能需要找其他替代的三方库。</p></li><li><p>比如传统观念的 ui 库均没有图片预览组件，只有移动端的 ui 库才会有，而且在 pc 端查看效果并不好。（bubu-ui 封装了，且支持移动端）</p></li><li><p>传统的表单都偏向于后台管理，如需要一些炫酷点的表单效果也无法支持。（比如小米官网的表单效果）</p></li></ol><p>因此 bubu-ui 就是为了这些问题而存在的。</p><h3 id="第二个理由是" tabindex="-1">第二个理由是： <a class="header-anchor" href="#第二个理由是" aria-hidden="true">#</a></h3><p>工作中，总会有一些独特的设计，是频繁，跨项目使用的，比如 grid 布局，一些特定的卡片，一些特定的 title，一些特定的错误提示等，这些组件传统的 UI 库改造起来也比较麻烦，而且不容易复用，因此我也想把这些组件集成进来。</p><h3 id="第三个理由是" tabindex="-1">第三个理由是： <a class="header-anchor" href="#第三个理由是" aria-hidden="true">#</a></h3><p>维护一个 UI 库，对个人技术，以及对前端的理解是一个很有益的事情。</p><h1 id="项目更新" tabindex="-1">项目更新 <a class="header-anchor" href="#项目更新" aria-hidden="true">#</a></h1><p>bubu-ui 是个人维护的一个库，平时还要上班工作，所以维护更新可能比较慢。</p><p>如有 bug 可提 Issues。</p>',
    14,
  ),
  l = [d];
function n(s, h, u, p, c, o) {
  return a(), i('div', null, l);
}
const f = e(r, [['render', n]]);
export { b as __pageData, f as default };
