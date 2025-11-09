import service from "../utils/axios";
import type { Code, ReqLikeArticle, ReqLikeComment, ReqNoLikeArticle, ReqNoLikeComment, Res } from "../utils/interface";

/**
 * 文章点赞
 * @param data 点赞那个文章数据
 * @returns 返回点赞结果code 200成功
 */
export const addPraiseApi = async (data: ReqLikeArticle) => {
  return await service.post('/addPraise', data) as Res;
}
/**
 * 取消文章点赞
 * @param data 取消点赞那个文章数据
 * @returns 返回取消结果
 */
export const deletePraiseApi = async (data: ReqNoLikeArticle) => {
  return await service.post('/deletePraise', data) as Code;
}
/**
 * 评论点赞
 * @param data 点赞那个评论数据
 * @returns 返回点赞结果 200成功
 */
export const addPraiseCommentApi = async (data: ReqLikeComment) => {
  return await service.post('/likecomment', data) as Res;
}
/**
 * 取消评论点赞
 * @param data 取消点赞那个文章数据
 * @returns 返回取消结果
 */
export const deletePraiseCommentApi = async (data: ReqNoLikeComment) => {
  return await service.post('/deletelikecomment', data) as Code;
}