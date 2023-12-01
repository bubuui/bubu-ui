<template>
  <transition
    name="bu-message-fade"
    @after-leave="$emit('destroy')"
    @before-leave="onClose"
  >
    <div
      v-show="visible"
      class="bu-message"
      :id="id"
      ref="messageRef"
      :class="[`bu-message--${type}`, showClose ? 'is-close' : '']"
      :style="{ top: offset + 'px', zIndex: 99 }"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <slot>
        <p v-if="dangerouslyUseHTMLString" class="bu-message--content">
          {{ message }}
        </p>
        <p v-else class="bu-message--content" v-html="message"></p>
      </slot>
      <BuIcon
        class="bu-message--close"
        v-if="showClose"
        name="close"
        :size="16"
      />
    </div>
  </transition>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { messageProps } from './message-type';
import { BuIcon } from '@bubu-ui/components/icon';
import { getLastOffset, getOffsetOrSpace } from './instance';
import { useResizeObserver, useTimeoutFn } from '@vueuse/core';

defineOptions({
  name: 'BuMessage'
});
const visible = ref(false);
const messageRef = ref<HTMLDivElement>();
const props = defineProps(messageProps);
defineEmits<{
  (e: 'destory'): boolean;
}>();
const height = ref(0);
let stopTimer: (() => void) | undefined = undefined;
const lastOffset = computed(() => getLastOffset(props.id));
const bottom = computed((): number => height.value + offset.value);
const offset = computed(() => {
  return getOffsetOrSpace(props.id, props.offset) + lastOffset.value;
});

function clearTimer() {
  stopTimer?.();
}

function startTimer() {
  if (props.duration === 0) return;
  ({ stop: stopTimer } = useTimeoutFn(() => {
    close();
  }, props.duration));
}

function close() {
  visible.value = false;
}

onMounted(() => {
  startTimer();
  visible.value = true;
});

useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect().height;
});

defineExpose({
  close,
  visible,
  bottom
});
</script>
