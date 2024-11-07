<script setup>
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: false,
  },
});
</script>

<template>
  <button @click="onClick">{{ label }}</button>
</template>

<style scoped>
button {
  padding: 8px 16px;
  font-size: 1em;
  cursor: pointer;
}
</style>
