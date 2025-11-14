import service from "../utils/axios";
import type { Code, ReqsendMessage } from "../utils/interface";

/**
 * 发送私信反馈
 * @param data 反馈私信内容
 * @returns 返回code是否成功
 */
export const sendMessageApi = async (data: ReqsendMessage) => {
  return await service.post('/sendMessage', data) as Code
}