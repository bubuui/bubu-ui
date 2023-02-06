<template>
  <div :class="classes">
    <div :class="classesWrapper">
      <input
        :value="modelValue"
        class="bu-input__inner"
        @input="onInput"
        v-bind="$attrs"
        :disabled="disabled"
        @focus="handleFocus"
        @blur.stop="isFoucs = false"
      />
      {{ modelValue }}
      <span
        class="bu-input--clear"
        v-if="clearable && isFoucs && modelValue"
        @mousedown.prevent
        @click="clear"
      >
        X
      </span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BuInput',
};
</script>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useFormItem } from '../../../hooks/use-form-item';
const { formItem } = useFormItem();
const prefix = 'bu-input';
const props = defineProps<{
  modelValue?: string;
  disabled?: boolean;
  clearable?: boolean;
}>();

const classes = computed(() => {
  const cla = [prefix];
  if (props.disabled) {
    cla.push('is-disabled');
  }
  return cla;
});

const classesWrapper = computed(() => {
  const cls = [prefix + '__wrapper'];
  if (isFoucs.value && props.clearable) {
    cls.push('is-focus');
  }
  return cls;
});

const emit = defineEmits<{
  (e: 'update:model-value', value: string): void;
  (e: 'focus', value: FocusEvent): void;
}>();

const isFoucs = ref(false);

function onInput(e: Event) {
  const input = e.target as HTMLInputElement;
  emit('update:model-value', input.value);
  formItem && (formItem as any).validate();
}

const handleFocus = (event: FocusEvent) => {
  isFoucs.value = true;
  emit('focus', event);
};

const clear = () => {
  emit('update:model-value', '');
};
</script>
