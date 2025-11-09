import { addPraiseApi, addPraiseCommentApi, deletePraiseApi, deletePraiseCommentApi } from "../api/praise";
import type { ReqLikeArticleFront, ReqLikeCommentFront } from "../utils/interface";
import { getFingerprint } from "../utils/loadfingerprint";
import { momentm } from "../utils/moment";

export const addPraise = async (data: ReqLikeArticleFront) => {
  //判断有没有存储文章指纹
  let fingerprint = await getFingerprint();
  const res = await addPraiseApi({
    articleId: data.articleId,
    userId: fingerprint || '',
    moment: momentm(new Date()),
  })
  if (res.code !== 200) {
    return { code: res.code, error: '文章点赞失败' };
  }
  return { code: res.code, data: res.data };
}

export const deletePraise = async (data: ReqLikeArticleFront) => {
  //判断有没有存储文章指纹
  let fingerprint = await getFingerprint();
  const res = await deletePraiseApi({
    articleId: data.articleId,
    userId: fingerprint || '',
  })
  if (res.code !== 200) {
    return { code: res.code, error: '取消文章点赞失败' };
  }
  return { code: res.code };
}

export const addPraiseComment = async (data: ReqLikeCommentFront) => {
  let fingerprint = await getFingerprint();
  const res = await addPraiseCommentApi({
    userId: fingerprint || '',
    commentId: data.commentId,
    moment: momentm(new Date()),
  })
  if (res.code !== 200) {
    return { code: res.code, error: '评论点赞失败' };
  }
  return { code: res.code, data: res.data };
}

export const deletePraiseComment = async (data: ReqLikeCommentFront) => {
  //判断有没有存储文章指纹
  let fingerprint = await getFingerprint();
  const res = await deletePraiseCommentApi({
    commentId: data.commentId,
    userId: fingerprint || '',
  })
  if (res.code !== 200) {
    return { code: res.code, error: '取消评论点赞失败' };
  }
  return { code: res.code };
}