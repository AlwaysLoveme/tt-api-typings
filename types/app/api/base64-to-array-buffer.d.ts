import { SyncAPI } from './types';

/**
 * ### 将 Base64 字符串转成 【ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 对象。
 */
export const base64ToArrayBuffer: SyncAPI<
  [
    /** 要转化成 ArrayBuffer 对象的 Base64 字符串 */
    str: string,
  ],
  arrayBuffer
>;

interface arrayBuffer {
  /** 参数对应生成的 ArrayBuffer 对象 */
  obj: ArrayBuffer;
}
