<script setup lang="ts">
import { ref, watch } from 'vue';
import { spellImage } from '../../hook/spelimg';
import { subsetString } from '../../hook/subsetString';
import type { ResourceData } from '../../utils/interface';
import { useResourceList } from '../../hook/resource';

const props = defineProps<{
  data: ResourceData;
}>()

const { goToDownload } = useResourceList();

const subsetName = ref<string>('');

watch(props.data, async () => {
  subsetName.value = await subsetString({ value: [{ id: props.data.subset_id || 0 }] });
}, { immediate: true });
</script>

<template>
  <div class="resource-item">
    <yk-image fit="cover" :preview="false" :src="spellImage(data.cover)" class="resource-item-cover"
      style="width: 100%; height: 228px;"></yk-image>
    <div class="resource-item-main">
      <yk-space dir="vertical" :size="4">
        <p class="resource-item-title">{{ data.title }}</p>
        <yk-text style="margin-top: 8px;">{{ subsetName }} / {{ data.introduce }}</yk-text>
        <yk-text type="third">{{ data.format }} 文件</yk-text>
      </yk-space>
      <div class="foot">
        <yk-text type="third" class="code">{{ data.password }}</yk-text>
        <yk-button size="m" @click="goToDownload(data)">下载 {{ data.downloads }}</yk-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.resource-item {
  background-color: @bg-color-m;
  border-radius: 16px;
  padding: 8px;
  width: 100%;

  &-cover {
    overflow: hidden;
    border-radius: 12px;

    :deep(.yk-image__img) {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &-main {
    padding: 16px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .code {
        font-size: 24px;
        font-weight: 600;
      }

      .yk-button {
        background-color: @lcolor-light;
      }

      .yk-button:hover {
        background-color: @gray-9;
      }
    }
  }

  &-title {
    font-size: 20px;
    line-height: 1.4;
    font-weight: 600;
  }

}
</style>