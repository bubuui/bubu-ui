<template>
  <slot></slot>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { popperProps } from './popper-type';
defineOptions({
  name: 'BuPopper'
});

const props = defineProps(popperProps);
const role = computed(() => props.role);
</script>
<style lang="scss"></style>
