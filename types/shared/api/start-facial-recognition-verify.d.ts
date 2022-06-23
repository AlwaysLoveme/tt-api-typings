import { AsyncAPI } from './types';

/**
 * ### 人脸识别能力
 *
 * 更多请[查看文档](https://bytedance.feishu.cn/docs/doccnpG2GoXvsvYhBkSFLaesSUE#)
 */
export const startFacialRecognitionVerify: AsyncAPI<
  {
    /** 姓名 */
    name: string;
    /** 身份证号码 */
    idCardNumber: string;
  },
  {
    /** 错误码 */
    errCode: number;
    /** 第三方可以选择根据这个凭据获取相关信息 */
    verifyResult: string;
  }
>;
