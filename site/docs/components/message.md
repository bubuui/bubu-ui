### 基本用法

:::demo

```vue
<template>
    <bu-button @click="open">show message</button>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
import { BuMessage } from 'bubu-ui'
export default defineComponent({
  setup() {
    const open = () => {
      console.log('23', BuMessage)
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
