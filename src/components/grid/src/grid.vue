<template>
  <div class="bu-grid" :style="style">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BuGrid',
};
</script>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  cols: number;
  xGap?: number;
  yGap?: number;
}>();

const style = computed(() => {
  return {
    'grid-template-columns': `repeat(${props.cols}, minmax(0px, 1fr))`,
    gap: `${props.yGap || 15}px ${props.xGap || 15}px`,
  };
});
</script>
<style lang="scss">
.bu-grid {
  width: 100%;
  display: grid;
}
</style>
