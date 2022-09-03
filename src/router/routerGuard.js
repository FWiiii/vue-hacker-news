import { newsStore } from "../store/news";
import pinia from "../store";

export function guard(router) {
  const useNews = newsStore(pinia);
  router.beforeEach(async (to) => {
    useNews.changePage(to.params.page);
    Object.keys(useNews.mapStories).includes(to.params.page) || (await useNews.getStory());
    // await useNews.getStory()
    return true;
  });
}
