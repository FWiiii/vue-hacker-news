<template>
  <div class="user-wrapper">
    <div class="user-content">
      <div class="user-name">{{ userInfo.username }}</div>
      <div class="user-info">
        <div class="about" v-html="userInfo.about"></div>
        <div class="create-time">Joined:&nbsp;&nbsp;&nbsp;&nbsp;{{ timeago(userInfo.created_at_i * 1000) }}</div>
        <div class="posts">Posts:&nbsp;&nbsp;&nbsp;&nbsp;{{ userInfo.submission_count }}</div>
        <div class="comments">Comments:&nbsp;&nbsp;&nbsp;&nbsp;{{ userInfo.comment_count }}</div>
        <div class="karma">Karma:&nbsp;&nbsp;&nbsp;&nbsp;{{ userInfo.karma }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userStore } from "../store/module/user";
import { storeToRefs } from "pinia";
import { timeago } from "../utils/getTime";
const useUser = userStore();
const { userInfo } = storeToRefs(useUser);
</script>

<style lang="scss">
.user-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .user-content {
    float: left;
    width: 850px;
    color: #2e495e;
    .user-name {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .about {
      font-size: 16px;
      font-weight: 400;
      
      margin-bottom: 10px;
    }
    .create-time,
    .posts,
    .comments,
    .karma {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 3px;
    }
  }
}
</style>
