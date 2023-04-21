<template>
  <svg
    v-if="component"
    :class="[$attrs.class, 'icon', 'icon-svg', type && `icon-${type}`]"
    :style="{ width: iconSize, height: iconSize }"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <use :xlink:href="`#icon-${component}`" :fill="color"></use>
  </svg>
  <template v-if="name">
    <img
      v-bind="$attrs"
      v-if="/http|https/.test(name)"
      :src="name"
      :alt="name"
    />
    <span
      v-else
      :class="['bu-icon', 'icon-' + name, type && `icon-${type}`, $attrs.class]"
      v-bind="$attrs"
      :style="{
        fontSize: iconSize,
        color: color,
      }"
    ></span>
  </template>
</template>

<script lang="ts">
export default {
  name: 'BuIcon',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  name: string;
  size?: string | number;
  color?: string;
  type?: 'primary' | 'success' | 'error' | 'info' | 'warning';
  component?: string;
}>();

const iconSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size
);
</script>
