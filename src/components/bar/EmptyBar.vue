<script setup lang="ts">
</script>

<template>
  <div class="empty" style="height: 924px;">
    <yk-empty description="没有对应内容" type="secondary" v-show="true" />
  </div>
</template>

<style lang="less" scoped>
.empty {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}
</style>