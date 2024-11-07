<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },

  image: {
    type: String,
    default: "",
  },

  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="gallery-item">
    <img :src="props.image" :alt="props.title" />
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<style scoped>
.gallery-item {
  text-align: center;
}
.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
