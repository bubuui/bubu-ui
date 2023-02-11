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
import type { formProps } from '../src/form.type';
const fields: any[] = [];
const prefix = 'bu-form';
const props = defineProps<formProps>();
const classes = computed(() => {
  let cl = [prefix, `${prefix}--${props.labelPosition || 'right'}`];
  return cl;
});

const emit = defineEmits<{
  (e: 'submit', event: Event): void;
}>();

const addField = (field: any) => {
  if (field) {
    fields.push(field);
  }
};

const autoLabelWidth = ref(0);

const getMaxLabelWidth = (el: HTMLDivElement) => {
  const width = window.getComputedStyle(el.firstElementChild!).width;
  const w = Math.ceil(Number.parseFloat(width)) + 2;
  if (w > autoLabelWidth.value) {
    autoLabelWidth.value = w;
  }
  console.log(w, Number.parseFloat(width), Math.ceil(Number.parseFloat(width)));
};

const buForm = reactive({
  ...toRefs(props),
  addField,
  getMaxLabelWidth,
  autoLabelWidth,
});

provide('buFormKey', buForm);

function validate(cb: any) {
  console.log('tasks', fields);
  const tasks = fields.map((item) => item.validate());
  console.log('tasks after', tasks);
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

function validateField(
  props: string[] | string,
  callback: (errorMessage: string) => void
) {
  // if(typeof props === 'string') {
  //   fields.find(item)
  // }
}

defineExpose({
  validate,
});
</script>
