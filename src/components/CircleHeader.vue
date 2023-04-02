<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="header nav-routes-root">
    <RouterLink class="nav-route" to="/">Home</RouterLink>
    <RouterLink class="nav-route" to="/travel">Travel</RouterLink>
  </nav>
</template>
<style>
.header {
  width: 80vw;
  max-width: 800px;
  margin: 32px 0;
  position: fixed;
  background: var(--color-background);
  padding: 0 8px;
  color: var(--color-text);
  box-shadow: rgba(0, 0, 0, 0.1) 0 20px 60px -10px;
  border-radius: 32px;
  height: 64px;
  z-index: 1;
}


.nav-routes-root {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.nav-route {
  padding: 32px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bolder;
  list-style-type: none;
  color: var(--color-disabled);
  text-decoration: none;
}

.nav-route.router-link-active {
  color: var(--color-link-active);
}
</style>
