### form

### 基础用法

:::demo Form 基础用法

```vue
<template>
  <bu-form :model="form" :rules="rules" ref="formEl" label-position="left">
    <bu-form-item label="账号144534" prop="name">
      <bu-input type="text" v-model="form.name" />
    </bu-form-item>
    <bu-form-item label="密码" prop="password">
      <bu-input type="text" v-model="form.password" />
    </bu-form-item>
    <bu-button type="primary" @click="submit">submit</bu-button>
  </bu-form>
</template>
<script lang="ts">
import { reactive, defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const form = reactive({
      name: '234',
      password: '',
    });
    const formEl = ref();
    const rules = reactive({
      name: [
        {
          required: true,
          min: 4,
          max: 20,
          message: '长度在 1 到 20 个字符',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: false,
          min: 4,
          max: 20,
          message: '长度在 1 到 20 个字符',
          trigger: 'blur',
        },
      ],
    });
    const submit = () => {
      console.log('formEl.value', formEl.value);
      formEl.value.validate((isValid) => {
        console.log('isValid', isValid);
      });
    };
    return {
      form,
      rules,
      formEl,
      submit,
    };
  },
});
</script>
```

:::
