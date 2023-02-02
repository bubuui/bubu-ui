### form

### 基础用法

:::demo Form 基础用法

```vue
<template>
  <bu-form :form="form">
    <bu-form-item label="account">
      <input v-model="form.name" />
    </bu-form-item>
  </bu-form>
</template>
<script lang="ts">
import { reactive, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const form = reactive({
      name: '324',
    });
    return {
      form,
    };
  },
});
</script>
```

:::
