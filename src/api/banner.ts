import service from "../utils/axios";
import type { BannerImageRes } from "../utils/interface";

export const getBannerImagesApi = async () => {
  return await service.post("/banner") as BannerImageRes;
};
