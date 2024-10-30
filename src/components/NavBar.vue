<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <router-link to="/" class="logo-link">ArtVisions</router-link>
    </div>
    <ul class="navbar-links">
      <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
      <li><RouterLink to="/gallery" class="nav-link">Gallery</RouterLink></li>
      <li><RouterLink to="/about" class="nav-link">About</RouterLink></li>
      <li><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
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
.navbar-logo .logo-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6347;
  text-decoration: none;
}
.navbar-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}
.nav-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #ff6347;
}
</style>
