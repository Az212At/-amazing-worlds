<script setup lang="ts">
import HomeBanner from "@/components/HomeBanner.vue";
import GalleryList from "@/components/GalleryList.vue";
import { Component, ref } from "vue";
import agathis from "@/assets/images/agathis.png";

interface GalleryItemData {
  id: number;
  title: string;
  image: Component;
  description: string;
}

const galleryItems = ref<GalleryItemData[]>([
  {
    id: 1,
    title: "Item 1",
    image: agathis,
    description: "Description of item 1",
  },
  {
    id: 2,
    title: "Item 2",
    image: agathis,
    description: "Description of item 2",
  },
]);
</script>

<template>
  <HomeBanner />
  <GalleryList :items="galleryItems" />
</template>

<style scoped></style>
