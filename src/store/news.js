import { defineStore } from "pinia";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const newsStore = defineStore("news", {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      page: 1,
      stories: null,
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
    async getStory(n=this.page) {
      const response = await fetch(`/api/hn/feeds?feed=news&page=${n}`);
      this.stories = await response.json();
      this.mapStories[n] = this.stories;
    }
  }
});
