<template>
  <div class="bu-grid--item" :style="style">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BuGridItem',
};
</script>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  offset?: number;
  span?: number;
}>();

const style = computed(() => {
  console.log('111', props);
  return {
    'grid-column': `${props.offset || 0} / span${props.span || 1}`,
  };
});
</script>
