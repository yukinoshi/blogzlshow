<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { TitleBar, MoreBar } from '../bar';
import DiaryItem from '../diary/diary-item.vue';
import { getDiaryByDate } from '../../hook/diary';
import type { diaryData } from '../../utils/interface';
import { momentm } from '../../utils/moment';

const currentRef = ref(new Date());

const hasDiaryDates = ref<string[]>([]);

const diaryDatas = ref<diaryData[]>([]);

const Rediary = ref<diaryData>();

const changeData = (date: any) => {
  currentRef.value = date;
  getDiarybyM();
  const temp = momentm(currentRef.value);
  if (isDiaryDate(temp)) {
    Rediary.value = diaryDatas.value.find(item => item.moment === temp);
  }
}

//根据月份来获取日记数据
const changeM = (date: any) => {
  currentRef.value = date;
  getDiarybyM();
}

const isDiaryDate = (dateStr: string) => {
  if (hasDiaryDates.value.length == 0) {
    return false;
  }
  return hasDiaryDates.value.includes(dateStr);
}

const getDiarybyM = async () => {
  const res = await getDiaryByDate({
    year: currentRef.value.getFullYear(),
    month: currentRef.value.getMonth() + 1
  })
  if (res.code !== 200) {
    return;
  }
  diaryDatas.value = res.data;
  hasDiaryDates.value.push(...diaryDatas.value.map(item => item.moment));
}

onMounted(async () => {
  await getDiarybyM();
  Rediary.value = diaryDatas.value[0];
});

</script>

<template>
  <div class="home-diary">
    <TitleBar title="随笔随记" />
    <yk-space :size="56">
      <yk-space :size="64" dir="vertical">
        <div class="min-calendar">
          <yk-calendar-min @panel-change="changeData" @change="changeM" v-model="currentRef">
            <template #date-cell="{ data }">
              <p :class="{ 'is-diary': isDiaryDate(data.day) }" >
                {{ data.day.split('-').slice(2).join('-') }}
              </p>
            </template>
          </yk-calendar-min>
        </div>
      <yk-space dir="vertical" :gap="8">
          <p class="one">思绪在字里流动</p>
          <p class="two">光影落心底</p>
          <p class="three">岁月温柔地被记录</p>
        </yk-space>
      </yk-space>
      <DiaryItem v-if="Rediary" :diary="Rediary" style="width: 100%;"></DiaryItem>
    </yk-space>
    <MoreBar url="/diary" />
  </div>
</template>

<style lang="less" scoped>
.home-diary {
  width: 1480px;

  .min-calendar {
    padding: 24px 16px 16px;
    border-radius: 16px;
    background: @bg-color-m;
  }
}

.one {
  font-size: 40px;
  line-height: 56px;
  font-weight: 600;
}

.two {
  font-size: 64px;
  line-height: 90px;
  font-weight: 600;
  color: @gray-4;
}

.three {
  font-size: 32px;
  line-height: 46px;
}

.is-diary::before {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  background-color: @pcolor;
  position: absolute;
  bottom: 2px;
  left: 14px;
  border-radius: 4px;
}
</style>