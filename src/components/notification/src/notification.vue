<template>
  <div class="bu-nofication">
    <div class="bu-notification--title">
      {{ title }}
    </div>
    <div class="bu-notification__message">
      {{ message }}
    </div>
    <bu-button v-if="showClose" @click="onCloseHandler"></bu-button>
  </div>
</template>
<script setup lang="ts">
import { BuButton } from '@/components/button';
import { ref } from 'vue';

type PositionType = 'left' | 'right' | 'top' | 'bottom';
const { position = 'right' } = defineProps<{
  title?: string;
  message?: string;
  position?: PositionType;
}>();

const showClose = ref(false);
const onCloseHandler = () => {};
</script>
