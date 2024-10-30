<script>
export default {
  name: "HomeBanner",
  props: {
    title: {
      type: String,
      default: "#",
    },
    subtitle: {
      type: String,
      default: "#",
    },
  },
};
</script>

<template>
  <section class="home-banner">
    <div class="banner-content">
      <h1 class="banner-title">{{ title }}</h1>
      <p class="banner-subtitle">{{ subtitle }}</p>
      <RouterLink to="/gallery" class="banner-button">Галерея</RouterLink>
    </div>
  </section>
</template>


<style scoped>
.home-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
}
.banner-content {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 8px;
}
.banner-title {
  font-size: 2em;
  margin-bottom: 10px;
}
.banner-subtitle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.banner-button {
  padding: 10px 20px;
  background-color: #ff6347;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.banner-button:hover {
  background-color: #e5533d;
}
</style>
