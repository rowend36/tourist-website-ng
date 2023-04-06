<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import useWindowScroll from "@/utils/use_window_scroll";
let navHidden = ref(false);
let scroll = useWindowScroll();
</script>

<template>
  <nav class="header nav-routes-root" :class="{ 'nav-routes-hidden': navHidden, 'nav-routes-darker': scroll > 64 }">
    <button class="nav-routes-toggle" @click="navHidden = !navHidden">{{ navHidden ? "=" : "x" }}</button>
    <div class="nav-routes-align">
      <RouterLink class="nav-route" to="/">Home</RouterLink>
      <RouterLink class="nav-route" to="/travel">Travel</RouterLink>
      <RouterLink class="nav-route" to="/gallery">Gallery</RouterLink>
      <RouterLink class="nav-route" to="/about">About Us</RouterLink>
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
  height: auto;
  z-index: 1;
}

.nav-routes-root {
  padding: 16px 8px;
  color: white;
  background: rgba(0, 20, 50, 0.1);
  display: flex;
  justify-content: center;
  transition: background-color 1s;
}

.nav-routes-align {
  display: flex;
  padding: 0 64px;
  width: 100%;
  max-width: 800px;
  align-items: center;
  justify-content: space-evenly;
}

.nav-routes-darker {
  background-color: rgba(0, 20, 50, 0.75);
}

.nav-route {
  padding: 8px 32px;
  text-align: center;
  font-size: 1.375rem;
  font-weight: lighter;
  list-style-type: none;
  color: #fafafa;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.nav-route.router-link-active {
  color: white;
  font-weight: normal;
  border-color: white;
}

.nav-routes-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: lighter;
}

@media screen and (max-width: 800px) {
  .nav-route {
    padding: 8px;
  }
}

@media screen and (max-width: 600px) {
  .nav-route {
    padding: 8px;
  }

  .nav-routes-toggle {
    display: block;
  }

  .nav-routes-root {
    flex-direction: column;
    background: rgba(0, 20, 50, 0.75);
  }

  .nav-routes-align {
    flex-direction: column;
    max-height: 100vh;
    transition: max-height 0.1s;
    overflow: hidden;
  }

  .nav-routes-hidden {
    background: rgba(0, 20, 50, 0.2);
  }

  .nav-routes-hidden>.nav-routes-align {
    max-height: 0;
  }
}
</style>
