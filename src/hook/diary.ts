import { getDiaryByDateApi } from "../api/diary";
import type { ReqDiaryByDate } from "../utils/interface";

export const getDiaryByDate = async (data: ReqDiaryByDate) => {
  const res = await getDiaryByDateApi(data);
  if (res.code !== 200) {
    return { code: res.code, data: res.data || '获取日记失败' };
  }
  return { code: res.code, data: res.data };
}