import service from "../utils/axios";
import type { VisitsData } from "../utils/interface";

/**
 * 获取访问量数据
 * @returns 返回获取的访问量
 */
export const getVisitDataApi = async () => {
  return await service.post('/visits') as VisitsData;
}

export const addVisitDataApi = async () => {
  return await service.post('/recordVisit') as VisitsData;
}