<script setup lang="ts">
import { ref } from 'vue';
import { TopBar, FootBar } from '../bar';
// @ts-ignore: resolve .vue module import when shim or file is missing/unknown
import ArticleOverlay from '../overlay/ArticleOverlay.vue';

const indexView = ref()
//如果indexview滚动了，回到顶部
</script>

<template>
  <div class="index-view" ref="indexView">
    <TopBar />
    <router-view></router-view>
    <!-- 全局文章详情覆盖层挂载点 -->
    <ArticleOverlay />
  </div>
  <FootBar />
  <yk-back-top theme="secondary" :style="{ position: 'fixed' }"></yk-back-top>
</template>

<style lang="less" scoped>
.index-view {
  width: 100%;
  min-height: 100vh;
  position: relative;
}
</style>