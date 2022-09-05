import { newsStore } from "../store/module/news";
import { userStore } from "../store/module/user";
import pinia from "../store";
import { storeToRefs } from "pinia";

export function guard(router) {
  const useNews = newsStore(pinia);
  const useUser = userStore(pinia);
  const { mapStories, mapShows, mapAsks } = storeToRefs(useNews);

  router.beforeEach((to) => {
    document.title = `${to.meta.title} | Vue HackerNews`;
    return true;
  });

  router.beforeResolve(async (to) => {
    if (to.name === "News") {
      useNews.changePage(to.params.page);
      Object.keys(mapStories.value || {}).includes(to.params.page) || (await useNews.getStory());
      return true;
    }
    if (to.name === "Show") {
      useNews.changePage(to.params.page);
      Object.keys(mapShows.value || {}).includes(to.params.page) || (await useNews.getShows());
      return true;
    }
    if (to.name === "Ask") {
      useNews.changePage(to.params.page);
      Object.keys(mapAsks.value || {}).includes(to.params.page) || (await useNews.getAsks());
      return true;
    }
    if (to.name === "User") {
      await useUser.getUserInfo(to.params.username);
      return true;
    }
    if (to.name === "Top") {
      await useNews.getTopNews();
      return true;
    }
    return true;
  });

  router.afterEach(async (to) => {
    if (to.name === "News") {
      Object.keys(mapStories.value || {}).includes(`${Number(to.params.page) + 1}`) ||
        useNews.getStory(Number(to.params.page) + 1);
      return true;
    }
    if (to.name === "Show") {
      Object.keys(mapShows.value || {}).includes(`${Number(to.params.page) + 1}`) ||
        useNews.getShows(Number(to.params.page) + 1);
      return true;
    }
    if (to.name === "Ask") {
      Object.keys(mapAsks.value || {}).includes(`${Number(to.params.page) + 1}`) ||
        useNews.getAsks(Number(to.params.page) + 1);
      return true;
    }
    return true;
  });
}
