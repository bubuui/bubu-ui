<template>
  <div>
    <bu-button @click="open()">open</bu-button>
    <bu-button @click="open(0)">open</bu-button>
  </div>
</template>
<script lang="ts" setup>
import { BuButton, BuNotification } from '../packages/components/index.ts';
// console.log('BuNotification', BuNotification);
const open = (time) => {
  BuNotification({
    title: '34234',
    message: 'hahah',
    duration: time
  });
};
</script>
