<script setup lang="ts">
import { onMounted } from 'vue';
import { useResourceList } from '../../hook/resource';
import { SubsetBar, NextPageBar, EmptyBar } from '../bar';
import resourceItem from '../resource/resource-item.vue';

const { RenderResource, allcount, hasMore, fetchResourceList, changeSubset, loadMore } = useResourceList({
  pageSize: 8,
})

onMounted(() => {
  fetchResourceList({ includeCount: true, reset: true });
})
</script>

<template>
  <div class="layout-inner">
    <div class="share-view">
      <div class="share">
        <SubsetBar :classify="Number(3)" :totalcount="allcount" @change-subset="changeSubset" />
        <div class="resource">
          <resource-item v-for="item in RenderResource" :key="item.id" :data="item" />
        </div>
        <NextPageBar :hasMore="hasMore" @nextPage="loadMore" v-show="RenderResource.length !== 0" />
      </div>
      <EmptyBar v-show="RenderResource.length === 0" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.resource {
  padding-top: 32px;
  display: grid;
  grid-template-columns: minmax(240px, 500px) minmax(240px, 500px) minmax(240px, 500px) minmax(240px, 500px);
  gap: 24px;
  justify-content: center;
}
</style>