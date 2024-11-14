<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header class="header">
    <NavBar />
  </header>
</template>

<style scoped>
.header {
  background-color: #2c3e50; /* Темно-синий цвет */
  color: #ffffff; /* Белый цвет для текста */
  padding: 20px;
}

.header nav a {
  color: #ffffff; /* Белый текст ссылок */
  text-decoration: none;
  margin-right: 15px;
}

.header nav a:hover {
  color: #1abc9c; /* Светло-зеленый цвет при наведении */
}
</style>
