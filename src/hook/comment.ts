import { addCommentApi, getCommentsByArticleIdApi } from "../api/comment"
import type { ReqAddComment } from "../utils/interface";
import { getFingerprint } from "../utils/loadfingerprint";

/**
 * 根据文章id获取文章所有评论数据
 * @param articleId 文章id
 * @returns 返回文章所有评论数据
 */
export const getCommentData = async (articleId: number) => {
  const fingerprint = await getFingerprint();
  const res = await getCommentsByArticleIdApi(articleId, fingerprint);
  if (res.code !== 200) {
    return { code: res.code, error: res.data || '获取评论失败' };
  }
  return { data: res.data };
}

/**
 * 提交评论
 * @param data 提交评论信息
 * @returns 返回code200代表成功
 */
export const addComment = async (data: ReqAddComment) => {
  // 调用添加评论的API
  const res = await addCommentApi(data);
  if (res.code !== 200) {
    return { code: res.code, error: '添加评论失败' };
  }
  return { code: res.code, data: res.data};
}