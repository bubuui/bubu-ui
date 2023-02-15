<template>
  <transition name="bu-notification-fade">
    <div :class="['bu-nofication', position || 'right']">
      <div class="bu-nofication--group">
        <div class="bu-notification--title">{{ title }}</div>
        <div class="bu-notification__message">
          {{ message }}
        </div>
        <bu-button v-if="showClose" @click="onCloseHandler"></bu-button>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
export default {
  name: 'BuNofication',
};
</script>

<script setup lang="ts">
import { BuButton } from '@/components/button';
import { ref } from 'vue';

type PositionType = 'left' | 'right' | 'top' | 'bottom';
defineProps<{
  title?: string;
  message?: string;
  position?: PositionType;
}>();

// top需要根据数量进行计算

const showClose = ref(false);
const onCloseHandler = () => {};
</script>
