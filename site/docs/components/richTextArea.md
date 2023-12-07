### RichTextArea 组件

:::demo

```vue
<template>
  <bu-rich-text-area
    copy
    v-model="val"
    placeholder="请输入"
    imgPrevie
    @imgUpload="upload"
    @change="change"
  ></bu-rich-text-area>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const val = ref('');
    const upload = (file: File) => {
      console.log('file', file);
    };
    const change = () => {
      console.log('change', val.value);
    };
    return {
      val,
      upload,
      change,
    };
  },
});
</script>
```

:::
