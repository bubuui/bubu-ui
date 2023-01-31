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
import { computed } from "vue";
import type { TitleProps } from "./title-type";
const prefix = "bu-title";
const props = withDefaults(defineProps<TitleProps>(), {
  sub: false,
  border: false,
  type: "primary",
});

const classes = computed(() => {
  let cl = [prefix, `${prefix}--${props.type}`];
  if (props.sub) {
    cl.push(`${prefix}--sub`);
  }
  if (props.border) {
    cl.push(`${prefix}--border`);
  }
  return cl;
});
</script>
