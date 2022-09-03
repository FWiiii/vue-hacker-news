<template>
  <div class="main-content">
    <div class="stories-wrapper">
      <Story v-for="story in stories" :key="story.id" :story="story"></Story>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import Story from "./Story.vue";
onBeforeMount(async () => {
  const response = await fetch("/api/hn/feeds?feed=news&page=1");
  stories.value = await response.json();
});
const stories = ref([]);
</script>
<style lang="scss">
.main-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  .stories-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
