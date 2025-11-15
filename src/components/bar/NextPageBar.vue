<script setup lang="ts">

const props = defineProps({
  hasMore: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits<{ (e: 'nextPage', value: number): void }>();

const nextPage = () => {
  //当前页面跳转
  emit('nextPage', 1);
}
</script>

<template>
  <div style="display: flex; justify-content: center; padding-top: 56px;">
    <yk-button shape="round" type="outline" @click="nextPage" v-show="hasMore">加载更多</yk-button>
    <yk-text type="third" v-show="!hasMore">已经到底了</yk-text>
  </div>
</template>

<style lang="less" scoped></style>