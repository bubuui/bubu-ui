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
      name: {
        required: true,
        min: 4,
        max: 20,
        message: '长度在 1 到 20 个字符',
        trigger: 'blur',
      },
      password: {
        required: true,
        min: 4,
        max: 20,
        message: '长度在 1 到 20 个字符',
        trigger: 'blur',
      },
    });
    const submit = () => {
      console.log('formEl.value', formEl.value);
      // formEl.value.validate((isValid) => {
      //   console.log('isValid', isValid);
      // });
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

<template>
  <!-- <main>hello word</main>
  <bu-title>nihao</bu-title>
  <bu-input placeholder="Please input" v-model="input" /> -->
  <bu-form
    :model="form"
    :rules="rules"
    ref="formEl"
    label-position="left"
    label-width="120px"
  >
    <bu-form-item label="账号1231243" prop="name">
      <bu-input
        style="border: 1px solid #f0f0f0"
        type="text"
        v-model="form.name"
      />
    </bu-form-item>
    <bu-form-item label="密码" prop="password">
      <bu-input
        style="border: 1px solid #f0f0f0"
        type="text"
        v-model="form.password"
      />
    </bu-form-item>
    <button @click="submit">submit</button>
  </bu-form>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
