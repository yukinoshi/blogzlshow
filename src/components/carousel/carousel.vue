<script setup lang="ts">
import { onMounted, ref, getCurrentInstance } from 'vue';
import { getBannerImagesApi } from '../../api/banner';
import type { BannerImage } from '../../utils/interface';
import { spellImage } from '../../utils/spelimg';

const currentslideIndex = ref(0);
const proxy: any = getCurrentInstance()?.proxy
const bannerImages = ref<BannerImage[]>([])

// 下一张
const nextslide = () => {
  currentslideIndex.value = (currentslideIndex.value + 1) % bannerImages.value.length;
};


// 上一张
// const prevslide = () => {
//   currentslideIndex.value = (currentslideIndex.value - 1 + bannerImages.value.length) % bannerImages.value.length;
// };

// 当前轮播图
const goToSlide = (index: number) => {
  currentslideIndex.value = index;
};

let timer: any = null;

// 自动轮播
const startAutoSlide = () => {
  timer = setInterval(() => {
    nextslide();
  }, 3000);
};

// 停止自动轮播
const stopAutoSlide = () => {
  clearInterval(timer);
};

const getBannerImages = async () => {
  // 这里可以添加获取轮播图数据的逻辑
  const res = await getBannerImagesApi();
  if (res.code !== 200) {
    proxy.$message({ type: 'warning', message: '访问量获取失败' })
    return
  }
  bannerImages.value = res.data;
};

const goToWebSite = (link: string) => {
  window.open(link, '_blank');
}

onMounted(() => {
  startAutoSlide();
  getBannerImages();
});
</script>

<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{
      transform: `translateX(-${currentslideIndex * 100}%)`,
      transition: 'transform 0.5s ease'
    }">
      <div class="carousel-slide" v-for="(item, index) in bannerImages" :key="index" @mouseenter="stopAutoSlide"
        @mouseleave="startAutoSlide" :style="{ backgroundImage: `url(${spellImage(item.cover)})` }" style="
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
      ">
        <div class="carousel-slide__main">
          <p class="carousel-slide__title">{{ item.title }}</p>
          <p class="carousel-slide__introduce">{{ item.introduce }}</p>
          <yk-button class="carousel-slide__link" @click="goToWebSite(item.link)">去访问</yk-button>
        </div>
      </div>
    </div>
    <yk-space :size="8" class="carousel_tip">
      <div v-for="index in bannerImages?.length" class="carousel_tip-item" :key="index"
        :class="{ 'nowslide': currentslideIndex + 1 === index }" @click="goToSlide(index - 1)"
        :style="{ width: currentslideIndex + 1 === index ? '48px' : '33px', transition: 'width 300ms ease, background 300ms ease' }">
      </div>
    </yk-space>
  </div>
</template>

<style lang="less" scoped>
.carousel {
  position: relative;
  margin: auto;
  height: 100%;
  overflow: hidden;

  &-inner {
    display: flex;
    height: 100%;
  }

  &-slide {
    width: 100%;
    height: 100%;
    background: @bg-color-m;
    flex-shrink: 0;
    position: relative;

    /* 底部到上方的黑色渐变遮罩，增强文字可读性 */
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      /* 更强的底部渐变遮罩，提高文字对比度 */
      background: linear-gradient(180deg,
          rgba(0, 0, 0, 0.25) 0%,
          rgba(0, 0, 0, 0.35) 50%,
          rgba(0, 0, 0, 0.65) 100%);
      pointer-events: none;
      z-index: 0;
    }

    &__main {
      padding: 40px;
      width: 468px;
      height: 100%;
      position: relative;
      z-index: 1; // 确保文字在遮罩上方
    }

    &__title {
      color: #fff;
      font-size: 32px;
      line-height: 1.34;
      font-weight: 600;
      /* 强化文字可读性 */
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
    }

    &__introduce {
      color: #fff;
      padding-top: 16px;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
    }

    &__link {
      position: absolute;
      bottom: 80px;
      border-radius: 800px;
      background-color: @pcolor;
      width: 136px;
    }
  }

  &_tip {
    position: absolute;
    right: @space-xl;
    bottom: @space-m;

    &-item {
      width: 33px;
      height: 4px;
      border-radius: 2px;
      cursor: pointer;
      background: @white;
    }

    .nowslide {
      width: 48px;
      background: @pcolor;
    }
  }
}
</style>