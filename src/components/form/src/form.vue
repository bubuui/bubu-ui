<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BuForm',
};
</script>
<script setup lang="ts">
import { computed, provide, reactive, toRefs } from 'vue';
import { formProps } from '../src/form.type';
const fields: any[] = [];

const prefix = 'bu-form';
const classes = computed(() => {
  let cl = [prefix];
  return cl;
});
const props = defineProps(formProps);

console.log('props', props);

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

defineExpose({
  validate,
});
</script>
<style lang="scss"></style>
