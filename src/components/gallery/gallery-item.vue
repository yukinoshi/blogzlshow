<script setup lang="ts">
import { watch, ref } from 'vue';
import type { articleData } from '../../utils/interface';
import { spellImage } from '../../hook/spelimg';
import { useOverlayStore } from '../../store/overlay';

const imglist = ref<string[]>([]);

const coverImage = ref<string>('');

const props = defineProps<{
  galleryData: articleData
}>()

const overlayStore = useOverlayStore()

const changeCover = (index: number) => {
  coverImage.value = spellImage(imglist.value[index]);
}

// 跳转到详情页（覆盖层显示在 HomeView 上方，不销毁 HomeView）
const goToDetail = (articleId: number) => {
  // 打开覆盖层
  overlayStore.show(articleId)
  // 更新地址栏为可分享的独立页链接，但不触发路由重渲染
  const url = `/article?id=${articleId}`
  window.history.pushState({}, '', url)
}

watch(() => props.galleryData, (newVal) => {
  const imgobj = JSON.parse(newVal.content as string);
  imglist.value = imgobj.map((item: { url: string }) => item.url);
  coverImage.value = spellImage(props.galleryData.cover);
})
</script>

<template>
  <div class="gallery-inner" :style="{ backgroundImage: `url(${coverImage})` }" @click="goToDetail(galleryData.id)">
    <!-- 封面 大图展示区域 -->
    <div class="gallery-inner__bg"></div>
    <!-- 文字展示 -->
    <yk-space @click.stop :size="8" dir="vertical" class="gallery-inner-introduce">
      <yk-title style="margin: 4px 0px; width: 400px;">{{ galleryData.title }}</yk-title>
      <div class="time-view">
        <yk-text>{{ galleryData.moment }}</yk-text>
        <yk-space size="s">
          <yk-text type="third">
            <IconCommentOutline />
            {{ galleryData.comment }}
          </yk-text>
          <yk-text type="third">
            <IconEyeOutline />
            {{ galleryData.views }}
          </yk-text>
        </yk-space>
      </div>
      <p class="introduce">
        {{ galleryData.introduce }}
      </p>
    </yk-space>
    <!-- 子图片展示 -->
    <yk-scrollbar class="gallery-inner__content">
      <yk-space>
        <yk-image v-for="(value, index) in imglist" :preview="false" :src="spellImage(value)" width="200px"
          height="160px" :key="index" @click.stop="changeCover(index)"></yk-image>
      </yk-space>
    </yk-scrollbar>
  </div>
</template>

<style lang="less" scoped>
.gallery-inner {
  width: 100%;
  height: 768px;
  background-color: @gray-1;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-position: center center;
  border-radius: 24px;

  .yk-image {
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background-position: center center;
  }

  &__bg {
    position: absolute;
    cursor: pointer;
    right: 0px;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(90deg, rgba(244, 242, 236, 0) 0%, var(--bgColor1) 100%);
  }

  &-introduce {
    position: absolute;
    right: 0px;
    top: 40px;
  }

  .time-view {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .introduce {
    width: 400px;
    font-size: 16px;
    line-height: 32px;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 13;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__content {
    position: absolute;
    left: 40px;
    bottom: 32px;
    height: 172px;
    width: 100%;
    overflow: hidden;

    .yk-image {
      box-sizing: content-box;
      border: 2px solid rgba(255, 255, 255, .4);
    }
  }

}
</style>