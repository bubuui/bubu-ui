<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BuForm',
};
</script>
<script setup lang="ts">
import { computed } from 'vue';
import { formProps } from '../src/form.type';
const prefix = 'bu-form';
const classes = computed(() => {
  let cl = [prefix];
  return cl;
});
const props = defineProps(formProps);
</script>
<style lang="scss"></style>
