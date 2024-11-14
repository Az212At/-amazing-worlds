<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
import GalleryItem from "@/components/GalleryItem.vue";
import MyModal from "@/ui/MyModal.vue";

interface GalleryItemData {
  id: string;
  title: string;
  image: string;
  description: string;
}

const props = defineProps({
  items: {
    type: Array as PropType<GalleryItemData[]>,
    required: true,
  },
});

const selectedItem = ref<GalleryItemData | null>(null);
const showModal = ref(false);

const openModal = (item: GalleryItemData) => {
  selectedItem.value = item;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedItem.value = null;
};
</script>

<template>
  <div class="gallery-list">
    <GalleryItem
      v-for="item in props.items"
      :key="item.id"
      :title="item.title"
      :image="item.image"
      @click="openModal(item)"
    />
  </div>

  <MyModal :show="showModal" :title="selectedItem?.title" @close="closeModal">
    <template v-if="selectedItem">
      <img :src="selectedItem.image" alt="Modal Image" class="modal-image" />
      <p>{{ selectedItem.description }}</p>
    </template>
  </MyModal>
</template>

<style scoped>
.gallery-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 10px;
}
</style>
