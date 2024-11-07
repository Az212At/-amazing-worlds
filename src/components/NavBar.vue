<script setup>
import { ref } from "vue";

const links = ref([
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
]);
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-links">
      <li v-for="link in links" :key="link.path">
        <RouterLink :to="link.path">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
}
.navbar-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}
</style>
