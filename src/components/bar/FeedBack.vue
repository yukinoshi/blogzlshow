<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  comment_content: string;
  username: string;
  isSubmit: boolean;
  width: string | number;
}>()

const emit = defineEmits<{
  (e: 'update:comment_content', value: string): void;
  (e: 'update:username', value: string): void;
  (e: 'submitComment'): void;
}>();

const commentContentModel = computed({
  get: () => props.comment_content,
  set: (value: string) => emit('update:comment_content', value),
});

const usernameModel = computed({
  get: () => props.username,
  set: (value: string) => emit('update:username', value),
});

const handleSubmit = () => {
  emit('submitComment');
};

</script>

<template>
    <yk-space dir="vertical" size="m">
      <yk-text-area v-model="commentContentModel" placeholder="说点什么..." :auto-size="{
        minRows: 4,
        maxRows: 10,
      }" :style="{ width: props.width }"></yk-text-area>
      <div class="feedback-submit">
        <yk-space align="center" size="s">
          <yk-input v-model="usernameModel" placeholder="用户名" style="width: 160px;"></yk-input>
          <yk-avatar img-url="https://huohuo90.com/images/avatar.png"></yk-avatar>
        </yk-space>
        <yk-button type="primary" :disabled="isSubmit" size="m" @click="handleSubmit">评论</yk-button>
      </div>
    </yk-space>
</template>

<style lang="less" scoped>
.feedback {
  width: 100%;
  display: flex;
  justify-content: center;

  .yk-text-area:hover,
  .yk-text-area--focus {
    border-color: @gray-8
  }

  .yk-text-area--focus {
    background-color: @bg-color-m;
  }

  &-submit {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .yk-button {
      background-color: @lcolor-light;
    }

    .yk-button:hover {
      background-color: @gray-9;
    }
  }
}
</style>