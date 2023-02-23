<template>
  <div class="bu-grid--item">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BuGridItem',
};
</script>
<script setup lang="ts">
defineProps<{
  offset?: number;
  span?: number;
}>();
</script>
