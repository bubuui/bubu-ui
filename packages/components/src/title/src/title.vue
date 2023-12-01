<template>
  <div :class="classes">
    <div class="bu-title-content">
      <slot></slot>
      <slot name="left"></slot>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const prefix = 'bu-title';

defineOptions({
  name: 'BuTitle'
});

type ITitleType = 'primary' | 'success' | 'warning' | 'error' | 'info';

interface TitleProps {
  sub?: boolean;
  border?: boolean;
  type?: ITitleType;
}

// 实验特性，解构
const {
  sub = false,
  border = false,
  type = 'primary'
} = defineProps<TitleProps>();

const classes = computed(() => {
  let cl = [prefix, `${prefix}--${type}`];
  if (sub) {
    cl.push(`${prefix}--sub`);
  }
  if (border) {
    cl.push(`${prefix}--border`);
  }
  return cl;
});
</script>
