import { defineStore } from "pinia";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const newsStore = defineStore("news", {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      page: 1,
      stories: null,
      topNews: null,
      mapStories: {}
    };
  },
  getters: {
    findStories() {
      return this.mapStories[this.page];
    }
  },
  actions: {
    changePage(n) {
      this.page = n;
    },
    async getStory(n = this.page) {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?tags=story&page=${n}`);
      this.resJson = await response.json();
      this.stories = this.resJson.hits;
      this.mapStories[n] = this.stories;
    },
    async getTopNews(n = 0) {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?tags=front_page&page=${n}`);

      this.resJson = await response.json();
      if (n !== 0) {
        this.topNews = this.topNews.concat(this.resJson.hits);
      } else {
        this.topNews = this.resJson.hits;
      }
    }
  }
});
