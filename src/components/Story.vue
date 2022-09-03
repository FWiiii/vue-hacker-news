<template>
  <div class="story">
    <div class="left-section">
      <span class="score">{{ story.points }}</span>
    </div>
    <div class="right-section">
      <a class="title" :href="story.url" target="_blank">{{ story.title }}</a>
      <div class="story-footer">
        <span class="host">{{ storyHost }}</span>
        <span class="by">by</span>
        <span class="author">{{ story.user }}</span>
        <span>|</span>
        <router-link class="comments" :to="{ name: 'Comments', params: { id: story.id } }"
          >{{ story.comments_count }} comments</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  story: {
    type: Object,
    default: () => {}
  }
});

const storyHost = computed(() => {
  return props.story.url?.split("//")[1].split("/")[0] || "";
});
</script>

<style lang="scss">
.story {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;

  padding: 20px 30px 20px 30px;
  .left-section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    padding-right: 20px;
    .score {
      font-size: 17px;
      font-weight: 400;
      color: #2e495e;
    }
  }
  .right-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 670px;
    .title {
      font-size: 15px;
      font-weight: 400;
      color: #2e495e;
      text-decoration: none;
    }
    .story-footer {
      color: #595959;
      font-size: 12px;
      .by {
        margin-right: 4px;
      }
      .host {
        margin-right: 4px;
        font-weight: 300;
      }
      .author {
        font-weight: 300;
        margin-right: 5px;
      }
      .comments {
        text-decoration: underline;
        font-weight: 300;
        margin-left: 5px;
      }
    }
  }
}
</style>
