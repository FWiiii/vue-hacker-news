<template>
  <div class="main-content">
    <div class="stories-wrapper">
        <Story v-for="i in 20" :key="i"></Story>
    </div>
  </div>
</template>
<script setup>
import Story from "./Story.vue";

</script>
<style lang="scss">
.main-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  .stories-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
