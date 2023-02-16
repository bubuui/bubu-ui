### 基础用法

当 duration 为 0 时，弹窗不会主动关闭
:::demo

```vue
<template>
  <bu-button @click="open()">open</bu-button>
  <bu-button @click="open(0)">open</bu-button>
</template>
<script lang="ts">
import { ref } from 'vue';
import { BuNotification } from 'bubu-ui';
export default defineComponent({
  setup() {
    const open = (time) => {
      BuNotification({
        title: '34234',
        message: 'hahah',
        duration: time,
      });
    };
    return {
      open,
    };
  },
});
</script>
```

:::

### 不同类型的通知

:::demo

```vue
<template>
  <bu-button @click="open('success')">suceess</bu-button>
  <bu-button @click="open('warning')">Warning</bu-button>
  <bu-button @click="open('info')">info</bu-button>
  <bu-button @click="open('error')">error</bu-button>
</template>
<script lang="ts">
import { ref } from 'vue';
import { BuNotification } from 'bubu-ui';
export default defineComponent({
  setup() {
    const open = (type) => {
      BuNotification({
        title: 'this is title',
        message: 'this is content',
        type,
      });
    };
    return {
      open,
    };
  },
});
</script>
```

:::

### 自定义消息位置

:::demo

```vue
<template>
  <bu-button @click="open('top-left')">top-left</bu-button>
  <bu-button @click="open('top-right')">top-right</bu-button>
  <bu-button @click="open('bottom-left')">bottom-left</bu-button>
  <bu-button @click="open('bottom-right')">error</bu-button>
</template>
<script lang="ts">
import { ref } from 'vue';
import { BuNotification } from 'bubu-ui';
export default defineComponent({
  setup() {
    const open = (position) => {
      BuNotification({
        title: 'this is title',
        message: 'this is content',
        position,
        duration: 0,
      });
    };
    return {
      open,
    };
  },
});
</script>
```

:::
