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
      console.log('243', BuNotification);
      BuNotification({
        title: '34234',
        message: 'hahah',
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
