<script setup lang="ts">
import ArticleItem from '../article/article-item.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { SubsetBar, NextPageBar, EmptyBar } from '../bar';
import { useArticleList } from '../../hook/blog';

const subsetId = ref(-2);

const pageSize = 9;

const {
  renderList,
  allcount,
  changeSubset,
  loadMore,
  hasMore,
  clearStore,
  initBlogList,
} = useArticleList({
  classify: 0,
  pageSize,
  initialSubsetId: subsetId.value
})

onMounted(() => {
  initBlogList();
})

onBeforeUnmount(() => {
  clearStore();
})

</script>

<template>
  <div class="layout-inner">
    <div class="share-view">
      <div class="share">
        <SubsetBar :classify="Number(0)" :totalcount="allcount" @changeSubset="changeSubset" />
        <div class="blog">
          <ArticleItem v-for="item in renderList" :key="item.id" :article="item" />
        </div>
        <NextPageBar :hasMore="hasMore" @nextPage="loadMore" v-show="renderList.length !== 0" />
      </div>
      <EmptyBar v-show="renderList.length === 0" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.blog {
  padding-top: 32px;
  display: grid;
  grid-template-columns: minmax(320px, 600px) minmax(320px, 600px) minmax(320px, 600px);
  gap: 24px;
  justify-content: center;
}
</style>