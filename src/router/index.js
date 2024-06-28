import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/about",
      name: "AboutView",
      component: AboutView,
    },
    {
      path: "/faqview",
      name: "FaqView",
      component: () => import("@/views/FaqView.vue"),
    },
  ],
  linkActiveClass: "bg-redOrange ",
  linkExactActiveClass: "bg-orange",
});

export default router;
