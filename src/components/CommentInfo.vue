<template>
  <div class="main-section">
    <a class="title" :href="data.url" target="_blank">{{ data.title }}</a>
    <div class="story-footer">
      <span class="host">{{storyHost}}</span>
      <span class="by">by</span>
      <span class="author">{{data.user}}</span>
      <span>|</span>
      <span class="score">{{data.points}} score</span>
    </div>
  </div>
</template>

<script setup>
    import { computed } from "vue";
const props=defineProps({
  data: {
    type: Object,
    default: () => {}
  }
});

const storyHost = computed(() => {
  return props.data.url?.split("//")[1].split("/")[0] || "";
});
</script>

<style lang="scss">
.main-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .title {
    font-size: 22.5px;
    font-weight: 600;
    color: #2e495e;
    text-decoration: none;
  }
  .story-footer {
    font-size: 14px;
    .by {
      margin-right: 5px;
    }
    .host,
    .author,
    .score {
      margin-right: 5px;
      font-weight: 300;
      opacity: 0.7;
    }
    .score {
      margin-left: 5px;
    }
  }
}
</style>
