<script setup lang="ts">

//获取父组件传过来的title
const props = defineProps({
  title: {
    type: String,
    default: "默认标题"
  }
})
</script>

<template>
  <div class="Title">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="less" scoped>
.Title {
  padding-bottom: 40px;

  h1 {
    font-size: 32px;
    line-height: 1.34;
    font-weight: 600;
  }
}
</style>