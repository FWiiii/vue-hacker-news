<template>
  <div class="main-content">
    <Story v-for="story in findStories" :key="story.id" :story="story"></Story>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { newsStore } from "../store/news";
import Story from "./Story.vue";
const useNews = newsStore();
const { findStories } = storeToRefs(useNews);
</script>
<style lang="scss">
.main-content {
  height: 890px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
}
</style>
