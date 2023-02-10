# Title 组件

### 基础用法

:::demo Title 基础用法

```vue
<template>
  <bu-title border>title</bu-title>
  <bu-title>title</bu-title>
  <bu-title sub>sub</bu-title>
</template>
```

:::

### 插槽用法

:::demo Title 插槽

```vue
<template>
  <bu-title sub>
    title
    <template #left>
      <bu-icon name="question-circle" size="16"></bu-icon>
    </template>
    <template #right>
      <bu-button type="primary">save</bu-button>
    </template>
  </bu-title>
</template>
```
