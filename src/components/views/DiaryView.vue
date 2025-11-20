<script setup lang="ts">
import { onMounted } from 'vue';
import { FeedBack, NextPageBar } from '../bar';
import DiaryList from '../diary/diary-list.vue';
import DiaryItem from '../diary/diary-item.vue';
import { useFeedback } from '../../hook/feedback';
import { useDiary } from '../../hook/diary';

const pageSize = 4;

const { username, comment_content, isSubmit, submitFeedback } = useFeedback();

const { diaryDates, hasMore, RenderDiary, fetchDiary, loadMore, changeDiary } = useDiary({ pageSize })

onMounted( async () => {
  await fetchDiary({ includeCount: true, reset: true });
  console.log(RenderDiary.value);
});
</script>

<template>
  <div class="layout-inner">
    <div class="share-view">
      <div class="share">
        <yk-space class="diary" :size="56">
          <div class="diary-left">
            <yk-space :size="56" dir="vertical">
              <yk-scrollbar style="height: 680px;">
                <yk-space size="m" dir="vertical" align="center">
                  <diary-list @change-diary="changeDiary" :diary="item" v-for="item in diaryDates" />
                  <NextPageBar :hasMore="hasMore" @nextPage="loadMore" style="padding-top: 0;" />
                </yk-space>
              </yk-scrollbar>
              <FeedBack v-model:comment_content="comment_content" v-model:username="username" :isSubmit="isSubmit"
                @submitComment="submitFeedback" :width="392" class="feedback" />
            </yk-space>
          </div>
          <DiaryItem v-if="RenderDiary" :diary="RenderDiary" style="height: 935px;"></DiaryItem>
        </yk-space>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.diary {
  padding-top: 24px;

  &-left {
    width: 424px;

    .feedback {
      background-color: @bg-color-m;
      border-radius: 16px;
      padding: 16px;
    }
  }
}
</style>