# 安装

```
npm install bubu-ui
// or
yarn add bubu-ui

```

# 全局引入

```
// main.ts
import { createApp } from 'vue'
import BuBuUI from 'bubu-ui'
import App from './App.vue'

const app = createApp(App)

app.use(BuBuUI)
app.mount('#app')

```

当然你也可以按需引入

# 按需引入

```
import { createApp } from 'vue';
import App from './app.vue';
import { BuButton } from '@bubu-ui/components';
const app = createApp(App);
app.use(BuButton);
app.mount('#app');

```

# 按需自动导入

**1. 安装 unplugin-vue-components**

**2. 在 vite.config.ts 中配置 components**

```
    Components({
      // 匹配需要自动导入的组件
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: true, // TypeScript 声明文件路径
      resolvers: [
        // 自定义组件的路径解析规则
        (componentName) => {
          if (componentName.startsWith("Bu")) {
            return {
              name: componentName,
              from: "bubu-ui",
            };
          }
        },
      ],
    }),
```

# Volar 支持

如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。

```json
{
  "compilerOptions": {
    // ...
    "types": ["bubu-ui/lib/packages/components/src/components"]
  }
}
```
