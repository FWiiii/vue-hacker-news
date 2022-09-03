import { createRouter, createWebHistory } from "vue-router";
import { guard } from "./routerGuard";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/news/1"
  },
  {
    path: "/news/:page",
    name: "News",
    component: () => import("../views/News.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

guard(router);

export default router;
