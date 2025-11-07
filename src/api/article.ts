import service from "../utils/axios";
import type { ReqGetArticle, ResArticleData } from "../utils/interface";

/**
 * 根据分页 标题简介内容模糊搜索 根据类别搜索文章0或者图库1 根据分类ID 搜索文章
 * @param data 搜索文章条件信息
 * @returns 返回所搜索的文章数据
 */
export const getArticleApi = async (data: ReqGetArticle) => {
  return await service.post('/article', data) as ResArticleData
}