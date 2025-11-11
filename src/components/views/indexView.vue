<script setup lang="ts">
import TopBar from '../bar/TopBar.vue';
// @ts-ignore: resolve .vue module import when shim or file is missing/unknown
import ArticleOverlay from '../overlay/ArticleOverlay.vue';

</script>

<template>
  <div class="index-view">
    <TopBar />
    <router-view></router-view>
    <!-- 全局文章详情覆盖层挂载点 -->
    <ArticleOverlay />
  </div>
</template>

<style lang="less" scoped>
.index-view {
  width: 100%;
  min-height: 100vh;
  position: relative;
}
</style>