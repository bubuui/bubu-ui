### Space 组件

:::demo

```vue
<template>
  <bu-space>
    <div>TEST1</div>
    <bu-button>TEST2</bu-button>
    <bu-button>TEST3</bu-button>
    <bu-button>TEST4</bu-button>
  </bu-space>
</template>
```

:::

### 垂直布局

使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制.
:::demo

```vue
<template>
  <bu-space direction="vertical">
    <div>TEST1</div>
    <bu-button>TEST2</bu-button>
    <bu-button>TEST3</bu-button>
    <bu-button>TEST4</bu-button>
  </bu-space>
</template>
```

:::

### 控制间距的大小

通过调整 size 的值来控制间距的大小
:::demo

```vue
<template>
  <bu-space size="30px">
    <div>TEST1</div>
    <bu-button>TEST2</bu-button>
    <bu-button>TEST3</bu-button>
    <bu-button>TEST4</bu-button>
  </bu-space>
</template>
```

:::

### 自动换行

设置 wrap
:::demo

```vue
<template>
  <bu-space wrap size="30px">
    <bu-button>TEST1</bu-button>
    <bu-button>TEST2</bu-button>
    <bu-button>TEST3</bu-button>
    <bu-button>TEST4</bu-button>
    <bu-button>TEST5</bu-button>
    <bu-button>TEST6</bu-button>
    <bu-button>TEST7</bu-button>
    <bu-button>TEST8</bu-button>
  </bu-space>
</template>
```

:::
