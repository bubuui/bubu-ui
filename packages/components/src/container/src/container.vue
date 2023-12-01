<template>
  <section class="bu-container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>
<script setup lang="ts">
import { useSlots, computed, type VNode, type Component } from 'vue';

defineOptions({
  name: 'BuContainer'
});
type PropsType = {
  direction?: string;
};
const props = defineProps<PropsType>();
const slots = useSlots();

const isVertical = computed(() => {
  if (slots && slots.default) {
    return slots.default().some((vn: VNode) => {
      const tag = (vn.type as Component).name;
      return tag === 'BuHeader' || tag === 'BuFooter';
    });
  } else {
    if (props.direction === 'vertical') {
      return true;
    } else {
      return false;
    }
  }
});
</script>
