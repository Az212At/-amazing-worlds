<script setup lang="ts">
import GalleryList from "@/components/GalleryList.vue";
import { ref } from "vue";

const galleryItems = ref([
  {
    id: 1,
    title: "Gallery Item 1",
    image: "/path/to/image1.jpg",
    description: "Description of gallery item 1",
  },
  {
    id: 2,
    title: "Gallery Item 2",
    image: "/path/to/image2.jpg",
    description: "Description of gallery item 2",
  },
  // Добавьте другие элементы по необходимости
]);
</script>

<template>
  <h1>Gallery Page</h1>
  <!-- Передаем массив элементов в GalleryList -->
  <GalleryList :items="galleryItems" />
</template>

<style scoped>
</style>
