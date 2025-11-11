<script setup lang="ts">
import { homeArticle } from "../home-page/";
</script>

<template>
  <yk-space :size="120" dir="vertical" style="padding-top: 120px;" align="center">
    <homeArticle :pagesize="12" />
  </yk-space>
</template>

<style lang="less" scoped></style>