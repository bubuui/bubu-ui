# Button 组件

### 基础用法

<bu-button>default</bu-button>

```html
<bu-button>default</bu-button>
```

:::demo Button 基础用法

```vue
<template>
  <bu-button>default</bu-button>
  <bu-button type="primary">primary</bu-button>
  <bu-button type="success">success</bu-button>
  <bu-button type="warning">warning</bu-button>
  <bu-button type="error">error</bu-button>
  <bu-button type="info">info</bu-button>
  <bu-button type="link">link</bu-button>
</template>
```

:::

### 不同尺寸

:::demo Button 不同 size

```vue
<template>
  <bu-button type="primary" size="small">small</bu-button>
  <bu-button type="primary">defautl</bu-button>
  <bu-button type="primary" size="large">defautl</bu-button>
</template>
```

:::

### 不同形状

:::demo Button 不同 shape

```vue
<template>
  <bu-button type="primary" shape="circle">circle</bu-button>
  <bu-button type="primary" shape="circle-icon">I</bu-button>
  <bu-button type="primary" shape="circle" loading>loading</bu-button>
  <bu-button type="success" disabled>disabled</bu-button>
</template>
```

:::

### 长按钮

:::demo

```vue
<template>
  <bu-button type="success" block>block</bu-button>
</template>
```

:::
