import { AsyncAPIWithHandler } from './types';

/**
 * ### 将本地文件上传到网络
 *
 * **在使用前需要配置域名白名单**
 *
 * 客户端发起一个 HTTPS POST 请求，其中 Content-Type 为 `multipart/form-data`
 */
export const uploadFile: AsyncAPIWithHandler<
  {
    /** 目标地址 */
    url: string;
    /** 本地文件路径 */
    filePath: string;
    /** HTTP 请求的文件名 */
    name: string;
    /** 请求 Header ，不能设置 referer 和 user-agent */
    header?: Record<string, string>;
    /** 额外参数 */
    formData?: Record<string, string>;
  },
  {
    /** 返回数据 */
    data: string;
    /** 返回 HTTP 状态码 */
    statusCode: number;
  },
  UpdateTask
>;

interface UpdateTask {
  onProgressUpdate: (
    callback: (data: {
      /** 上传进度 */
      progress: number;
      /** 已经上传的数据长度，单位byte */
      totalBytesSent: number;
      /** 预期需要上传的数据总长度，单位byte */
      totalBytesExpectedToSend: number;
    }) => void,
  ) => void;

  /** 中断上传任务 */
  abort: () => void;
}
