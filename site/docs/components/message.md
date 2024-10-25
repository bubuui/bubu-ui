### 基本用法

:::demo

```vue
<template>
    <bu-button @click="open">show message</bu-button>
</template>
<script>
import { ref, reactive, defineComponent } from 'vue';
import { BuMessage } from '@bubu-ui/components'
export default defineComponent({
  setup() {
    const open = () => {
        BuMessage({
          message: "nihaoya",
          // duration: 0
        })
    }

    return {
        open
    };
  },
});
</script>
```

:::
