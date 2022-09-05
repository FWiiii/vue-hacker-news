<template>
  <TopNews />
  <div class="get-more" @click="getMore" v-if="n">[ More ...]</div>
</template>

<script setup>
import { newsStore } from "../store/module/news";
import TopNews from "../components/TopNews.vue";
import { ref } from "vue";
const n = ref(true)
const useNews = newsStore();
const getMore = () => {
  useNews.getTopNews(1);
  n.value = false;
};
</script>
<style lang="scss">
.get-more {
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: #2e495e;
  cursor: pointer;
  &:hover {
    color: #ff6600;
  }
}
</style>
