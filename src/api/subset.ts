import service from "../utils/axios";
import type { ReqGetSubsetById, ResSubsetData } from "../utils/interface";

export const getSubsetByIdApi = async (data: ReqGetSubsetById) => {
  return await service.post('/gainSubset', data) as ResSubsetData
}