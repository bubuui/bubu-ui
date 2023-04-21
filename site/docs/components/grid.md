### input 基本用法

:::demo

```vue
<template>
  <bu-grid :cols="4">
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
  </bu-grid>
</template>
<style>
.demo {
  background-color: #0080001f;
  height: 108px;
}
</style>
```

:::

### 偏移

根据元素个素动态计算，再研究研究
:::demo

```vue
<template>
  <bu-grid :cols="4">
    <bu-grid-item :offset="1"><div class="demo"></div></bu-grid-item>
    <bu-grid-item :offset="1"> <div class="demo"></div></bu-grid-item>
  </bu-grid>
</template>
<style>
.demo {
  background-color: #0080001f;
  height: 108px;
}
</style>
```

:::
