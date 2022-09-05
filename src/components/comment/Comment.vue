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
          <p class="collapsed" v-if="flags[index]" @click="flags[index] = !flags[index]">
            [ + ] {{ comment.children.length }} reply collapsed
          </p>
          <div class="toggle-buttom" v-else @click="flags[index] = !flags[index]">
            <div class="anniu">[ - ]</div>
            <div class="line"></div>
          </div>
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
    cursor: pointer;
    .collapsed {
      background-color: #fffbf2;
    }
  }
  .div-toggle {
    height: 1px;
    background-color: #eee;
  }
  .toggle-buttom {
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    .line {
      width: 97%;
      border-bottom: 1px solid #eee;
    }
  }
  .div-toggle {
    margin-bottom: 13.5px;
  }
}
</style>
