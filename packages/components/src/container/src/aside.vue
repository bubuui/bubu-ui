<template>
  <aside class="bu-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
export default {
  name: 'BuAside',
};
</script>
<script setup lang="ts">
import { withDefaults } from 'vue';
type PropValues = {
  width: string;
};
withDefaults(defineProps<PropValues>(), {
  width: '300px',
});
</script>
