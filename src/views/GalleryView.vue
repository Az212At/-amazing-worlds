<script setup lang="ts">
import GalleryList from "@/components/GalleryList.vue";
import { ref } from "vue";
import agathis from "@/assets/images/agathis.png";
import desert from "@/assets/images/desert.png";
import dungeon from "@/assets/images/dungeon.png";
import earth_pole from "@/assets/images/earth_pole.png";
import flower_glade from "@/assets/images/flower_glade.png";
import forest from "@/assets/images/forest.png";
import future from "@/assets/images/future.png";
import mars from "@/assets/images/mars.png";
import moon from "@/assets/images/moon.png";
import mountains from "@/assets/images/mountains.png";
import mushrooms from "@/assets/images/mushrooms.png";
import secret_laboratory from "@/assets/images/secret_laboratory.png";

const galleryItems = ref([
  {
    id: agathis,
    title: "Агатис",
    image: agathis,
    description: "Description of gallery item 1",
  },
  {
    id: desert,
    title: "Пустыня",
    image: desert,
    description: "Description of gallery item 2",
  },
  {
    id: dungeon,
    title: "Подземелье",
    image: dungeon,
    description: "Description of gallery item 3",
  },
  {
    id: earth_pole,
    title: "Северный полюс",
    image: earth_pole,
    description: "Description of gallery item 4",
  },
  {
    id: flower_glade,
    title: "Цветочная поляна",
    image: flower_glade,
    description: "Description of gallery item 5",
  },
  {
    id: forest,
    title: "Лес",
    image: forest,
    description: "Description of gallery item 6",
  },
  {
    id: future,
    title: "Будущее",
    image: future,
    description: "Description of gallery item 7",
  },
  {
    id: mars,
    title: "Марс",
    image: mars,
    description: "Description of gallery item 8",
  },
  {
    id: moon,
    title: "Луна",
    image: moon,
    description: "Description of gallery item 9",
  },
  {
    id: mountains,
    title: "Горы",
    image: mountains,
    description: "Description of gallery item 10",
  },
  {
    id: mushrooms,
    title: "Грибной лес",
    image: mushrooms,
    description: "Description of gallery item 11",
  },
  {
    id: secret_laboratory,
    title: "Секретная лаборатория",
    image: secret_laboratory,
    description: "Description of gallery item 12",
  },
]);
</script>

<template>
  <h1>Галерея</h1>
  <GalleryList :items="galleryItems" />
</template>

<style scoped></style>
