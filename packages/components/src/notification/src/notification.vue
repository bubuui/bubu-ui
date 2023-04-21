<template>
  <transition
    name="bu-notification-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="id"
      :class="['bu-notification', horizontalClass]"
      :style="positionStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <bu-icon
        :name="type"
        size="24px"
        :class="['notification-title-icon', type]"
        v-if="type"
      ></bu-icon>
      <div class="bu-notification--group">
        <div class="bu-notification--title">
          {{ title }}
        </div>
        <div class="bu-notification--content">
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <p v-else v-html="message" />
          </slot>
        </div>
        <bu-icon
          @click="close"
          class="bu-notification--close"
          name="close"
          size="18px"
        ></bu-icon>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { BuIcon } from '../../icon';
import {
  ref,
  computed,
  type CSSProperties,
  defineComponent,
  onMounted,
} from 'vue';
import {
  type NotificationProps,
  notificationProps,
  notificationEmits,
} from './notification';
import { useTimeoutFn } from '@vueuse/core';
export default defineComponent({
  name: 'BuNofication',
  emits: notificationEmits,
  props: notificationProps,
  components: {
    BuIcon,
  },
  setup(props: NotificationProps) {
    const visible = ref(false);
    let timer: (() => void) | undefined = undefined;

    const horizontalClass = computed(() =>
      props.position.endsWith('right') ? 'right' : 'left'
    );

    const verticalProperty = computed(() =>
      props.position.startsWith('top') ? 'top' : 'bottom'
    );

    const positionStyle = computed<CSSProperties>(() => {
      return {
        [verticalProperty.value]: `${props.offset}px`,
        zIndex: props.zIndex,
      };
    });

    const close = () => {
      console.log('en');
      visible.value = false;
    };

    const startTimer = () => {
      if (props.duration > 0) {
        ({ stop: timer } = useTimeoutFn(() => {
          if (visible.value) close();
        }, props.duration));
      }
    };

    const clearTimer = () => {
      timer?.();
    };

    onMounted(() => {
      startTimer();
      visible.value = true;
    });

    return {
      visible,
      horizontalClass,
      positionStyle,

      close,
      startTimer,
      clearTimer,
    };
  },
});
</script>
