<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  description: String,
  image: String,
});
</script>

<template>
  <div class="card">
    <img :src="image" alt="Card image" class="card-image" />
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 1rem;
}

.card-title {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

.card-description {
  margin: 0;
}
</style>
