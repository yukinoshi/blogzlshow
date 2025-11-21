<script lang="ts" setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { showNavLink } from '../../utils/menu'
import { useRouter } from 'vue-router';
import { useThemeStore } from '../../store/theme';

const props = defineProps<{
  scrollTop?: number,
  searchTerm?: string
}>()

const isShow = ref(false)
const router = useRouter()
const useTheme = useThemeStore()
const searchTerm = ref(props.searchTerm || '');
const searchIndex = ref(0);


const emits = defineEmits<{
  (e: 'update:searchIndex', value: number): void;
  (e: 'update:searchTerm', value: string): void;
}>()

const changeIndex = (index: number) => {
  searchIndex.value = index;
  emits('update:searchIndex', index);
}

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

const gotofind = () => {
  emits('update:searchTerm', searchTerm.value);
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
  <div class="search-bar" :style="{ backdropFilter: `blur(${opacity * 8}px)` }" :class="{ show: isShow }">
    <div class="search-bar-top">
      <IconYike1Fill class="logo" @click="goPage('/')" />
      <yk-space align="center" :size="56" class="nav-center" style="width: 40%;">
        <yk-input v-model="searchTerm"  @keyup.enter="gotofind" placeholder="搜索文章或资源" style="width: 100%;" />
        <IconSearchOutline class="search" @click="gotofind" />
      </yk-space>
      <yk-space align="center" size="m">
        <yk-theme @isDark="changeTheme" />
      </yk-space>
    </div>
    <yk-space :size="48">
      <div v-for="(item, index) in showNavLink" :key="index">
        <yk-text :class="{active: searchIndex === index}" @click="changeIndex(index)">
          {{ item.name }}
        </yk-text>
      </div>
    </yk-space>
  </div>
</template>

<style lang="less" scoped>
.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: @bg-color-m;

  :deep(.yk-input__inner.yk-input__inner--primary):hover {
    border-color: @gray-8;
  }

  :deep(.yk-input__inner.yk-input__inner--primary--focus) {
    border-color: @gray-8 !important;
    background: @bg-color-m;
  }

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    width: 100%;
    padding: 0 32px;
  }

  .logo {
    cursor: pointer;
    height: 32px;
    width: 52px;
    color: @pcolor
  }

  .nav-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .yk-text {
    font-weight: 600;
    color: @font-color-m;
    cursor: pointer;

    &:hover {
      color: @font-color-l;
    }

    transition: all @animatb;
  }

  .active {
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

  .search {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
}

.show {
  top: -72px;
}
</style>