<template>
  <div class="main-content">
    <NewsItem v-for="story in getData()" :key="story.id" :story="story"></NewsItem>
  </div>
</template>
<script setup>
import NewsItem from "./NewsItem.vue";
import { storeToRefs } from "pinia";
import { newsStore } from "../store/module/news";
const useNews = newsStore();
const { topNews, currentPart, currentAsks, currentShows, currentStories } = storeToRefs(useNews);
function getData() {
  if (currentPart.value === "Top") {
    return topNews.value;
  } else if (currentPart.value === "Ask") {
    return currentAsks.value;
  } else if (currentPart.value === "Show") {
    return currentShows.value;
  } else if (currentPart.value === "News") {
    return currentStories.value;
  }
}
</script>
<style lang="scss">
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
}
</style>
