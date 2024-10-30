<script>
export default {
  name: "GalleryItem",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "#",
    },
  },
};
</script>

<template>
  <div class="gallery-item">
    <img :src="imageSrc" :alt="title" class="gallery-image" />
    <h3 class="gallery-title">{{ title }}</h3>
    <p class="gallery-description">{{ description }}</p>
  </div>
</template>

<style scoped>
.gallery-item {
  text-align: center;
}
.gallery-image {
  max-width: 100%;
  border-radius: 8px;
}
.gallery-title {
  font-size: 1.2em;
  margin-top: 10px;
}
.gallery-description {
  font-size: 0.9em;
  color: #666;
}
</style>
