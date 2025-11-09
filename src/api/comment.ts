import service from "../utils/axios";
import type { Code, ReqAddComment, RescommentData } from "../utils/interface";

/**
 * 根据文章id获取文章所有的评论
 * @param articleId 文章id
 * @returns 返回文章的所有评论数据
 */
export const getCommentsByArticleIdApi = async (articleId: number, fingerprint: string) => {
  return await service.post('/getcomment', { articleId, fingerprint }) as RescommentData;
}

/**
 * 提交评论
 * @param data 提交评论信息
 * @returns 返回code200代表成功
 */
export const addCommentApi = async (data: ReqAddComment) => {
  return await service.post('/addcomment', data) as Code;
}