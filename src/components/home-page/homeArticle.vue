<script setup lang="ts">
import { TitleBar, MoreBar } from "../bar";
import articleItem from "../article/article-item.vue";
import { onMounted, ref } from "vue";
import { getArticle } from "../../hook/article";
import type { articleData, ReqGetArticle } from "../../utils/interface";

const props = defineProps({
  pagesize: {
    type: Number,
    default: 4
  }
})

const reqData: ReqGetArticle = {
  pageSize: props.pagesize,
  nowPage: 1,
  classify: 0,
  state: 1
}

const articles = ref<articleData[]>([]);

onMounted(async () => {
  const res = await getArticle(reqData)
  if (res.data) {
    articles.value = res.data.list
  }
})
</script>

<template>
  <div class="home-article">
    <TitleBar :title="'博客文章'" />
    <div class="home-article-inner">
      <articleItem v-for="item in articles" :key="item.id" :article="item" />
    </div>
    <MoreBar url="/blog" />
  </div>
</template>

<style lang="less" scoped>
.home-article {
  width: 1480px;

  &-inner {
    display: grid;
    grid-template-columns: minmax(480px, 1000px) minmax(480px, 1000px);
    gap: 32px 40px;
    justify-content: center;
  }
}
</style>