<script setup lang="ts"></script>

<template>
  <div class="home-banner">
    <h1>Добро пожаловать в ArtVisions</h1>
    <p>Исследуйте и делитесь прекрасными произведениями искусства с миром</p>
  </div>
</template>

<style scoped>
.home-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 0 20px;
  background-size: cover;
  background-position: center;
  text-align: center;
}

.home-banner h1,
.home-banner p {
  max-width: 800px;
  word-wrap: break-word;
  margin: 0;
}

.home-banner h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.home-banner p {
  font-size: 1.2rem;
}
</style>
