import { createRouter, createWebHistory } from "vue-router";
import { guard } from "./routerGuard";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/news/1"
  },
  {
    path: "/top",
    name: "Top",
    component: () => import("../views/Top.vue")
  },
  {
    path: "/news/:page",
    name: "News",
    component: () => import("../views/News.vue")
  },
  {
    path:"/comments/:id",
    name:"Comments",
    component: () => import("../views/Comments.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

guard(router);

export default router;
