<script setup lang="ts">
import { spellImage } from '../../hook/spelimg';
import type { diaryData } from '../../utils/interface';
import { weathers } from '../../utils/weather';

const props = defineProps<{
  diary: diaryData
}>()

const emit = defineEmits<{ (e: 'changeDiary', value: number): void }>();

const weathIcon = spellImage(weathers[props.diary.weather_id]?.icon);

const changeDiary = () => {
  emit('changeDiary', props.diary.id);
}
</script>

<template>
  <div class="diary-list" @click="changeDiary">
    <p class="diary-list-moment">{{ diary.moment }}</p>
    <p class="diary-list-title">{{ diary.title }}</p>
    <p class="diary-list-content">{{ diary.content }}</p>
    <img :src="weathIcon" class="weather" alt="">
  </div>
</template>

<style lang="less" scoped>
.diary-list {
  padding: 24px;
  border-radius: 16px;
  background-color: @bg-color-m;
  position: relative;
  cursor: pointer;
  width: 424px;
  margin-right: 12px;
  border: 1px solid @bg-color-m;
  transition: all .3s;

  &-moment {
    font-size: 12px;
    line-height: 1.62;
    padding-bottom: 4px;
  }

  &-title {
    font-size: 20px;
    line-height: 1.4;
    padding-bottom: 8px;
    font-weight: 600;
  }

  &-content {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .weather {
    position: absolute;
    right: 16px;
    top: 16px;
  }
}
</style>