<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <p>
        Связаться со мной в Telegram:
        <a href="https://t.me/Azemsss" target="_blank" class="footer__link"
          >@Azemsss</a
        >
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #2c3e50; /* Темно-синий цвет*/
  color: #ffffff; /* Белый текст */
  padding: 20px;
  text-align: center;
}

.footer p {
  margin: 0;
}

.footer a {
  color: #1abc9c; /* Светло-зеленый для ссылок */
  text-decoration: none;
}

.footer a:hover {
  color: #16a085; /* Более темный зеленый при наведении */
}
</style>
