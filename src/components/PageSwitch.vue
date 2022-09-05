<template>
  <div class="switch-wrapper">
    <div class="left" :class="[page == 1 ? 'disabled' : 'enable']" @click="pushByPage('prev')">
      <span>&lt; prev</span>
    </div>
    <div class="page">
      <span>{{ page }}/10</span>
    </div>
    <div class="right" :class="[page == 10 ? 'disabled' : 'enable']" @click="pushByPage('next')">
      <span> next > </span>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { newsStore } from "../store/module/news";
const useNews = newsStore();
const { page } = storeToRefs(useNews);
const router = useRouter();
const route = useRoute();
const pushByPage = (state) => {
  if (state === "prev" && page.value > 1) {
    router.push({ name: route.name, params: { page: Number(page.value) - 1 } });
  } else if (state === "next" && page.value < 10) {
    router.push({ name: route.name, params: { page: Number(page.value) + 1 } });
  }
};
</script>

<style lang="scss">
.switch-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #2e495e;
  .page {
    margin: 0 50px;
  }
  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .enable {
    cursor: pointer;
  }
}
</style>
