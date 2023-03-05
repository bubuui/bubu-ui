<template>
  <div></div>
</template>
<script lang="ts">
export default {
  name: 'BuCheckbox',
};
</script>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:modelValue', newValue: boolean): void;
}>();
defineProps<{
  moldeValue: boolean;
}>();
</script>
<style scoped lang="scss"></style>
