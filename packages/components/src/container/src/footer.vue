<template>
  <footer class="bu-footer" :style="{ height }">
    <slot />
  </footer>
</template>
<script lang="ts">
export default {
  name: 'BuFooter',
};
</script>
<script setup lang="ts">
import { withDefaults } from 'vue';

type Props = {
  height?: string;
};
withDefaults(defineProps<Props>(), {
  height: '60px',
});
</script>
