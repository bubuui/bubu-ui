<template>
  <div :class="classes">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="error">
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'buFormItem',
};
</script>

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
} from 'vue';

type Props = {
  label?: string;
  prop?: string;
};

const buForm = inject('buFormKey', {} as any);

const props = withDefaults(defineProps<Props>(), {
  label: '',
  prop: '',
});
// 错误
const error = ref('');

const prefix = 'bu-form-item';
const classes = computed(() => {
  let cl = [prefix];
  return cl;
});

const buFormItem = reactive({
  ...toRefs(props),
  validate,
});

provide('buFormItem', buFormItem);

function validate() {
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
}

onMounted(() => {
  if (props.prop) {
    buForm && buForm.addField(buFormItem);
  }
});
</script>
<style lang="scss"></style>
