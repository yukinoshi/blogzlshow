<script setup lang="ts">
import { onMounted, ref, getCurrentInstance } from 'vue';
import { getVisitDataApi } from '../../api/visits';
import carousel from '../carousel/carousel.vue';

const proxy: any = getCurrentInstance()?.proxy
const visits = ref<number>(0)
const todayvisits = ref<number>(0)
const getVisit = async () => {
  const res = await getVisitDataApi();
  if (res.code !== 200) {
    proxy.$message({ type: 'warning', message: '访问量获取失败' })
    return
  }
  visits.value = res.data.count
  todayvisits.value = res.data.today
}

onMounted(() => {
  getVisit();
})
</script>

<template>
  <div class="home-data">
    <yk-space size="m" dir="vertical">
      <div class="visit-sum">
        <p class="visit-data">{{ visits }}</p>
        <p class="visit-name">总访问量</p>
      </div>
      <div class="visit-today">
        <p class="visit-data">{{ todayvisits }}</p>
        <p class="visit-name">今日访问</p>
      </div>
    </yk-space>
    <div class="banner">
      <carousel />
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-data {
  width: 1480px;
  display: flex;
  justify-content: space-between;

  .visit-sum,
  .visit-today {
    width: 316px;
    height: 188px;
    border-radius: 24px;
    padding: 32px 40px;
  }

  .visit-data {
    font-size: 72px;
    font-weight: 600;
    line-height: 84px;
    padding-bottom: 8px;
  }

  .visit-name {
    font-size: 16px;
    font-weight: 600;
  }

  .visit-sum {
    background-image: linear-gradient(121deg, #baff101a 0%, #ff25f317 100%);
  }

  .visit-today {
    background-image: linear-gradient(121deg, #ff39f41a 0%, #2d56ff1a 100%);
  }

  .banner {
    width: 1124px;
    height: 400px;
    background-color: @bg-color-m;
    border-radius: @radius-xl;
    overflow: hidden;
  }
}
</style>