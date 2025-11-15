import { getSubsetApi, getSubsetByIdApi } from "../api/subset";
import type { ReqGetSubset, ReqGetSubsetById } from "../utils/interface";

export const getSubset = async (data: ReqGetSubset) => {
  const res = await getSubsetApi(data);
  if (res.code !== 200) {
    return [];
  }
  return res?.data?.list || [];
}

const getSubsetById = async (subset: ReqGetSubsetById) => {
  const res = await getSubsetByIdApi(subset);
  return res;
}

export const subsetString = async (subset: ReqGetSubsetById) => {
  const res = await getSubsetById(subset)
  const Name = res?.data?.list?.[0]?.subset_name ?? ''
  return Name;
}