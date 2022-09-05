import { defineStore } from "pinia";

export const commentsStore = defineStore("comments", {
  state: () => {
    return {
      comments: null,
      commentInfo: null
    };
  },
  getters: {},
  actions: {
    changePage(n) {
      this.page = n;
    },
    async getComments(id) {
      const res = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
      const data = await res.json();
      this.comments = data.children;
      this.getCommentInfo(data);
    },
    getCommentInfo(data) {
      const { title, author, url, points } = data;
      this.commentInfo = { title, author, url, points };
    }
  }
});
