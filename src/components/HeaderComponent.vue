<script>
export default{
    name: "HeaderComponent",
};
</script>

<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <RouterLink to="/" class="nav__link">Главная</RouterLink>
        </li>
        <li class="nav__item">
          <RouterLink to="/gallery" class="nav__link">Галерея</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

</style>