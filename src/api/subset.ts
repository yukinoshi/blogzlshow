import service from "../utils/axios";
import type { ReqGetSubset, ReqGetSubsetById, ResSubsetData } from "../utils/interface";

export const getSubsetApi = async (data: ReqGetSubset) => {
  return await service.post('/subset', data) as ResSubsetData
}

export const getSubsetByIdApi = async (data: ReqGetSubsetById) => {
  return await service.post('/gainSubset', data) as ResSubsetData
}