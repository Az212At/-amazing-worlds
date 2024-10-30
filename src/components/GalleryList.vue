<script>
import GalleryItem from "@/components/GalleryItem.vue";

export default {
  name: "GalleryList",
  components: {
    GalleryItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
      validator: (value) =>
        value.every((item) => "imageSrc" in item && "title" in item),
    },
  },
};
</script>

<template>
  <div class="gallery-list">
    <GalleryItem
      v-for="(item, index) in items"
      :key="index"
      :imageSrc="item.imageSrc"
      :title="item.title"
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
