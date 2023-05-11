<template>
  <div
    :class="[
      prefix,
      disabled ? 'is-disabled' : '',
      $attrs.class,
      $slots.prepend || $slots.append ? `${prefix}-group` : '',
      $slots.prepend ? `${prefix}-group--prepend` : '',
      $slots.append ? `${prefix}-group--append` : ''
    ]"
  >
    <div v-if="$slots.prepend" class="group--prepend">
      <slot name="prepend" />
    </div>
    <div
      :class="[prefix + '--wrapper', isFoucs && clearable ? 'is-focus' : '']"
    >
      <span class="bu-input--prefix" v-if="$slots.prefix || prefixIcon">
        <span class="bu-input--prefix-inner">
          <slot name="prefix"></slot>
          <bu-icon v-if="prefixIcon" size="20" :name="prefixIcon"> </bu-icon>
        </span>
      </span>
      <input
        :value="modelValue"
        :class="[`${prefix}--${size || 'default'}`, 'bu-input--inner']"
        @input="onInput"
        v-bind="attrs"
        :disabled="disabled"
        @focus="handleFocus"
        @blur.stop="isFoucs = false"
      />
      <span class="bu-input--suffix" v-if="$slots.suffix || suffixIcon">
        <span class="bu-input--suffix-inner">
          <slot name="suffix"></slot>
          <bu-icon v-if="suffixIcon" size="20" :name="suffixIcon"> </bu-icon>
        </span>
      </span>
      <span
        class="bu-input--suffix bu-input--clear"
        v-if="clearable && isFoucs && modelValue"
        @mousedown.prevent
        @click="clear"
      >
        <span class="bu-input--suffix-inner">
          <bu-icon size="20" name="close"> </bu-icon>
        </span>
      </span>
    </div>
    <!-- append slot -->
    <div v-if="$slots.append" class="group--append">
      <slot name="append" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BuInput'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import { useFormItem } from '@bubu-ui/hook';
import { useAttrs } from '@bubu-ui/hook';
import { BuIcon } from '@bubu-ui/components/icon';
const { formItem } = useFormItem();
const prefix = 'bu-input';
type IInputSize = 'small' | 'large';
defineProps<{
  modelValue?: string;
  disabled?: boolean;
  clearable?: boolean;
  size?: IInputSize;
  prefixIcon?: string;
  suffixIcon?: string;
}>();

const emit = defineEmits<{
  (e: 'update:model-value', value: string): void;
  (e: 'focus', value: FocusEvent): void;
}>();

const attrs = useAttrs();

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
