import { newsStore } from "../store/module/news";
import pinia from "../store";

export function guard(router) {
  const useNews = newsStore(pinia);
  router.beforeResolve(async (to) => {
    if (to.name === "News") {
      useNews.changePage(to.params.page);
      Object.keys(useNews.mapStories).includes(to.params.page) || (await useNews.getStory());
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
      const page = Number(to.params.page);
      Object.keys(useNews.mapStories).includes((page + 1).toString()) || (await useNews.getStory(page + 1));
      return true;
    }
    return true;
  });
}
