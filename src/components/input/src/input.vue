<template>
  <input :value="modelValue" @input="onInput" />
</template>
<script lang="ts">
export default {
  name: 'BuInput',
};
</script>
<script setup lang="ts">
import { useFormItem } from '../../../hooks/use-form-item';

const { formItem } = useFormItem();
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:model-value', value: string): void;
}>();

function onInput(e: Event) {
  const input = e.target as HTMLInputElement;
  emit('update:model-value', input.value);
  (formItem as any)?.validate?.();
}
</script>
<style lang="scss"></style>
