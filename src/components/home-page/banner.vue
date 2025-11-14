<script setup lang="ts">
import { useThemeStore } from '../../store/theme';
import { goToBilibili, goToGithub } from '../../utils/gotolink';

const useTheme = useThemeStore()
const downMove = () => {
  window.scrollTo({
    top: 920,
    behavior: 'smooth'
  });
};
</script>

<template>
  <div class="banner">
    <div class="banner-inner">
      <div class="banner-pic">
        <div class="banner-bgc-light"></div>
        <div class="banner-bgc-brown"></div>
        <img class="banner-img" v-if="useTheme.isDark" src="/public/images/dark.png" alt="">
        <img class="banner-img" v-else src="/public/images/banner.png" alt="">
      </div>
      <div class="banner-slogan">
        <p class="blogtime">
          记录生活时光
        </p>
        <p class="slogan">BlogZLShow <br /> 一个专注于前端技术的个人博客</p>
      </div>
      <div class="down-btn" @click="downMove">
        <IconArrowDownOutline class="downarrow" />
      </div>
      <yk-space size="s" class="link" align="center">
        <yk-text>相关地址</yk-text>
        <IconBilibiliFill @click="goToBilibili" />
        <IconGithubFill @click="goToGithub" />
      </yk-space>
    </div>
  </div>
</template>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;

  &-inner {
    width: 1360px;

    .down-btn {
      cursor: pointer;
      width: 64px;
      height: 120px;
      background-image: linear-gradient(180deg, #0ECEE9 0%, #0AA9DB 100%);
      border-radius: 34px;
      text-align: center;
      padding-top: 58px;
      position: absolute;
      bottom: 60px;
      left: -80px;

      .downarrow {
        width: 32px;
        height: 32px;
        color: @bg-color-m;
        animation: example 3s infinite ease;
      }
    }

    .link {
      position: absolute;
      bottom: 0px;
      left: -80px;

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

  &-pic {
    position: absolute;
    right: -40px;
    top: 60px;

    .banner-img {
      position: absolute;
      top: -90px;
      left: -8%;
      width: 656px;
      height: 900px;
    }
  }

  &-bgc-light {
    top: 120px;
    left: -130px;
    width: 575px;
    height: 575px;
    opacity: 0.8;
    background: @white;
    border-radius: 288px;
  }

  &-bgc-brown {
    top: 38px;
    left: 242px;
    position: absolute;
    width: 400px;
    height: 400px;
    background: #e37e0f29;
    border-radius: 200px;
  }

  &-slogan {
    position: absolute;
    left: -80px;
    top: 140px;
    text-align: left;

    .blogtime {
      font-size: 120px;
      font-weight: bold;
      padding-bottom: 4px;
    }

    .slogan {
      font-size: 64px;
      font-weight: 500;
    }

    @keyframes example {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(16px);
      }

      100% {
        transform: translateY(0px);
      }
    }

  }
}
</style>