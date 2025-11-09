<script setup lang="ts">
import { ref, watch } from 'vue';
import type { commentData } from '../../utils/interface';

const emits = defineEmits(['changeComment'])

const props = defineProps<{ data: commentData }>();

const isPraise = ref<boolean>(props.data.isPraise || false);

const likeComment = async () => {
  emits('changeComment', { id: props.data.id, is: isPraise.value })
}

watch(
  () => props.data.isPraise,
  (newVal) => {
    isPraise.value = newVal || false
  }
)
</script>

<template>
  <div class="comment">
    <yk-space size="ss">
      <yk-avatar img-url="https://huohuo90.com/images/avatar.png"></yk-avatar>
      <div class="comment-main">
        <yk-space size="ss" dir="vertical">
          <div>
            <yk-text class="comment-main-name">{{ props.data.user_name }}</yk-text>
            <p class="comment-main-time">{{ props.data.moment }}</p>
          </div>
          <yk-text type="secondary">{{ props.data.content }}</yk-text>
        </yk-space>
        <div class="comment-bar">
          <yk-space size="s">
            <p class="report control">
              <IconHintOutline />
              举报
            </p>
            <p class="control" @click="likeComment" :class="{ isLike: isPraise }">
              <IconLikeOutline />
              {{ props.data.praise || 0 }}
            </p>
          </yk-space>
        </div>
      </div>
    </yk-space>
  </div>
</template>

<style lang="less" scoped>
.comment {
  width: 100%;


  &-main {
    position: relative;
    flex: 1;

    &-name {
      color: @gray;
      font-weight: 600;
    }

    &-time {
      font-size: 12px;
      line-height: 1.62;
      color: @gray-6;
    }

  }

  &-bar {
    color: @gray-6;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 0 4px 8px;

    .isLike {
      color: @pcolor;
    }

    .report {
      display: none;
    }

    .control {
      cursor: pointer;
      transition: all .2s;
    }
  }

  &-main:hover {
    .comment-bar {
      .report {
        display: block;
      }
    }
  }
}
</style>