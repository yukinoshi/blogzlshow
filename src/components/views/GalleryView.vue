<script setup lang="ts">
import ArticleItem from '../article/article-item.vue';
import { onMounted, ref } from 'vue';
import { getArticle } from '../../hook/article';
import { usearticleStore } from '../../store/article';
import { SubsetBar, NextPageBar, EmptyBar } from '../bar';
import type { articleData } from '../../utils/interface';

const usearticle = usearticleStore();

const subsetId = ref(-2);

const nowPage = ref(1);

const pageSize = 9;

const RenderarticleList = ref<articleData[]>([]);

const isMore = ref(true);

const NeedRenderCount = ref(usearticle.count);

const getSubsetList = async (count: boolean) => {
  const res = await getArticle({ count, subsetId: subsetId.value, nowPage: nowPage.value, pageSize: pageSize, classify: 1 })
  if (count) {//第一次加载
    usearticle.count = res.data!.count;
    NeedRenderCount.value = usearticle.count;
    usearticle.articleData = res.data!.list;
  } else {
    //加载更多文章 下一页
    usearticle.isInArticleList(res.data!.list)
  }
  RenderarticleList.value = usearticle.articleData;
}

const changeSubset = async (e: number) => {
  subsetId.value = e;
  RenderarticleList.value = [];
  nowPage.value = 1;
  // 根据subsetId分类文章
  if (subsetId.value == -2) {
    RenderarticleList.value = usearticle.articleData;
    NeedRenderCount.value = usearticle.count;
    isMoreCheck();
    return;
  }
  const res = await getArticle({ subsetId: subsetId.value, nowPage: nowPage.value, pageSize: pageSize, classify: 1 })
  RenderarticleList.value = res.data!.list;
  NeedRenderCount.value = res.data!.count;
  isMoreCheck();
}

const isMoreCheck = () => {
  if (NeedRenderCount.value <= RenderarticleList.value.length) {
    isMore.value = false;
  } else {
    isMore.value = true;
  }
}

const nextPage = async () => {
  nowPage.value += 1;
  await getSubsetList(false);
  isMoreCheck();
}

onMounted(() => {
  getSubsetList(true);
  isMoreCheck();
})

</script>

<template>
  <div class="view-inner">
    <div class="share-view">
      <div class="share">
        <SubsetBar :classify="Number(1)" :totalcount="usearticle.count" @changeSubset="changeSubset" />
        <div class="blog">
          <ArticleItem v-for="item in RenderarticleList" :key="item.id" :article="item" />
        </div>
        <NextPageBar :has-more="isMore" @nextPage="nextPage" v-show="RenderarticleList.length !== 0" />
      </div>
      <EmptyBar v-show="RenderarticleList.length === 0" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.view-inner {
  min-width: 1240px;
  max-width: 1480px;
  margin: 0 auto 96px;

  .share-view {
    padding-top: 88px;

    .share {
      width: 100%;
      min-height: 640px;

      .blog {
        padding-top: 32px;
        display: grid;
        grid-template-columns: minmax(320px, 600px) minmax(320px, 600px) minmax(320px, 600px);
        gap: 24px;
        justify-content: center;
      }
    }
  }
}
</style>