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
import { computed, provide, reactive, toRefs } from 'vue';
import type { formProps } from '../src/form.type';
const fields: any[] = [];
const prefix = 'bu-form';
const props = defineProps<formProps>();
const classes = computed(() => {
  let cl = [prefix, `${prefix}--${props.labelPosition || 'right'}`];
  console.log('cl', cl);
  return cl;
});

const emit = defineEmits<{
  (e: 'submit', event: Event): void;
}>();

const addField = (field: any) => {
  if (field) {
    fields.push(field);
  }
  console.log('field', field);
};
const buForm = reactive({
  ...toRefs(props),
  addField,
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

defineExpose({
  validate,
});
</script>
