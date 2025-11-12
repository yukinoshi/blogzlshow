import { getArticleApi, getArticleByIdApi } from "../api/article";
import type { ReqGetArticle } from "../utils/interface";
import { getFingerprint } from "../utils/loadfingerprint";

/**
 * 获取文章分页
 * @param req 传递获取对应的文章分页的参数
 * @returns 返回对应的文章分页数据
 */
export const getArticle = async (req: Partial<ReqGetArticle> = {}) => {
  // 合并默认参数和传入参数
  const payload: ReqGetArticle = { count: true, ...req } as ReqGetArticle;
  const res = await getArticleApi(payload);
  if (res.code !== 200) {
    return { code: res.code, error: res.data || '获取文章失败' };
  }
  return { data: res.data };
}

export const getArticleById = async (articleId: number) => {
  const fingerprint = await getFingerprint();
  const res = await getArticleByIdApi(articleId, fingerprint);
  if (res.code !== 200) {
    return { code: res.code, error: res.data || '获取文章失败' };
  }
  return { data: res.data };
}