<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { usesubsetStore } from '../../store/subset';
import { getSubset } from '../../hook/subsetString';

const all = -2;

const radio = ref(all);

const props = defineProps<{
  classify: number;
  totalcount: number;
}>()

const subsetStore = usesubsetStore()

const emit = defineEmits<{ (e: 'changeSubset', value: number): void }>();

const getSubsetList = async () => {
  const res = await getSubset({ classify: props.classify })
  subsetStore.subsetList = res;
}

const changesubset = (e: number) => {
  emit('changeSubset', e);
}

onMounted(() => {
  getSubsetList()
})

</script>

<template>
  <div class="subset-bar">
    <yk-radio-group v-model="radio" type="button" @change="changesubset">
      <yk-radio :value="all">全部 {{ totalcount }}</yk-radio>
      <yk-radio :value="item.id" v-for="item in subsetStore.subsetList" :key="item.id">{{ item.subset_name }} {{
        item.value }}</yk-radio>
    </yk-radio-group>
  </div>
</template>

<style lang="less" scoped>
.subset-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 0;

  :deep(.yk-radio-group__container) {
    padding: 4px 4px 4px 0;
    border-radius: 12px;
    background-color: @bg-color-m;
  }

  :deep(.yk-radio.yk-radio--button .yk-radio__label) {
    font-size: 16px;
    height: 32px;
    border-radius: 10px;
    padding: 0 16px;
    margin-left: 4px;
  }

}
</style>