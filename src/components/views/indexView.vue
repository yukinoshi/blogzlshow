<script setup lang="ts">
import TopBar from '../bar/TopBar.vue';
</script>

<template>
  <div class="index-view">
    <TopBar />
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.index-view {
  padding: 72px 0;
  width: 100%;
  height: 2000px;
}
</style>