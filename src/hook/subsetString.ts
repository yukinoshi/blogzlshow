import { getSubsetByIdApi } from "../api/subset";
import type { ReqGetSubsetById } from "../utils/interface";

const getSubset = async (subset: ReqGetSubsetById) => {
  const res = await getSubsetByIdApi(subset);
  return res;
}

export const subsetString = async (subset: ReqGetSubsetById) => {
  const res = await getSubset(subset)
  const Name = res?.data?.list?.[0]?.subset_name ?? ''
  return Name;
}