<template>
  <svg
    v-if="component"
    :class="[$attrs.class, 'icon']"
    :style="{ width: iconSize, height: iconSize }"
    v-bind="$attrs"
  >
    <use :xlinkHref="`icon-${component}`" :fill="color"></use>
  </svg>
  <template v-if="name">
    <img v-bind="$attrs" v-if="/http|https/.test(name)" :src="name" alt="" />
    <span
      v-else
      :class="['bu-icon', 'icon-' + name, $attrs.class]"
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
  component?: string;
}>();

const iconSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size
);
</script>
