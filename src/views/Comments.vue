<template>
  <div class="main-content">
    <div class="new-wrapper">
      <CommentInfo v-if="flag" :data="commentsInfo"/>
    </div>
    <div class="comments-wrapper">
      <div class="total-comments">
        <span>{{ comments.length }} Comments</span>
      </div>
      <Comment v-if="flag" :comments="comments" :width="740" />
    </div>
  </div>
</template>

<script setup>
import Comment from "../components/Comment.vue";
import CommentInfo from "../components/CommentInfo.vue";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const comments = ref({});
const commentsInfo = ref({});
const flag = ref(false);
onBeforeMount(async () => {
  const res = await fetch(`/api/hn/item?id=${route.params.id}`);
  const data = await res.json();
  comments.value = data.comments;
  commentsInfo.value = data;
  flag.value = true;
});
</script>

<style lang="scss">
.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

  .new-wrapper {
    padding: 27px 30px 15px 30px;
    box-shadow: 0 1px 2px #0000001a;
    width: 740px;
    margin: 0 auto;
  }
  .comments-wrapper {
    .total-comments {
      padding: 20px 0;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
