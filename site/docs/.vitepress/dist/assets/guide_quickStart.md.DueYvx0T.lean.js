import{_ as a,h as n,aa as p,f as e}from"./chunks/framework.CIjg4aHk.js";const d=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quickStart.md","filePath":"guide/quickStart.md"}'),i={name:"guide/quickStart.md"};function t(l,s,o,c,r,u){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install bubu-ui</span></span>
<span class="line"><span>// or</span></span>
<span class="line"><span>yarn add bubu-ui</span></span></code></pre></div><h1 id="全局引入" tabindex="-1">全局引入 <a class="header-anchor" href="#全局引入" aria-label="Permalink to &quot;全局引入&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// main.ts</span></span>
<span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import BuBuUI from &#39;bubu-ui&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(BuBuUI)</span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre></div><p>当然你也可以按需引入</p><h1 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span>import App from &#39;./app.vue&#39;;</span></span>
<span class="line"><span>import { BuButton } from &#39;@bubu-ui/components&#39;;</span></span>
<span class="line"><span>const app = createApp(App);</span></span>
<span class="line"><span>app.use(BuButton);</span></span>
<span class="line"><span>app.mount(&#39;#app&#39;);</span></span></code></pre></div><h1 id="按需自动导入" tabindex="-1">按需自动导入 <a class="header-anchor" href="#按需自动导入" aria-label="Permalink to &quot;按需自动导入&quot;">​</a></h1><p><strong>1. 安装 unplugin-vue-components</strong></p><p><strong>2. 在 vite.config.ts 中配置 components</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    Components({</span></span>
<span class="line"><span>      // 匹配需要自动导入的组件</span></span>
<span class="line"><span>      include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],</span></span>
<span class="line"><span>      dts: true, // TypeScript 声明文件路径</span></span>
<span class="line"><span>      resolvers: [</span></span>
<span class="line"><span>        // 自定义组件的路径解析规则</span></span>
<span class="line"><span>        (componentName) =&gt; {</span></span>
<span class="line"><span>          if (componentName.startsWith(&quot;Bu&quot;)) {</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>              name: componentName,</span></span>
<span class="line"><span>              from: &quot;bubu-ui&quot;,</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    }),</span></span></code></pre></div><h1 id="volar-支持" tabindex="-1">Volar 支持 <a class="header-anchor" href="#volar-支持" aria-label="Permalink to &quot;Volar 支持&quot;">​</a></h1><p>如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bubu-ui/lib/packages/components/src/components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,14)]))}const k=a(i,[["render",t]]);export{d as __pageData,k as default};
