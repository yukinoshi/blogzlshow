<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue'
import ArticleDetails from '../article/article-details.vue'
import { useOverlayStore } from '../../store/overlay'

const store = useOverlayStore()

const onPop = () => {
  // 浏览器返回时，关闭覆盖层
  if (store.open) store.hide()
}

const close = () => {
  // 关闭覆盖层并返回上一条历史（恢复 URL）
  store.hide()
  history.back()
}

onMounted(() => {
  window.addEventListener('popstate', onPop)
})

onBeforeUnmount(() => {
  window.removeEventListener('popstate', onPop)
})

// 打开覆盖层时隐藏页面原生滚动条，关闭时恢复
const lockBody = () => {
  try {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  } catch {}
}
const unlockBody = () => {
  try {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  } catch {}
}

watch(() => store.open, (val) => {
  if (val) lockBody(); else unlockBody();
}, { immediate: true })
</script>

<template>
  <teleport to="body">
    <div v-if="store.open" class="overlay-root">
      <!-- 点击遮罩关闭 -->
      <div class="overlay-mask" @click="close" />
      <!-- 详情主体：复用现有 article-details，内部已经带滚动与工具条等 -->
      <div class="overlay-panel">
        <ArticleDetails :articleId="store.articleId || undefined" :overlay="true" />
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.overlay-root { position: fixed; inset: 0; z-index: 200; }
.overlay-mask { position: absolute; inset: 0; background: rgba(0,0,0,.1); }
.overlay-panel { position: absolute; inset: auto 0 0 0; height: 100%; border-radius: 24px 24px 0 0; overflow: hidden; }
</style>
