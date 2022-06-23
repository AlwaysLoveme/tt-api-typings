import { AsyncAPIWithHandler } from './types';

/**
 * ### 客户端直接发起一个 HTTPS GET 请求, 下载网络文件到本地临时目录
 *
 * 单次下载允许的最大文件为 50MB
 *
 * 网络相关的 API 在使用前需要配置域名白名单。请参考网络请求使用说明
 */
export const downloadFile: AsyncAPIWithHandler<
  {
    /** 文件地址 */
    url: string;
    /** 请求 Header */
    header?: Record<string, string>;
  },
  {
    /** 文件本地路径 */
    tempFilePath: string;
    /** 返回 HTTP 状态码 */
    statusCode: number;
  },
  DownloadTask
>;

interface DownloadTask {
  /** 中断下载任务 */
  abort: () => void;

  /** 监听下载任务 */
  onProgressUpdate: (
    callback: (res: {
      /** 下载进度 */
      progress: number;
      /** 已经下载的数据长度，单位byte */
      totalBytesWritten: number;
      /** 预期需要下载的数据总长度，单位byte */
      totalBytesExpectedToWrite: number;
    }) => void,
  ) => void;
}
