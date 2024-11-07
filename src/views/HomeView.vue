<script setup lang="ts">
import HomeBanner from "@/components/HomeBanner.vue";
import GalleryList from "@/components/GalleryList.vue";
import { ref } from "vue";

interface GalleryItemData {
  id: number;
  title: string;
  image: string;
  description: string;
}

const galleryItems = ref<GalleryItemData[]>([
  {
    id: 1,
    title: "Item 1",
    image: "/path/to/image1.jpg",
    description: "Description of item 1",
  },
  {
    id: 2,
    title: "Item 2",
    image: "/path/to/image2.jpg",
    description: "Description of item 2",
  },
]);
</script>

<template>
  <HomeBanner />
  <GalleryList :items="galleryItems" />
</template>

<style scoped>
</style>
