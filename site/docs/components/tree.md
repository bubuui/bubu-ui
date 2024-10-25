# Tree 组件

### 基础用法

:::demo

```vue
<template>
  <bu-tree :data="data"></bu-tree>
</template>

<script>
import { reactive, defineComponent } from 'vue';
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

