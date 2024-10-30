<script>
import MainLayout from "@/layouts/MainLayout.vue";
import HomeBanner from "@/components/HomeBanner.vue";
import GalleryList from "@/components/GalleryList.vue";

export default {
  name: "HomeView",
  components: {
    MainLayout,
    HomeBanner,
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
    <HomeBanner />
    <section class="gallery-section">
      <h2 class="section-title">Gallery</h2>
      <GalleryList :items="galleryItems" />
    </section>
  </MainLayout>
</template>

<style scoped>
.gallery-section {
  padding: 2rem;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}
</style>
