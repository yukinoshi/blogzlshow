<script setup lang="ts">

//获取父组件传过来的参数
const props = defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  isChange: { //是否显示切换按钮
    type: Boolean,
    default: false
  },
  leftbutton: {
    type: Boolean,
    default: false
  },
  rightbutton: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['next', 'prev']);

const prev = () => {
  emits('prev',1);
}

const next = () => {
  emits('next',1);
}
</script>

<template>
  <div class="Title">
    <h1>{{ title }}</h1>
    <yk-space size="m" v-if="isChange">
      <yk-button  shape="round" type="outline" @click="prev" :disabled="leftbutton">
        <IconLeftOutline />
      </yk-button>
      <yk-button  shape="round" type="outline" @click="next" :disabled="rightbutton">
        <IconRightOutline />
      </yk-button>
    </yk-space>
  </div>
</template>

<style lang="less" scoped>
.Title {
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 32px;
    line-height: 1.34;
    font-weight: 600;
  }
}
</style>