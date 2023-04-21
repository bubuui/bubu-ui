### 基础用法

支持字体图标使用方式，以及 svg 使用方式。（svg 的可扩展性会比较高,摘抄自阿里图标库）

```
支持多色图标了，不再受单色限制。
通过一些技巧，支持像字体那样，通过 font-size,color 来调整样式。
兼容性较差，支持 ie9+,及现代浏览器。
浏览器渲染 svg 的性能一般，还不如 png。
```

:::demo

```vue
<template>
  <bu-space>
    <bu-icon name="search"></bu-icon>
    <bu-icon name="search" type="primary"></bu-icon>
    <bu-icon component="success" type="primary"></bu-icon>
  </bu-space>
</template>
```

:::

支持 url，内部会使用 img 渲染，width 等属性会透传给 img
:::demo

```vue
<template>
  <bu-space>
    <bu-icon name="https://vitejs.dev/logo.svg" width="20"></bu-icon>
  </bu-space>
</template>
```

:::

### 进阶用法

颜色可通过 color 自定义，但是绝大多时候，我们只需要跟主题颜色一致即可，所以额外提供了 type 属性

:::demo

```vue
<template>
  <bu-space>
    <bu-icon name="search" type="primary"></bu-icon>
    <bu-icon name="search" color="red"></bu-icon>
    <bu-icon name="search" color="red" size="30px"></bu-icon>
  </bu-space>
</template>
```

:::

### 所有图标

颜色可通过 color 自定义，但是绝大多时候，我们只需要跟主题颜色一致即可，所以额外提供了 type 属性

:::demo

<bu-icon name="search"></bu-icon>
<bu-icon name="success"></bu-icon>

:::
