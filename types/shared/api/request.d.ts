import { AsyncAPIWithHandler } from './types';

interface RequestTask {
  abort: () => void;
}

/**
 * ### 发起一个网络请求
 *
 * 网络相关的 API 在使用前需要配置域名白名单
 *
 * 请参考网络请[求使用说明](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/other/network-request-reference/)
 */
export const request: AsyncAPIWithHandler<
  {
    /** 请求地址 */
    url: string;
    /**
     * 请求 Header
     *
     * referer 不可设置
     *
     * 默认值 {"content-type": "application/json"} */
    header?: object;
    /** 网络请求方法, 默认值 GET  */
    method?: 'GET' | 'POST' | 'OPTIONS' | 'PUT' | 'HEAD' | 'DELETE';
    /**
     * 请求的参数
     * - POST/PUT 请求时, 会附加在 HTTP Entity 里
     * - 非 POST/PUT 请求时, 会以 Query 的形式附加在 URL 上
     */
    data?: object | ArrayBuffer;
    /** 期望返回的数据类型, 默认值 json */
    dataType?: string;
    /** 默认值  text */
    responseType?: string;
  },
  {
    /** 返回的 HTTP 状态码 */
    statusCode: number;
    /** 返回的 HTTP Response Header */
    header: Record<string, string>;
    /** 返回的数据，类型取决于 dataType 和 responseType 参数 */
    data: object | string | ArrayBuffer;
  },
  RequestTask
>;
