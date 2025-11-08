<script setup lang="ts">
</script>

<template>
  <div class="comment">
    <yk-space size="ss">
      <yk-avatar img-url="https://huohuo90.com/images/avatar.png"></yk-avatar>
      <div class="comment-main">
        <yk-space size="ss" dir="vertical">
          <div>
            <yk-text class="comment-main-name">访客</yk-text>
            <p class="comment-main-time">2024-06-01</p>
          </div>
          <yk-text type="secondary">这是评论的内容</yk-text>
        </yk-space>
        <div class="comment-bar">
          <yk-space size="s">
            <p class="report control">
              <IconHintOutline />
              举报
            </p>
            <p class="control">
              <IconLikeOutline />
              2
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