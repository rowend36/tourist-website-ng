import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/travel",
      name: "Travel",
      // route level code-splitting
      // this generates a separate chunk (Travel.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TravelView.vue"),
    },
    {
      path: "/gallery",
      name: "Gallery",
      // route level code-splitting
      // this generates a separate chunk (Travel.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GalleryView.vue"),
    }
  ],
});

export default router;
