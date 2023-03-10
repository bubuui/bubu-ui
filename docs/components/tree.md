# Tree 组件

### 基础用法

:::demo

```vue
<template>
  <bu-tree :data="data"></bu-tree>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive([
      {
        label: 'test1',
        id: '12',
        children: [
          {
            label: 'test1-1',
            id: '12-1',
            children: [
              {
                label: 'test1-1-1',
                id: '12-1-1',
              },
            ],
          },
          {
            label: 'test1-2',
            id: '12-2',
          },
        ],
      },
      {
        label: 'test2',
        id: '13',
      },
    ]);
    return {
      data,
    };
  },
});
</script>
```

:::

### 多选

:::demo

```vue
<template>
  <bu-tree :data="data" checkable></bu-tree>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive([
      {
        label: 'test1',
        id: '12',
        children: [
          {
            label: 'test1-1',
            id: '12-1',
            children: [
              {
                label: 'test1-1-1',
                id: '12-1-1',
              },
            ],
          },
          {
            label: 'test1-2',
            id: '12-2',
          },
        ],
      },
      {
        label: 'test2',
        id: '13',
      },
    ]);
    return {
      data,
    };
  },
});
</script>
```

:::

### 辅助线

:::demo

```vue
<template>
  <bu-tree :data="data" lineable></bu-tree>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive([
      {
        label: 'test1',
        id: '12',
        children: [
          {
            label: 'test1-1',
            id: '12-1',
            children: [
              {
                label: 'test1-1-1',
                id: '12-1-1',
              },
            ],
          },
          {
            label: 'test1-2',
            id: '12-2',
          },
        ],
      },
      {
        label: 'test2',
        id: '13',
      },
    ]);
    return {
      data,
    };
  },
});
</script>
```

:::

### 拖拽

:::demo

```vue
<template>
  <bu-tree :data="data" :dragdrop="dragdrop"></bu-tree>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive([
      {
        label: 'test1',
        id: '12',
        children: [
          {
            label: 'test1-1',
            id: '12-1',
            children: [
              {
                label: 'test1-1-1',
                id: '12-1-1',
              },
              {
                label: 'test1-1-2',
                id: '12-1-2',
              },
            ],
          },
          {
            label: 'test1-2',
            id: '12-2',
          },
        ],
      },
      {
        label: 'test2',
        id: '13',
      },
    ]);
    const dragdrop = reactive({
      dropNext: true,
      dropPrev: true,
      dropInner: true,
    });
    return {
      data,
      dragdrop,
    };
  },
});
</script>
```

:::
