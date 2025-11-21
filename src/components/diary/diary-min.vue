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
  <div class="diary-min" style="width: 824px;">
    <div class="diary-min-monment">{{ diary.moment }}</div>
    <div class="diary-min-title">{{ diary.title }}</div>
    <div class="diary-min-content">{{ diary.content }}</div>
    <img :src="weathIcon" class="weather" />
    <yk-space v-if="Pictures.length > 0">
      <yk-image v-for="item in Pictures" :src="spellImage(item.url)" width="96" height="96"></yk-image>
    </yk-space>
  </div>
</template>

<style lang="less" scoped>
.diary-min {
  padding: 24px;
  border-radius: 16px;
  background-color: @bg-color-m;
  position: relative;
  cursor: pointer;
  width: 100%;
  margin-right: 12px;

  &-monment {
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

  .weather {
    position: absolute;
    right: 16px;
    top: 16px;
  }

  .yk-space {
    padding-top: 16px;
  }
}
</style>