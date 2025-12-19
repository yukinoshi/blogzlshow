import service from "../utils/axios";
import type { AiReplyData, ReqAiSummary } from "../utils/interface";
/**
 * 获取AI回复
 * @param message 用户输入的信息
 * @returns AI回复内容
 */
export const getAiReplyApi = async (params: ReqAiSummary) => {
  return await service.post('/aireply', params) as AiReplyData;
}