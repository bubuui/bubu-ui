<template>
  <aside class="bu-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue';
defineOptions({
  name: 'BuAside'
});
type PropValues = {
  width: string;
};
withDefaults(defineProps<PropValues>(), {
  width: '300px'
});
</script>
