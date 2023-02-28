<script lang="ts" setup>
import { BuNotification } from '@/index';
const open = () => {
  BuNotification({
    title: '34234',
    message: 'hahah',
    duration: 0,
  });
};
</script>

<template>
  <!-- <Acom msg="234"></Acom> -->
  <bu-space size="20px">
    <div>TEST1</div>
    <bu-button @click="open">TEST2</bu-button>
    <bu-button>TEST3</bu-button>
    <bu-button>TEST4</bu-button>
    <bu-icon name="search" size="18px" color="origin"></bu-icon>
  </bu-space>
  <!-- <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-success" fill="#013430"></use>
  </svg> -->
</template>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
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
