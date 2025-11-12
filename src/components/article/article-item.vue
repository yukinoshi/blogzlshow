<script setup lang="ts">
import { labelString } from '../../hook/labelString';
import { spellImage } from '../../hook/spelimg';
import { subsetString } from '../../hook/subsetString';
import type { articleData } from '../../utils/interface';
import { onMounted, ref, type PropType } from 'vue';
import { useOverlayStore } from '../../store/overlay'

const props = defineProps({
  article: {
    type: Object as PropType<articleData>,
    default: () => ({} as articleData)
  }
})

const overlayStore = useOverlayStore()

const subsetName = ref<string>('');

// 跳转到详情页（覆盖层显示在 HomeView 上方，不销毁 HomeView）
const goToDetail = (articleId: number) => {
  // 打开覆盖层
  overlayStore.show(articleId)
  // 更新地址栏为可分享的独立页链接，但不触发路由重渲染
  const url = `/article?id=${articleId}`
  window.history.pushState({}, '', url)
}

onMounted(async () => {
  const subsetId = props.article.subset_id;
  if (typeof subsetId === 'number') {
    subsetName.value = await subsetString({ value: [{ id: props.article.subset_id || 0 }] });
  }
})
</script>

<template>
  <yk-space size="s" class="article-item" dir="vertical" @click="goToDetail(props.article.id)">
    <yk-space size="m" align="center" style="margin-top: -52px;">
      <yk-image :src="spellImage(props.article.cover)" width="160" height="120" :is-lazy="true"
        :preview="false"></yk-image>
      <yk-space dir="vertical" style="gap: 4px; padding-top: 16px;">
        <p class="article-item__title">{{ props.article.title }}</p>
        <yk-text type="third">
          {{ props.article.moment }}
        </yk-text>
      </yk-space>
    </yk-space>
    <yk-text class="article-item__introduce">{{ props.article.introduce }}</yk-text>
    <div class="article-item__foot">
      <yk-text type="secondary">{{ subsetName }} / {{ labelString(props.article.label) }}</yk-text>
      <yk-space>
        <yk-text type="third">
          <IconCommentOutline />
          {{ props.article.comment }}
        </yk-text>
        <yk-text type="third">
          <IconEyeOutline />
          {{ props.article.views }}
        </yk-text>
      </yk-space>
    </div>
  </yk-space>
</template>

<style lang="less" scoped>
.article-item {
  background: @bg-color-m;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  margin-top: 28px;
  height: 216px;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    color: @pcolor;
  }

  &__title {
    padding-top: 16px;
    font-size: 20px;
    line-height: 1.4;
    font-weight: 600;
    transition: all .2s;
  }

  &__introduce {
    height: 44px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  &__foot {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

}

.yk-drawer__header {
  width: 0;
  height: 0;
}
</style>