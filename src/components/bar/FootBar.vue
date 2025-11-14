<script setup lang="ts">
import { goToBilibili, goToGithub } from '../../utils/gotolink';

</script>

<template>
  <div class="FootBar">
    <div class="FootBar-main">
      <yk-space size="l" dir="vertical" align="center">
        <yk-space size="xl">
          <IconBilibiliFill @click="goToBilibili" />
          <IconGithubFill @click="goToGithub" />
        </yk-space>
        <yk-space size="xl" align="center">
          <yk-text>微信: azl2489</yk-text>
          <yk-text>QQ: 2972854873</yk-text>
          <yk-text>邮箱: 2972854873@qq.com</yk-text>
        </yk-space>
      </yk-space>
    </div>
  </div>
</template>

<style lang="less" scoped>
.FootBar {
  width: 100%;
  background-color: @bg-color-m;

  &-main {
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 136px;

    .yk-icon {
      fill: currentcolor;
      font-size: inherit;
      width: 32px;
      height: 32px;
      padding: 7px;
      border-radius: 12px;
      background-color: @gray-1;
      cursor: pointer;
      transition: all .2s;
      border: 1px solid transparent;
    }

    .yk-icon:hover {
      border-color: @pcolor;
      color: @pcolor;
    }
  }
}
</style>