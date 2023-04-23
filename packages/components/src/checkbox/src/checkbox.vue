<template>
  <label
    :class="['bu-checkbox', modelValue ? 'checked' : '']"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span
      :class="[
        'bu-checkbox--input',
        modelValue || indeterminate ? 'checked' : ''
      ]"
    >
      <BuIcon v-if="modelValue" name="checkbox-select" size="18px" />
      <template v-else>
        <BuIcon
          name="checkbox-indeterminate"
          v-if="indeterminate"
          size="18px"
        />
        <BuIcon v-else name="checkbox" size="18px" />
      </template>
    </span>
    <span class="bu-checkbox--label">
      {{ label }}
    </span>
  </label>
</template>
<script lang="ts">
export default {
  name: 'BuCheckbox'
};
</script>
<script setup lang="ts">
import { BuIcon } from '../../icon';
import type { Fragment } from 'vue';
import '../style/checkbox.scss';
const emit = defineEmits<{
  (e: 'update:modelValue', newValue: boolean): void;
}>();
withDefaults(
  defineProps<{
    modelValue?: boolean;
    label?: string;
    indeterminate?: boolean;
  }>(),
  {
    indeterminate: false
  }
);
</script>
