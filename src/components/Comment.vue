<template>
  <div class="main">
    <div class="comment-content" v-for="(comment, index) in comments" :key="index" :style="{ width: width + 'px' }">
      <div class="user">{{ comment.user }}</div>
      <div class="comment">
        <span v-html="comment.content"></span>
      </div>
      <div class="comment-footer" v-if="comment.comments.length !== 0">
        <p class="collapsed" v-if="flag" @click="flag = !flag">[+] 1 reply collapsed</p>
        <div class="toggle-buttom" v-if="!flag" @click="flag = !flag"></div>
      </div>
      <div class="div-toggle" v-if="flag || comment.comments.length == 0"></div>
      <div class="comment-children" v-show="!flag">
        <Comment v-if="comment.comments" :comments="comment.comments" :width="width - 22.5" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Comment from "./Comment.vue";
import { ref } from "vue";
defineProps({
  comments: {
    type: Array,
    default: () => []
  },
  width: {
    type: Number,
    default: 740
  }
});

const flag = ref(true);
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
  .user,
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
      border-radius: 50%;
      background-color: #fff;
      position: relative;
      top: -5px;
      left: -5px;
    }
  }
}
</style>
