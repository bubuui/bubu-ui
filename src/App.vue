<script setup lang="ts">
import { ref } from 'vue';
const handleClick = () => {
  console.log('click');
};
const input = ref('');
</script>

<template>
  <main>hello word</main>
  <bu-title>nihao</bu-title>
  <bu-input placeholder="Please input" v-model="input" />
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
