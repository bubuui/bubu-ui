<template>
  <div>
    {{ $attrs }}
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
console.log("$attrs");
</script>
