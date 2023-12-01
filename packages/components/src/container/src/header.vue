<template>
  <header class="bu-header" :style="{ height }">
    <slot />
  </header>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue';

defineOptions({
  name: 'BuHeader'
});

type Props = {
  height?: string;
};
withDefaults(defineProps<Props>(), {
  height: '60px'
});
</script>
