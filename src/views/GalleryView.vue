<script>
import MainLayout from "@/layouts/MainLayout.vue";
import GalleryList from "@/components/GalleryList.vue";

export default {
  name: "GalleryView",
  components: {
    MainLayout,
    GalleryList,
  },
  data() {
    return {
      galleryItems: [
        {
          id: 1,
          title: "1",
          description: "1",
          image: "#",
        },
        {
          id: 2,
          title: "2",
          description: "2",
          image: "2",
        },
        {
          id: 3,
          title: "3",
          description: "3",
          image: "#",
        },
      ],
    };
  },
};
</script>

<template>
  <MainLayout>
    <section class="gallery-view">
      <h1 class="gallery-title">Gallery</h1>
      <GalleryList :items="galleryItems" />
    </section>
  </MainLayout>
</template>

<style scoped>
.gallery-view {
  padding: 2rem;
  background-color: #ffffff;
}

.gallery-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}
</style>
