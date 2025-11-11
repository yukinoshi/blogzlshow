<script lang="ts" setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { navLink } from '../../utils/menu'
import { useRouter } from 'vue-router';
import { useThemeStore } from '../../store/theme';

const isShow = ref(false)
const router = useRouter()
const useTheme = useThemeStore()

const props = defineProps<{
  scrollTop?: number
}>()

let nowTop = 0;
//显示和隐藏顶部导航栏
const retract = () => {
  const scrollTop = props.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > nowTop) {
    nowTop = scrollTop;
    if (nowTop > 800) {
      isShow.value = true;
    }
  } else {
    nowTop = scrollTop;
    isShow.value = false;
  }
}
//导航栏模糊效果
const opacity = ref(0);
const handleOpacityScroll = () => {
  const scrollTop = props.scrollTop || document.documentElement.scrollTop;
  const maxScroll = 30;
  if (scrollTop < maxScroll) {
    opacity.value = 0;
  } else if (scrollTop > 130) {
    opacity.value = 1;
  } else {
    opacity.value = (scrollTop - maxScroll) / 100;
  }
};

const goPage = (path: string) => {
  router.push(path)
}

const changeTheme = (isDark: boolean) => {
  useTheme.isDark = isDark;
}

watch(() => props.scrollTop, () => {//如果有详情页传入scrollTop
  retract()
  handleOpacityScroll()
})

onMounted(() => {
  if (!props.scrollTop) {
    document.addEventListener('scroll', retract)
    document.addEventListener('scroll', handleOpacityScroll)
  }
})
onBeforeMount(() => {
  if (!props.scrollTop) {
    document.removeEventListener('scroll', retract)
    document.removeEventListener('scroll', handleOpacityScroll)
  }
})
</script>

<template>
  <div class="top-bar" :style="{ backdropFilter: `blur(${opacity * 8}px)` }" :class="{ show: isShow }">
    <IconYike1Fill class="logo" @click="goPage('/')" />
    <yk-space :size="56">
      <router-link v-for="(item, index) in navLink" :key="index" :to="item.path">
        <yk-text>
          {{ item.name }}
        </yk-text>
      </router-link>
    </yk-space>
    <yk-space align="center" size="m">
      <IconSearchOutline class="search" />
      <div><yk-theme @isDark="changeTheme" /></div>
    </yk-space>
    <div class="top-bar__bg" :style="{ opacity: opacity - 0.16 }"></div>
  </div>
</template>

<style lang="less" scoped>
.top-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all @animatb;

  .logo {
    cursor: pointer;
    height: 32px;
    width: 52px;
    color: @pcolor
  }

  .yk-text {
    font-weight: 600;
    color: @font-color-m;

    &:hover {
      color: @font-color-l;
    }

    transition: all @animatb;
  }

  .router-link-active {
    .yk-text {
      color: @font-color-l;
    }

    &::before {
      content: '';
      display: block;
      width: 16px;
      height: 3px;
      background-color: @pcolor;
      border-radius: 2px;
      position: absolute;
      bottom: -6px;
      left: 50%;
      margin-left: -8px;
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: @bg-color-m;
    z-index: -1;
  }

  .search {
    width: 16px;
    height: 16px;
  }
}

.show {
  top: -72px;
}
</style>