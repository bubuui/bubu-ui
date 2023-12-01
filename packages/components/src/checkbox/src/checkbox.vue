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
<script setup lang="ts">
import { BuIcon } from '@bubu-ui/components/icon';
defineOptions({
  name: 'BuCheckbox'
});
defineEmits<{
  (e: 'update:modelValue', newValue: boolean): void;
  (e: 'click'): void;
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
