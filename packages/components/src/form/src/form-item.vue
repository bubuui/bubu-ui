<template>
  <div :class="classes">
    <div
      ref="formItemLabelRef"
      :style="{
        width: buForm.autoLabelWidth > 0 ? buForm.autoLabelWidth + 'px' : 'auto'
      }"
    >
      <label
        class="bu-form-item-label"
        :style="{
          width: labelWidth
        }"
        v-if="label"
        >{{ label }}</label
      >
      <slot name="label"></slot>
    </div>

    <div class="bu-form-item--content">
      <slot></slot>
      <div class="bu-form-item--error" v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Schema from 'async-validator';
import {
  computed,
  inject,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  nextTick
} from 'vue';
import type { FormItemContext } from './form.type';

defineOptions({
  name: 'BuFormItem'
});

type FormItemProps = {
  label?: string;
  prop?: string;
};

const prefix = 'bu-form-item';
const formItemLabelRef = ref<HTMLDivElement>();
const buForm = inject('buFormKey', {} as any);
const props = withDefaults(defineProps<FormItemProps>(), {
  label: '',
  prop: ''
});
// 错误
const error = ref('');

const isRequired = computed(() => {
  console.log('uForm?.rules.value', buForm.rules[props.prop]);
  return (
    buForm.rules[props.prop] &&
    buForm.rules[props.prop].some((rule: any) => rule.required)
  );
});

const classes = computed(() => {
  let cl = [
    prefix,
    error.value && `is-error`,
    isRequired.value && 'is-required'
  ];
  return cl;
});

const labelWidth = computed(() => {
  if (buForm.labelWidth) {
    return typeof buForm.labelWidth === 'string'
      ? buForm.labelWidth
      : buForm.labelWidth + 'px';
  } else {
    return 'auto';
  }
});

const validate: FormItemContext['validate'] = () => {
  if (buForm && buForm.rules === undefined) {
    return Promise.resolve({ result: true });
  }

  const rules = buForm.rules[props.prop];
  const value = buForm.model[props.prop];
  const schema = new Schema({ [props.prop]: rules });
  return schema.validate({ [props.prop]: value }, (errors) => {
    if (errors) {
      error.value = errors[0].message || '校验错误';
    } else {
      error.value = '';
    }
  });
};

const buFormItem = reactive({
  ...toRefs(props),
  validate,
  $label: formItemLabelRef
});

provide('buFormItem', buFormItem);

onMounted(() => {
  if (props.prop) {
    nextTick(() => {
      buForm && buForm.addField(buFormItem);
    });
  }
});
</script>
<style lang="scss"></style>
