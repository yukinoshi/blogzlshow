import { computed, ref, getCurrentInstance } from "vue"
import { sendMessage } from "./message"
import { momentm } from "../utils/moment"
import { addComment } from "./comment"
import type { commentData } from "../utils/interface"

type CommentReq = {
  articleId?: number;
}

export const useFeedback = (options: CommentReq = {}) => {
  const proxy: any = getCurrentInstance()?.proxy
  const username = ref<string>('访客')
  const comment_content = ref<string>('')
  const effectiveId = ref<number | string>(options.articleId || -1)
  const comments = ref<commentData[]>([])
  const isSubmit = computed(() => {
    return !(comment_content.value.length > 0);
  })

  const submitFeedback = async () => {
    const res = await sendMessage({
      userName: username.value,
      content: comment_content.value,
    })
    if (res.code === 200) {
      proxy.$message({ type: 'success', message: res.message });
    } else {
      proxy.$message({ type: 'warning', message: res.message });
    }
    comment_content.value = ''
  }

  const submitComment = async () => {
    const res = await addComment({
      articleId: Number(effectiveId.value),
      userName: username.value,
      content: comment_content.value,
      moment: momentm(new Date())
    })
    if (res.code != 200) {
      proxy.$message({ type: 'warning', message: '评论失败，请稍后重试' });
    } else {
      comments.value.push({
        id: res.data!, // 使用后端返回的评论 ID
        article_id: Number(effectiveId.value),
        user_name: username.value,
        content: comment_content.value,
        moment: momentm(new Date()),
        praise: 0,
        isPraise: false,
        user_id: '-1',
        complaint: 0,
        isread: 0
      });
    }
    comment_content.value = '';
  }

  return {
    username,
    comment_content,
    isSubmit,
    comments,
    submitFeedback,
    submitComment
  }
}