<template>
  <div :class="classes">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="error">
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'buFormItem',
};
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';

type Props = {
  label?: string;
  prop?: string;
};

const props = withDefaults(defineProps<Props>(), {
  label: '',
  prop: '',
});
// 错误
const error = ref('');

const prefix = 'bu-form-item';
const classes = computed(() => {
  let cl = [prefix];
  return cl;
});
</script>
<style lang="scss"></style>
