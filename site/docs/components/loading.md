### 基本用法

:::demo

```vue
<template>
  <div v-loading="loading" bu-loading-text="哈哈">
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import { ref, reactive, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const loading = ref(true);
    const list = reactive(Array.from({ length: 10 }, (x, i) => i));
    return {
      loading,
      list,
    };
  },
});
</script>
```

:::

### 铺满

:::demo

```vue
<template>
  <bu-button
    type="primary"
    v-loading.fullscreen.lock="fullscreenLoading"
    @click="openFullScreen1"
    >指令方式</bu-button
  >
  <bu-button type="primary" @click="openFullScreen2">service方式</bu-button>
</template>
<script>
import { ref, defineComponent } from 'vue';
import { BuLoading } from 'bubu-ui';
export default defineComponent({
  setup() {
    const fullscreenLoading = ref(false);
    const openFullScreen1 = () => {
      fullscreenLoading.value = true;
      setTimeout(() => {
        fullscreenLoading.value = false;
      }, 2000);
    };

    const openFullScreen2 = () => {
      const loading = BuLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    };
    return {
      fullscreenLoading,
      openFullScreen1,
      openFullScreen2,
    };
  },
});
</script>
```

:::

### 自定义图标

:::demo

```vue
<template>
  <div v-loading="loading" bu-loading-text="哈哈" bu-loading-spinner="search">
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import { ref, reactive, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const loading = ref(true);
    const list = reactive(Array.from({ length: 10 }, (x, i) => i));
    return {
      loading,
      list,
    };
  },
});
</script>
```

:::
