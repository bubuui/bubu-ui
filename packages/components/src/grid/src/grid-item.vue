<template>
  <div class="bu-grid--item">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  offset?: number;
  span?: number;
}>();

defineOptions({
  name: 'BuGridItem'
});
</script>
