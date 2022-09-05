<template>
  <div class="main-content">
    <Story v-for="story in topNews" :key="story.id" :story="story"></Story>
  </div>
</template>
<script setup>
import Story from "./Story.vue";
import { storeToRefs } from "pinia";
import { newsStore } from "../store/module/news";
const useNews = newsStore();
const { topNews } = storeToRefs(useNews);
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
