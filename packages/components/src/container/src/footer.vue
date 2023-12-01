<template>
  <footer class="bu-footer" :style="{ height }">
    <slot />
  </footer>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue';

defineOptions({
  name: 'BuFooter'
});
type Props = {
  height?: string;
};
withDefaults(defineProps<Props>(), {
  height: '60px'
});
</script>
