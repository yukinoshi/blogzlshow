import service from "../utils/axios";
import type { ReqDiary, ReqDiaryByDate, ResDiaryData, ResDiaryDataPage } from "../utils/interface";

/**
 * 获取日记分页信息
 * @param params 请求日记分页信息
 * @returns 返回日记分页信息
 */
export const getDiaryApi = async (params: ReqDiary) => {
  return await service.post('/diary', params) as ResDiaryDataPage
}

/**
 * 年月日获取日记信息
 * @param data 年月日对象
 * @returns 返回对应日记数据
 */
export const getDiaryByDateApi = async (data: ReqDiaryByDate) => {
  return await service.post('/gainDiaryDate', data) as ResDiaryData
}