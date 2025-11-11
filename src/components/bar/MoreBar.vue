<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter();

const props = defineProps({
  url: {
    type: String,
    default: ""
  }
})

const goto = () => {
  //当前页面跳转
  if (props.url) {
    router.push(props.url);
  }
}
</script>

<template>
  <div style="display: flex; justify-content: center; padding-top: 56px;">
    <yk-button shape="round" type="outline" @click="goto">更多</yk-button>
  </div>
</template>

<style lang="less" scoped></style>