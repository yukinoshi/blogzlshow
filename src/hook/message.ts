import { sendMessageApi } from "../api/message";
import type { ReqsendMessageFront } from "../utils/interface";
import { momentm } from "../utils/moment";

const staticData = {
  userId: -1,
  userType: -1,
  moment: momentm(new Date())
}

export const sendMessage = async (data: ReqsendMessageFront) => {
  const res = await sendMessageApi({
    ...staticData,
    ...data
  })
  if (res.code !== 200) {
    return { code: res.code, message: '发送失败' }
  }
  return { code: 200, message: '感谢你的反馈' }
}
