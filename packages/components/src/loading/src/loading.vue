<template>
  <transition name="bu-loading-fade">
    <div
      class="bu-loading-mask"
      v-show="visible"
      :class="[customClass, fullscreen ? 'is-fullscreen' : '']"
      :style="{ backgroundColor: backgroundColor as string }"
    >
      <div class="bu-loading-spinner">
        <span v-if="$slots.spinner" class="bu-loading-svg bu-load-loop">
          <slot name="spinner"></slot>
        </span>
        <svg v-else aria-hidden="true" class="bu-loading-svg bu-load-loop">
          <use :xlink:href="`#icon-loading`" fill="#2d8cf0"></use>
        </svg>
        <div class="bu-loading-text">
          {{ text }}
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import type { Ref } from 'vue';
import type { MaybeRef } from '@vueuse/core';
defineProps<{
  backgroundColor: MaybeRef<string>;
  text: MaybeRef<string>;
  fullscreen: boolean;
  customClass: MaybeRef<string>;
  visible: Ref<boolean>;
}>();
</script>
