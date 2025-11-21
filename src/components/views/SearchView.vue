<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
import { SearchBar } from '../bar';
// @ts-ignore: resolve .vue module import when shim or file is missing/unknown
import ArticleOverlay from '../overlay/ArticleOverlay.vue';
import SearchList from '../search/search-list.vue';

const proxy: any = getCurrentInstance()?.proxy

const route = proxy.$route;

//如果indexview滚动了，回到顶部
const indexView = ref()

const searchIndex = ref(0);

const changeSearchIndex = (index: number) => {
  searchIndex.value = index;
}

const searchTerm = ref(route.query.data as string || '');

const getdata = (term: string) => {
  searchTerm.value = term;
}

</script>

<template>
  <div class="index-view" ref="indexView">
    <SearchBar @update:searchIndex="changeSearchIndex" @update:searchTerm="getdata" />
    <!-- 全局文章详情覆盖层挂载点 -->
    <search-list :searchTerm="searchTerm" :searchIndex="searchIndex"></search-list>
    <ArticleOverlay />
  </div>
  <yk-back-top theme="secondary" :style="{ position: 'fixed' }"></yk-back-top>
</template>

<style lang="less" scoped>
.index-view {
  width: 100%;
  min-height: 100vh;
  position: relative;
}
</style>