<script setup lang="ts">
import { onMounted } from "vue";
import { banner, homeArticle, homeData, homeDiary, homeFeedback, homeGallery, homeResource } from "../home-page/";
import { addVisitDataApi } from "../../api/visits";

const addVisit = async () => {
  await addVisitDataApi();
}

onMounted(() => {
  addVisit();
})
</script>

<template>
  <banner />
  <yk-space :size="120" dir="vertical" style="padding-top: 120px;" align="center">
    <homeData />
    <homeArticle :pagesize="4" />
    <homeGallery :pagesize="4" />
    <homeDiary />
    <homeResource />
    <homeFeedback />
  </yk-space>
</template>

<style lang="less" scoped></style>