<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
});

const emit = defineEmits(["click"]);
</script>

<template>
  <div class="gallery-item" @click="emit('click')">
    <h3>{{ props.title }}</h3>
    <img :src="props.image" :alt="props.title" />
  </div>
</template>

<style scoped>
.gallery-item {
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s;
}
.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.gallery-item:hover {
  transform: scale(1.05);
}
</style>
