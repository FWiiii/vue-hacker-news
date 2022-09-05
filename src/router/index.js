import { createRouter, createWebHistory } from "vue-router";
import { guard } from "./routerGuard";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/top"
  },
  {
    path: "/top",
    name: "Top",
    component: () => import("../views/Top.vue"),
    meta: {
      title: "Top"
    }
  },
  {
    path: "/news/:page",
    name: "News",
    component: () => import("../views/News.vue"),
    meta: {
      title: "News"
    }
  },
  {
    path: "/comments/:id",
    name: "Comments",
    component: () => import("../views/Comments.vue"),
    meta: {
      title: "Comments"
    }
  },
  {
    path: "/show/:page",
    name: "Show",
    component: () => import("../views/News.vue"),
    meta: {
      title: "Show"
    }
  },
  {
    path: "/ask/:page",
    name: "Ask",
    component: () => import("../views/News.vue"),
    meta: {
      title: "Ask"
    }
  },
  {
    path: "/user/:username",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      title: "User"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

guard(router);

export default router;
