# Checkbox 组件

### 基础用法

:::demo 

```vue
<template>
  <bu-checkbox v-model="val" copy label="A"></bu-checkbox>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const val = ref('12312');
    return {
      val,
    };
  },
});
</script>
```

:::
