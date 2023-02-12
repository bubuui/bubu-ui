<template>
  <form :class="classes" @submit="submit">
    <slot></slot>
  </form>
</template>
<script lang="ts">
export default {
  name: 'BuForm',
};
</script>
<script setup lang="ts">
import { computed, provide, reactive, toRefs, ref } from 'vue';
import type { FormItemContext, FormProps } from '../src/form.type';
const prefix = 'bu-form';
const props = defineProps<FormProps>();
const fields: FormItemContext[] = [];
const autoLabelWidth = ref(0);

const classes = computed(() => {
  let cl = [prefix, `${prefix}--${props.labelPosition || 'right'}`];
  return cl;
});

const emit = defineEmits<{
  (e: 'submit', event: Event): void;
}>();

const addField = (field: FormItemContext) => {
  if (field) {
    fields.push(field);
    console.log('field.$label', field.$label);
    if (field.$label && !props.labelWidth) {
      getMaxLabelWidth(field.$label);
    }
  }
};

const getMaxLabelWidth = (el: HTMLDivElement) => {
  const width = window.getComputedStyle(el.firstElementChild!).width;
  const w = Math.ceil(Number.parseFloat(width)) + 2;
  if (w > autoLabelWidth.value) {
    autoLabelWidth.value = w;
  }
  console.log(w, Number.parseFloat(width), Math.ceil(Number.parseFloat(width)));
};

function validate(cb: (result: boolean) => void) {
  const tasks = fields.map((item) => item.validate());
  Promise.all(tasks)
    .then(() => {
      cb(true);
    })
    .catch(() => {
      cb(false);
    });
}

function submit(event: Event) {
  event.preventDefault();
  emit('submit', event);
}

const buForm = reactive({
  ...toRefs(props),
  addField,
  autoLabelWidth,
});

provide('buFormKey', buForm);

defineExpose({
  validate,
});
</script>
