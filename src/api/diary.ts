import service from "../utils/axios";
import type { ReqDiaryByDate, ResDiaryData } from "../utils/interface";

/**
 * 年月日获取日记信息
 * @param data 年月日对象
 * @returns 返回对应日记数据
 */
export const getDiaryByDateApi = async (data: ReqDiaryByDate) => {
  return await service.post('/gainDiaryDate', data) as ResDiaryData
}