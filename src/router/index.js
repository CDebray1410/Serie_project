import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SerieDetailView from "../views/SerieDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/serie/:serieId",
      name: "serie",
      component: SerieDetailView,
    },
  ],
});

export default router;
