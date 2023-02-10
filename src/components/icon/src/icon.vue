<template>
  <svg
    v-if="component"
    :class="[$attrs.class, 'icon']"
    :style="{ width: iconSize, height: iconSize }"
  >
    <use :xlinkHref="`icon-${component}`" :fill="color"></use>
  </svg>
  <template v-if="name">
    <img v-if="/http|https/.test(name)" :src="name" v-bind="$attrs" alt="" />
    <span
      v-else
      :class="['bu-icon', 'icon-' + name, $attrs.class]"
      :style="{
        fontSize: iconSize,
        color: color,
      }"
    ></span>
  </template>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  name: string;
  size: string | number;
  color: string;
  component: string;
}>();

const iconSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size
);
</script>
