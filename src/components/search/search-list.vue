<script setup lang="ts">
import { useSearch } from '../../hook/search';
import { onMounted, watch, toRef, ref } from 'vue';
import ArticleItem from '../article/article-item.vue';
import diaryMin from '../diary/diary-min.vue';
import { NextPageBar,EmptyBar } from '../bar';
import ResourceItem from '../resource/resource-item.vue';

const props = defineProps<{
  searchTerm: string;
  searchIndex: number;
}>();

//切换分类就重新获取这个函数
let { hasMore, loadMore, RenderGallery, RenderArticle, articleSearch, RenderDiary, diarySearch, RenderResource, resourceSearch } = useSearch(toRef(props, 'searchIndex'), {
  serchTerm: toRef(props, 'searchTerm'),
});

const renderlength = ref(0);

const runFetch = async () => {
  renderlength.value = 0;
  if (props.searchIndex === 0 || props.searchIndex === 1) {
    await articleSearch(true, props.searchIndex);
    if (props.searchIndex === 0) {
      renderlength.value = RenderArticle.value.length;
    } else {
      renderlength.value = RenderGallery.value.length;
    }
  } else if (props.searchIndex === 2) {
    await diarySearch(true);
    renderlength.value = RenderDiary.value.length;
  } else if (props.searchIndex === 3) {
    await resourceSearch(true);
    renderlength.value = RenderResource.value.length;
  }
}


onMounted(async () => {
  await runFetch();
});

watch(() => props.searchIndex, async () => {
  await runFetch();
});

watch(() => props.searchTerm, async () => {
  await runFetch();
});
</script>

<template>
  <div class="search">
    <div class="blog" v-if="searchIndex === 0">
      <ArticleItem v-for="item in RenderArticle" :key="item.id" :article="item" />
    </div>
    <div class="gallery" v-if="searchIndex === 1">
      <ArticleItem :classify="1" v-for="item in RenderGallery" :key="item.id" :article="item" />
    </div>
    <yk-space v-if="searchIndex === 2" class="diary" size="m" dir="vertical" align="center">
      <diaryMin :diary="item" v-for="item in RenderDiary" :key="item.id" />
    </yk-space>
    <div class="resource" v-if="searchIndex === 3">
      <ResourceItem :data="item" v-for="item in RenderResource" :key="item.id" />
    </div>
    <NextPageBar :hasMore="hasMore" @nextPage="loadMore(false, searchIndex)" v-show="renderlength > 0"/>
    <EmptyBar v-show="renderlength === 0" />
  </div>
</template>

<style lang="less" scoped>
.search {
  padding: 120px 0;
  min-width: 1360px;
  max-width: 1480px;
  margin: 0 auto;

  .blog {
    padding-top: 32px;
    display: grid;
    grid-template-columns: minmax(320px, 600px) minmax(320px, 600px) minmax(320px, 600px);
    gap: 24px;
    justify-content: center;
  }

  .gallery {
    padding-top: 32px;
    display: grid;
    grid-template-columns: minmax(320px, 600px) minmax(320px, 600px) minmax(320px, 600px) minmax(320px, 600px);
    gap: 32px;
    justify-content: center;
  }

  .diary {
    padding: 16px 0;
  }

  .resource {
    padding-top: 32px;
    display: grid;
    grid-template-columns: minmax(240px, 500px) minmax(240px, 500px) minmax(240px, 500px) minmax(240px, 500px);
    gap: 24px;
    justify-content: center;
  }
}
</style>