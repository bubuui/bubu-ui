<template>
  <div class="bu-split" ref="outerWrapper">
    <div v-if="mode === 'horizontal'" class="bu-split--horizontal">
      <div
        class="bu-split-left-pane"
        :style="{ right: `${anotherOffset}%` }"
        :class="paneClasses"
      >
        <slot name="left"></slot>
      </div>
      <div
        class="bu-split-trigger"
        @mousedown="handleMousedown"
        :style="{ left: `${offset}%` }"
      ></div>
      <div
        class="bu-split-right-pane"
        :style="{ left: `${offset}%` }"
        :class="paneClasses"
      >
        <slot name="right"></slot>
      </div>
    </div>
    <div v-else class="bu-split--vertical">
      <div
        class="bu-split-top-pane"
        :style="{ bottom: `${anotherOffset}%` }"
        :class="paneClasses"
      >
        <slot name="top"></slot>
      </div>
      <div
        class="bu-split-trigger bu-split-trigger--vertical"
        @mousedown="handleMousedown"
        :style="{ top: `${offset}%` }"
      ></div>
      <div
        class="bu-split-bottom-pane"
        :style="{ top: `${offset}%` }"
        :class="paneClasses"
      >
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BuSplit'
};
</script>
<script setup lang="ts">
import { isString } from '@vue/shared';
import { on, off } from '@bubu-ui/utils';
import {
  computed,
  ref,
  nextTick,
  watch,
  onMounted,
  onBeforeUnmount
} from 'vue';
const props = withDefaults(
  defineProps<{
    modelValue?: number | string;
    mode?: 'horizontal' | 'vertical';
    min?: string | number;
    max?: string | number;
  }>(),
  {
    modelValue: 0.5,
    mode: 'horizontal',
    min: '40px',
    max: '40px'
  }
);
const emit = defineEmits<{
  (e: 'update:model-value', value: string | number): void;
  (e: 'mousemove', value: Event): void;
}>();

const outerWrapper = ref<HTMLDivElement>();
const offset = ref<number>(0);
const initOffset = ref(0);
const computedMin = ref(0);
const computedMax = ref(0);
const isMoving = ref(false);
const oldOffset = ref<string | number>();

const offsetSize = computed(() =>
  props.mode === 'horizontal' ? 'offsetWidth' : 'offsetHeight'
);
const anotherOffset = computed(() => 100 - offset.value);

const paneClasses = computed(() => ({
  'bu-split-pane-moving': isMoving.value
}));
watch(
  () => props.modelValue,
  () => {
    computeOffset();
  },
  {
    immediate: true
  }
);

onMounted(() => {
  on(window, 'resize', computeOffset);
});

onBeforeUnmount(() => {
  off(window, 'resize', computeOffset);
});

// 百分比
const px2percent = (numerator: string | number, denominator: number): number =>
  parseFloat(String(numerator)) / denominator;

function handleMousedown(e: MouseEvent) {
  initOffset.value = props.mode === 'horizontal' ? e.pageX : e.pageY;
  oldOffset.value = props.modelValue;
  isMoving.value = true;
  on(document, 'mousemove', handleMove);
  on(document, 'mouseup', handleUp);
}

// 计算坐标
function computeOffset() {
  nextTick(() => {
    // 设置最大值最小值
    computedMin.value = getComputedThresholdValue('min') as number;
    computedMax.value = getComputedThresholdValue('max') as number;
    offset.value =
      (isString(props.modelValue)
        ? px2percent(
            props.modelValue,
            (outerWrapper.value as HTMLDivElement)[offsetSize.value]
          )
        : props.modelValue) * 100;
  });
}

// 计算最大值，最小值，值可以传字符串，或者是0.4这种
function getComputedThresholdValue(type: 'min' | 'max') {
  let w = outerWrapper.value![offsetSize.value];
  if (isString(props.modelValue)) {
    return isString(props[type]) ? props[type] : w * Number(props[type]);
  } else {
    return isString(props[type]) ? px2percent(props[type], w) : props[type];
  }
}

function handleMove(e: Event): void {
  const ev = e as MouseEvent;
  let pageOffset = props.mode === 'horizontal' ? ev.pageX : ev.pageY;
  let offset = pageOffset - initOffset.value;
  let outerWidth = outerWrapper.value![offsetSize.value];
  let value = isString(oldOffset.value)
    ? `${parseFloat(oldOffset.value) + offset}px`
    : px2percent(
        (outerWidth * oldOffset.value! + offset).toString(),
        outerWidth
      );
  let anotherValue = getAnotherOffset(value);
  if (parseFloat(value as string) <= computedMin.value)
    value = getMax(value, computedMin.value);
  if (parseFloat(anotherValue as string) <= computedMax.value)
    value = getAnotherOffset(getMax(anotherValue, computedMax.value));

  emit('update:model-value', value);
  emit('mousemove', e);
}

function handleUp() {
  isMoving.value = false;
  off(document, 'mousemove', handleMove);
  off(document, 'mouseup', handleUp);
}

function getAnotherOffset<T>(value: T) {
  let res: string | number = 0;
  if (isString(value))
    res = `${outerWrapper.value![offsetSize.value] - parseFloat(value)}px`;
  else {
    res = 1 - Number(value);
  }
  return res;
}

function getMax(value1: string | number, value2: number) {
  if (isString(value1)) {
    return `${Math.max(parseFloat(value1), value2)}px`;
  } else {
    return Math.max(value1, value2);
  }
}
</script>
