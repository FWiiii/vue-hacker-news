<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <div :key="Component">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
