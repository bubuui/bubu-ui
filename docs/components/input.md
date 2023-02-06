### input

:::demo Input 基本用法

```vue
<template>
  <bu-input placeholder="Please input" v-model="input" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default defineComponent({
  setup() {
    const input = ref('');
    return {
      input,
    };
  },
});
</script>
```

:::

:::demo Input disbaled

```vue
<template>
  <bu-input disabled placeholder="Please input" v-model="input" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default defineComponent({
  setup() {
    const input = ref('');
    return {
      input,
    };
  },
});
</script>
```

:::

:::

:::demo Input 可清空

```vue
<template>
  <bu-input placeholder="Please input" clearable v-model="input" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default defineComponent({
  setup() {
    const input = ref('');
    return {
      input,
    };
  },
});
</script>
```

:::
