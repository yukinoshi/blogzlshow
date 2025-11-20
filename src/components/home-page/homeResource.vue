<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useResourceList } from '../../hook/resource';
import { TitleBar, MoreBar } from '../bar';
import resourceItem from '../resource/resource-item.vue';

const pageSize = ref<number>(4);

const { RenderResource, fetchResourceList } = useResourceList({
  pageSize: pageSize.value,
})

onMounted(() => {
  fetchResourceList({ includeCount: true, reset: true });
});
</script>

<template>
  <div class="home-resource">
    <TitleBar :title="'资源下载'" />
    <div class="home-resource-content">
      <resource-item v-for="item in RenderResource" :key="item.id" :data="item" />
    </div>
    <MoreBar url="/resource" />
  </div>
</template>

<style lang="less" scoped>
.home-resource {
  width: 1480px;

  &-content {
    display: grid;
    grid-template-columns: minmax(240px, 500px) minmax(240px, 500px) minmax(240px, 500px) minmax(240px, 500px);
    justify-content: center;
    gap: 24px;
  }
}
</style>