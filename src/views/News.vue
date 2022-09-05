<template>
  <div class="news-wrapper">
    <PageSwitch />
    <ItemList />
    <div class="page-switch"></div>
    <PageSwitch />
  </div>
</template>

<script setup>
import ItemList from "../components/ItemList.vue";
import PageSwitch from "../components/PageSwitch.vue";
</script>

<style lang="scss">
.news-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  .page-switch{
    margin-top: 20px;
  }
}
</style>