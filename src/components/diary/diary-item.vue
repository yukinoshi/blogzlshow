<script setup lang="ts">
import { computed } from 'vue';
import { spellImage } from '../../hook/spelimg';
import type { diaryData } from '../../utils/interface';
import { weathers } from '../../utils/weather';

const props = defineProps<{
  diary: diaryData
}>()

const weathIcon = spellImage(weathers[props.diary.weather_id]?.icon);

const Pictures = computed(() => {
  if (!props.diary.picture) {
    return [];
  }
  return JSON.parse(props.diary.picture);
})

</script>

<template>
  <div class="diary-item">
    <div class="diary-item-bg"></div>
    <div class="diary-item-top">
      <p class="title">{{ diary.title }}</p>
      <yk-space size="s">
        <p style="font-size: 16px;">{{ diary.moment }}</p>
        <img :src="weathIcon" />
      </yk-space>
    </div>
    <yk-scrollbar ref="scrollbar" height="680px" class="diary-item-content">
      <div class="content">
        <div class="content-main">{{ diary.content }}</div>
      </div>
      <yk-space v-if="Pictures.length > 0">
        <yk-image v-for="item in Pictures" :src="spellImage(item.url)" width="160" height="200"></yk-image>
      </yk-space>
    </yk-scrollbar>
  </div>
</template>

<style lang="less" scoped>
.diary-item {
  position: relative;
  background: #fff;
  box-shadow: 0 4px 24px #00000014;
  padding: 40px 48px 0;
  color: #0b1926;

  &-bg {
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 4px 24px #00000014;
    position: absolute;
    left: -8px;
    top: 8px;
    z-index: -1;
  }

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    margin: 0 16px;
    border-bottom: 1px solid rgba(11, 25, 38, .32);

    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 1.5px;
      width: 100%;
      height: 3px;
      background-color: @pcolor;
    }

    .title {
      font-size: 24px;
      line-height: 34px;
      font-weight: 600;
    }

  }

  &-content {
    padding: 0 16px 40px;

    .content {
      font-family: serif;
      font-size: 16px;
      line-height: 42px;
      text-align: justify;
      letter-spacing: 1px;
      padding: 0 10px;
      background-image: url(https://huohuo90.com/images/bg.png);
      background-size: 12px 42px;
    }

  }

  .yk-space {
    gap: 16px 16px;
    padding: 32px 0;
    width: auto;
    flex-wrap: wrap;
  }

  .yk-image {
    border-radius: 0;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 8px #0000001f;
    box-sizing: content-box;
  }
}
</style>