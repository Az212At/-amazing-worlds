<script setup lang="ts">
import { Component, defineProps, PropType } from "vue";
import GalleryItem from "@/components/GalleryItem.vue";

defineProps({
  items: {
    type: Array as PropType<GalleryItemData[]>,
    default: () => [],
  },
});

defineOptions({
  name: "GalleryList",
});

interface GalleryItemData {
  id: number;
  title: string;
  image: Component;
  description: string;
}
</script>

<template>
  <div class="gallery-list">
    <GalleryItem
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :image="item.image"
      :description="item.description"
    />
  </div>
</template>

<style scoped>
.gallery-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 10px;
}
</style>
