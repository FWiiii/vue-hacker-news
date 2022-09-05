<template>
  <div class="story">
    <div class="left-section">
      <span class="score">{{ story.points }}</span>
    </div>
    <div class="right-section">
      <a class="title" :href="story.url" target="_blank">{{ story.title }}</a>
      <div class="story-footer">
        <span class="host">{{ story.url?.split("//")[1].split("/")[0] }}</span>
        <span class="by">by</span>
        <router-link class="author" :to="{ name: 'User', params: { username: story.author } }">{{
          story.author
        }}</router-link>
        <span>|</span>
        <span class="time-ago">{{ timeago(story.created_at_i * 1000) }}</span>
        <span>|</span>
        <router-link class="comments" :to="{ name: 'Comments', params: { id: story.objectID } }"
          >{{ story.num_comments }} comments</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { timeago } from "../utils/getTime";

defineProps({
  story: {
    type: Object,
    default: () => {}
  }
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
  color: #2e495e;
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
      margin-top: 5px;
      .host,
      .author {
        margin-right: 5px;
        font-weight: 300;
      }
      a {
        text-decoration: none;
        color: #000;
        font-weight: 300;
        margin-left: 5px;
        &:hover {
          text-decoration: underline;
          color: #2e495e;
        }
      }
      .time-ago {
        margin: 0 5px;
      }
    }
  }
}
</style>
