import { _ as s, o as n, c as a, e as p } from './app.337dcb16.js';
const y = JSON.parse(
    '{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quickStart.md"}',
  ),
  l = { name: 'guide/quickStart.md' },
  e = p(
    `<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install bubu-ui</span></span>
<span class="line"><span style="color:#A6ACCD;">// or</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add bubu-ui</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="全局引入" tabindex="-1">全局引入 <a class="header-anchor" href="#全局引入" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import BuBuUI from &#39;bubu-ui&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(BuBuUI)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>当然你也可以按需引入</p><h1 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./app.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { BuButton } from &#39;@bubu-ui/components&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App);</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(BuButton);</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="按需自动导入" tabindex="-1">按需自动导入 <a class="header-anchor" href="#按需自动导入" aria-hidden="true">#</a></h1><p><strong>1. 安装 unplugin-vue-components</strong></p><p><strong>2. 在 vite.config.ts 中配置 components</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    Components({</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 匹配需要自动导入的组件</span></span>
<span class="line"><span style="color:#A6ACCD;">      include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],</span></span>
<span class="line"><span style="color:#A6ACCD;">      dts: true, // TypeScript 声明文件路径</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolvers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 自定义组件的路径解析规则</span></span>
<span class="line"><span style="color:#A6ACCD;">        (componentName) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (componentName.startsWith(&quot;Bu&quot;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return {</span></span>
<span class="line"><span style="color:#A6ACCD;">              name: componentName,</span></span>
<span class="line"><span style="color:#A6ACCD;">              from: &quot;bubu-ui&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            };</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,
    11,
  ),
  o = [e];
function t(c, r, i, A, C, u) {
  return n(), a('div', null, o);
}
const D = s(l, [['render', t]]);
export { y as __pageData, D as default };
