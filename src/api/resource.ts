import service from "../utils/axios";
import type { Code, ReqResourcePage, ResResourceData } from "../utils/interface";

/**
 * 获取资源分页
 * @param data 资源的分页信息
 * @returns 返回资源分页
 */
export const getResourcePageApi = async (data: ReqResourcePage) => {
  return await service.post('/resource', data) as ResResourceData;
}
/**
 * 增加资源下载次数
 * @param id 资源ID
 * @returns 返回操作结果200成功
 */
export const addResourceDownloadNumApi = async (id: number) => {
  return await service.post('/downloadresource', { id }) as Code;
}