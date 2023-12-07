<template>
  <div class="ysj-swipe-item" v-bind="$attrs">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  }
});
</script>
<style lang="css" scoped>
.ysj-swipe-item {
  height: 100%;
  width: 100%;
  min-height: 180px;
}
</style>
