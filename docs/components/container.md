# Container 组件

### 基础用法

:::demo

```vue
<template>
  <div class="common-layout">
    <bu-container>
      <bu-header>Header</bu-header>
      <bu-main>Main</bu-main>
    </bu-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <bu-container>
      <bu-header>Header</bu-header>
      <bu-main>Main</bu-main>
      <bu-footer>footer</bu-footer>
    </bu-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <bu-container>
      <bu-aside>aside</bu-aside>
      <bu-main>Main</bu-main>
    </bu-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <bu-container>
      <bu-header>Header</bu-header>
      <bu-container>
        <bu-aside>aside</bu-aside>
        <bu-main>Main</bu-main>
      </bu-container>
    </bu-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <bu-container>
      <bu-header>Header</bu-header>
      <bu-container>
        <bu-aside width="200px">Aside</bu-aside>
        <bu-container>
          <bu-main>Main</bu-main>
          <bu-footer>Footer</bu-footer>
        </bu-container>
      </bu-container>
    </bu-container>
  </div>
</template>
```

:::
