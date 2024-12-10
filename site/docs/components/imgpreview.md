# 图片预览（支持移动端双指放大，缩小，移动）

:::demo

```vue
<template>
  <bu-button type="primary" @click="preview">预览图片</bu-button>
</template>
<script>
import { ref, defineComponent } from 'vue';
import { BuImgPreview } from '@bubu-ui/components'
export default defineComponent({
  setup() {
    const preview = () => {
      BuImgPreview({
        current: 1,
        maxZoom: 10,
        urls: [
          'https://imgcrm.nbdeli.com/100016551/xq.jpg',
          'https://sandbox.rsvp.ai/media/resources/738754654560858112',
          'https://img2.baidu.com/it/u=3990732507,3148015412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        ],
        fail: (e) => {
          console.log('e', e);
        },
      });
    };
    return {
      preview,
    };
  },
});
</script>
```
:::