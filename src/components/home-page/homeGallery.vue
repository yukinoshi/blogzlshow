<script setup lang="ts">
import { ref } from 'vue';
import { TitleBar, MoreBar } from "../bar";
import galleryItem from '../gallery/gallery-item.vue';

const leftbutton = ref(true);

const rightbutton = ref(false);

const nextGallery = () => {
  // 下一张
  
}
const prevGallery = () => {
  // 上一张

}
</script>

<template>
  <div class="home-gallery">
    <TitleBar :title="'摄影图库'" :isChange="true" :leftbutton="leftbutton" :rightbutton="rightbutton" @next="nextGallery" @prev="prevGallery" />
    <gallery-item />
    <MoreBar url="/blog" />

  </div>
</template>

<style lang="less" scoped>
.home-gallery {
  width: 1480px;
}
</style>