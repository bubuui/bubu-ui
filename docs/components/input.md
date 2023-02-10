### input 基本用法

:::demo

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

### input 尺寸

:::demo

```vue
<template>
  <bu-input class="m-b-10" size="small" placeholder="Please input" />
  <bu-input class="m-b-10" placeholder="Please input" />
  <bu-input class="m-b-10" size="large" placeholder="Please input" />
</template>
```

:::

### input disbaled 禁用

:::demo

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

### Input 可清空

:::demo

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

### Input 带图标

:::demo

```vue
<template>
  <bu-input
    class="m-b-10"
    placeholder="Please input"
    clearable
    v-model="input"
    prefixIcon="search"
  ></bu-input>

  <bu-input class="m-b-10" placeholder="Please input" v-model="input">
    <template #suffix>
      <bu-icon name="search" size="20"></bu-icon>
    </template>
  </bu-input>

  <bu-input class="m-b-10" placeholder="Please input">
    <template #prepend>
      <bu-icon name="search" size="20"></bu-icon>
    </template>
  </bu-input>

  <bu-input class="m-b-10" placeholder="Please input">
    <template #append>
      <bu-icon name="search" size="20"></bu-icon>
    </template>
  </bu-input>
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
