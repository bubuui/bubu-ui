<template>
  <header class="bu-header" :style="{ height }">
    <slot />
  </header>
</template>
<script lang="ts">
export default {
  name: 'BuHeader',
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
