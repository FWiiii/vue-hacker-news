<template>
  <div class="main">
    <div class="comment-content" v-for="(comment, index) in comments" :key="index" :style="{ width: width + 'px' }">
      <div class="commeng-main" v-if="comment.author">
        <router-link class="user" :to="{ name: 'User', params: { username: comment.author } }">{{
          comment.author
        }}</router-link>
        <span>|</span>
        <span class="time-ago">{{ timeago(comment.created_at_i * 1000) }}</span>
        <div class="comment">
          <span v-html="comment.text"></span>
        </div>
        <div class="comment-footer" v-if="comment.children.length !== 0">
          <p class="collapsed" v-if="flags[index]" @click="flags[index] = !flags[index]">[+] 1 reply collapsed</p>
          <div class="toggle-buttom" v-if="!flags[index]" @click="flags[index] = !flags[index]"></div>
        </div>
        <div class="div-toggle" v-if="flags[index] || comment.children.length == 0"></div>
        <div class="comment-children" v-show="!flags[index]">
          <Comment v-if="comment.children" :comments="comment.children" :width="width - 22.5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Comment from "./Comment.vue";
import { ref } from "vue";
import { timeago } from "../../utils/getTime";
const props = defineProps({
  comments: {
    type: Array,
    default: () => []
  },
  width: {
    type: Number,
    default: 740
  }
});

const flags = ref(Array.from({ length: props.comments.length }, () => true));
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.comment-content {
  font-size: 13px;
  font-weight: 300;
  float: right;
  .user {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    margin-right: 7px;
  }
  .time-ago {
    font-size: 14px;
    font-weight: 300;
    color: #828282;
    margin-left: 5px;
  }
  .comment,
  .comment-footer {
    margin: 13.5px 0;
  }
  .comment-footer {
    background-color: #fffbf2;
    cursor: pointer;
  }
  .div-toggle {
    height: 1px;
    background-color: #eee;
  }
  .toggle-buttom {
    height: 1px;
    background-color: #eee;
    &::before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border: 1px solid #000;
      border-radius: 3px;
      background-color: #eee;
      position: relative;
      top: -5px;
      left: -5px;
    }
    &::after {
      // 加号的横线
      content: "";
      display: block;
      width: 6px;
      background-color: #fff;
      border-bottom: 1px solid #000;
      position: relative;
      top: -12px;
      left: -2px;
    }
  }
  .div-toggle {
    margin-bottom: 13.5px;
  }
}
</style>
