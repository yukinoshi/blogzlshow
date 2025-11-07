import { getArticleApi } from "../api/article";
import type { ReqGetArticle } from "../utils/interface";

const data: ReqGetArticle = {
  nowPage: 1,
  pageSize: 4,
  classify: 0,
  state: 1,
  count: true
}


export const getArticle = async (req: Partial<ReqGetArticle> = {}) => {
  // 合并默认参数和传入参数
  const payload: ReqGetArticle = { ...data, ...req } as ReqGetArticle;
  const res = await getArticleApi(payload);
  if (res.code !== 200) {
    return {code: res.code, error: res.data || '获取文章失败'};
  }
  return {data: res.data};
}