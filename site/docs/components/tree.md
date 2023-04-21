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

### 虚拟列表

:::demo

```vue
<template>
  <bu-tree
    :data="data"
    :dragdrop="dragdrop"
    :height="200"
    :itemHeight="40"
  ></bu-tree>
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
      {
        label: 'test3',
        id: '14',
      },
      {
        label: 'test4',
        id: '15',
      },
      {
        label: 'test5',
        id: '16',
      },
      {
        label: 'test6',
        id: '17',
      },
      {
        label: 'test7',
        id: '18',
      },
      {
        label: 'test8',
        id: '19',
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

### 懒加载

通过设置该节点 isLeaf 参数为 false, 组件回调 lazyLoad 方法实现节点懒加载。
:::demo 通过设置该节点 isLeaf 参数为 false, 组件回调 lazyLoad 方法实现节点懒加载。

```vue
<template>
  <bu-tree :data="data" @lazy-load="lazyLoad"></bu-tree>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 'node-1',
        label: 'node-1',
        children: [
          {
            id: 'node-1-1',
            label: 'node 1-1 - dynamic loading',
            isLeaf: false,
          },
          {
            id: 'node 1-2',
            label: 'node 1-2',
          },
        ],
      },
      {
        id: 'node-2',
        label: 'node 2 - dynamic loading',
        isLeaf: false,
      },
    ]);

    const lazyLoad = (node, callback) => {
      setTimeout(() => {
        const data = [
          {
            label: 'lazy node 1',
            expanded: true,
            children: [
              {
                id: 'lazy node 1-1',
                label: 'lazy node 1-1',
              },
              {
                id: 'lazy node 1-2',
                label: 'lazy node 1-2',
              },
            ],
          },
          {
            id: 'lazy node 2',
            label: 'lazy node 2',
          },
        ];
        callback({
          treeItems: data,
          node,
        });
      }, 1000);
    };

    return {
      data,
      lazyLoad,
    };
  },
});
</script>
```

:::
