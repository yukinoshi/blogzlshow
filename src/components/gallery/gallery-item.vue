<script setup lang="ts">
</script>

<template>
  <div class="gallery-inner" :style="{ backgroundImage: 'url(https://huohuo90.com:443/files/1761357616260.jpg)' }">
    <!-- 封面 大图展示区域 -->
    <div class="gallery-inner__bg"></div>
    <!-- 文字展示 -->
    <yk-space :size="8" dir="vertical" class="gallery-inner-introduce">
      <yk-title style="margin: 4px 0px; width: 400px;">标题</yk-title>
      <div class="time-view">
        <yk-text>2025-01-01</yk-text>
        <yk-space size="s">
          <yk-text type="third">
            <IconCommentOutline />
            50
          </yk-text>
          <yk-text type="third">
            <IconEyeOutline />
            50
          </yk-text>
        </yk-space>
      </div>
      <p class="introduce">
        这个是简介
      </p>
    </yk-space>
    <!-- 子图片展示 -->
    <yk-scrollbar class="gallery-inner__content">
      <yk-space>
        <yk-image v-for="value in 4" :preview="false" src="https://huohuo90.com:443/files/1761357616260.jpg"
          width="200px" height="160px"></yk-image>
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