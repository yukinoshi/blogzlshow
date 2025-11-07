import { baseImgUrl } from "../utils/env";

export const spellImage = (imgPath: string | undefined) => {
  return baseImgUrl + (imgPath || '');
}