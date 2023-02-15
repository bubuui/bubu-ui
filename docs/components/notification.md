### 基础用法

:::demo

```vue
<template>
  <bu-button @click="open">open notification</bu-button>
</template>
<script lang="ts">
import { ref } from 'vue';
import { BuNotification } from 'bubu-ui';
export default defineComponent({
  setup() {
    const open = () => {
      BuNotification({
        title: '34234',
        message: 'hahah',
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
