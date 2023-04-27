<template>
  <div :class="classes">
    <div class="bu-title-content">
      <slot></slot>
      <slot name="left"></slot>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BuTitle'
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import type { TitleProps } from './title-type';
const prefix = 'bu-title';
// 这种写法，test中会报ts异常，类型不兼容
// https://github.com/vuejs/core/issues/4294
const { sub, border, type } = withDefaults(defineProps<TitleProps>(), {
  sub: false,
  border: false,
  type: 'primary'
});

// 实验特性，解构
// const {
//   sub = false,
//   border = false,
//   type = 'primary'
// } = defineProps<TitleProps>();

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
