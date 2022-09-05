import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      userInfo: null
    };
  },
  getters: {},
  actions: {
    async getUserInfo(username) {
      const res = await fetch(`https://hn.algolia.com/api/v1/users/${username}`);
      const data = await res.json();
      this.userInfo = data;
    }
  }
});
