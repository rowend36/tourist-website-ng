<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="header nav-routes-root">
    <div class="nav-routes-align">
      <RouterLink class="nav-route" to="/">Home</RouterLink>
      <RouterLink class="nav-route" to="/travel">Travel</RouterLink>
    </div>
  </nav>
</template>
<style scoped>
.header {
  left: 0;
  right: 0;
  top: 0;
  margin: 0;
  position: fixed;
  padding: 16px 8px;
  color: white;
  background: rgba(0, 20, 50, 0.2);
  height: auto;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.nav-routes-align {
  display: flex;
  padding: 0 64px;
  width: 100%;
  max-width: 800px;
  align-items: center;
  justify-content: space-evenly;
}

.nav-route {
  padding: 8px 32px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: lighter;
  list-style-type: none;
  color: #fafafa;
  text-decoration: none;
}

.nav-route.router-link-active {
  color: white;
  font-weight: normal;
  border-bottom: 1px solid white;
}
</style>
