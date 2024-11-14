<script setup lang="ts">
import { ref } from "vue";

const links = ref([
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
]);
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li v-for="link in links" :key="link.path">
        <RouterLink :to="link.path">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #2c3e50; /* Совпадает с фоном хедера */
  padding: 10px 20px;
}

.navbar-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-list li {
  margin-right: 15px;
}

.navbar-list li a {
  color: #ffffff; /* Белый текст для ссылок */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-list li a:hover {
  color: #1abc9c; /* Светло-зеленый цвет при наведении */
}
</style>
