import { defineStore } from "pinia";

export const newsStore = defineStore("news", {
  state: () => {
    return {
      currentPart: "",
      page: 1,
      topNews: null,
      mapStories: {},
      mapShows: {},
      mapAsks:{}
    };
  },
  getters: {
    currentStories() {
      return this.mapStories[this.page];
    },
    currentShows() {
      return this.mapShows[this.page];
    },
    currentAsks() {
      return this.mapAsks[this.page];
    }
  },
  actions: {
    changePage(n) {
      this.page = n;
    },
    setCurrentPart(part) {
      this.currentPart = part;
    },
    async getStory(n = this.page) {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?tags=story&page=${n}`);
      const data = await response.json();
      this.mapStories[n] = data.hits;
    },
    async getTopNews(n = 0) {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?tags=front_page&page=${n}`);

      this.resJson = await response.json();
      if (n !== 0) {
        this.topNews = this.topNews.concat(this.resJson.hits);
      } else {
        this.topNews = this.resJson.hits;
      }
    },
    async getShows(n = this.page) {
      const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&page=${n}`);
      const data = await response.json();
      this.mapShows[n] = data.hits;
    },
    async getAsks(n = this.page) {
      const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=ask_hn&page=${n}`);
      const data = await response.json();
      this.mapAsks[n] = data.hits;
    }
  }
});
