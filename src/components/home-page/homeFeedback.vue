<script setup lang="ts">
import { ref, watch, getCurrentInstance } from 'vue';
import { sendMessage } from '../../hook/message';

const content = ref('');

const userName = ref('');

const isSubmit = ref(true);

const proxy: any = getCurrentInstance()?.proxy


const submitComment = async () => {
  const res = await sendMessage({
    userName: userName.value,
    content: content.value,
  })
  if (res.code !== 200) {
    proxy.$message?.error(res.message || '发送失败，请稍后重试～');
  } else {
    proxy.$message?.success(res.message || '发送成功，感谢您的反馈～');
    content.value = '';
    userName.value = '';
  }
}

watch([content, userName], ([newContent, newUserName]) => {
  if (newContent.trim() !== '' && newUserName.trim() !== '') {
    isSubmit.value = false;
  } else {
    isSubmit.value = true;
  }
})
</script>

<template>
  <div class="feedback">
    <yk-space dir="vertical" size="m" class="feedback-main">
      <div class="feedback-title">
        <yk-text style="font-size: 24px; padding-right: 6px; font-weight: 600;">私信/反馈</yk-text>
        <yk-text>感谢您的反馈～</yk-text>
      </div>
      <div>
        <p class="input-title">联系方式</p>
        <yk-input style="width: 480px;" placeholder="微信/QQ/邮箱" v-model="userName"></yk-input>
      </div>
      <div>
        <p class="input-title">反馈意见</p>
        <yk-text-area style="width: 600px;" placeholder="请输入~" :auto-size="{
          minRows: 4,
          maxRows: 10,
        }" v-model="content"></yk-text-area>
      </div>
      <div class="feedback-submit">
        <yk-button type="primary" :disabled="isSubmit" size="m" @click="submitComment">发送</yk-button>
      </div>
    </yk-space>
  </div>
</template>

<style lang="less" scoped>
.feedback {
  width: 1480px;
  display: flex;
  justify-content: center;
  margin-bottom: 56px;

  &-main {
    background-color: @bg-color-m;
    border-radius: 24px;
    padding: 40px;
  }

  .input-title {
    font-size: 16px;
    line-height: 1.5;
    padding-bottom: 8px;
  }

  &-submit {
    width: 100%;
    display: flex;
    justify-content: end;

    .yk-button {
      background-color: @lcolor-light;
    }

    .yk-button:hover {
      background-color: @gray-9;
    }
  }
}
</style>