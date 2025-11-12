<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { TitleBar, MoreBar } from "../bar";
import galleryItem from '../gallery/gallery-item.vue';
import type { articleData, ReqGetArticle } from '../../utils/interface';
import { getArticle } from '../../hook/article';

const props = defineProps({
  pagesize: {
    type: Number,
    default: 4
  }
})

const leftbutton = ref(false);

const rightbutton = ref(false);

const index = ref(0);

const nextGallery = () => {
  // 下一张
  index.value = (index.value + 1) % props.pagesize;
}
const prevGallery = () => {
  // 上一张
  index.value = (index.value - 1 + props.pagesize) % props.pagesize;
}

const reqData: ReqGetArticle = {
  pageSize: props.pagesize,
  nowPage: 1,
  classify: 1,
  state: -1,
  subsetId: -2,
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
  <div class="home-gallery">
    <TitleBar :title="'摄影图库'" :isChange="true" :leftbutton="leftbutton" :rightbutton="rightbutton" @next="nextGallery" @prev="prevGallery" />
    <gallery-item :galleryData="articles[index]!"/>
    <MoreBar url="/gallery" />
  </div>
</template>

<style lang="less" scoped>
.home-gallery {
  width: 1480px;
}
</style>