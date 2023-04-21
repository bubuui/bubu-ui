### Split 组件

:::demo

```vue
<template>
  <div class="demo">
    <bu-split v-model="split">
      <template #left> Left Pane </template>
      <template #right> Right Pane </template>
    </bu-split>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const split = ref(0.5);
    return {
      split,
    };
  },
});
</script>
<style>
.demo {
  height: 200px;
}
</style>
```

:::

### Split 组件

:::demo

```vue
<template>
  <div class="demo">
    <bu-split v-model="split" mode="vertical">
      <template #top> Top pane </template>
      <template #bottom> Bottom Pane </template>
    </bu-split>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const split = ref(0.5);
    return {
      split,
    };
  },
});
</script>
<style>
.demo {
  height: 200px;
}
</style>
```

:::

### 组件嵌套

:::demo

```vue
<template>
  <div class="demo">
    <bu-split v-model="split" mode="vertical">
      <template #top>
        <bu-split v-model="split1">
          <template #left> Left Pane </template>
          <template #right> Right Pane </template>
        </bu-split>
      </template>
      <template #bottom> Bottom Pane </template>
    </bu-split>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const split = ref(0.5);
    const split1 = ref(0.5);
    return {
      split,
      split1,
    };
  },
});
</script>
<style>
.demo {
  height: 200px;
}
</style>
```

:::
