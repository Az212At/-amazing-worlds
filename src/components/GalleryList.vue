<script setup lang="ts">
import { defineProps } from "vue";
import GalleryItem from "@/components/GalleryItem.vue";

interface GalleryItemData {
  id: number;
  title: string;
  image: string;
  description: string;
}

const props = defineProps<{
  items: GalleryItemData[];
}>();
</script>

<template>
  <div class="gallery-list">
    <GalleryItem
      v-for="item in props.items"
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
