# Checkbox 组件

### 基础用法

:::demo checkbox 基础用法

```vue
<template>
  <bu-checkbox v-model="val" label="A"></bu-checkbox>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const val = ref(false);
    return {
      val,
    };
  },
});
</script>
```

:::
