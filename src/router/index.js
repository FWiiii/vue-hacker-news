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
      title: "Top",
      show: true,
      order:1
    }
  },
  {
    path: "/news/:page",
    name: "News",
    component: () => import("../views/News.vue"),
    meta: {
      title: "News",
      show: true,
      order:2
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
      title: "Show",
      show: true,
      order:3
    }
  },
  {
    path: "/ask/:page",
    name: "Ask",
    component: () => import("../views/News.vue"),
    meta: {
      title: "Ask",
      show: true,
      order:4
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
