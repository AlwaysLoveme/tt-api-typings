import { SyncAPI } from "./types"

/**
 * ### 将 [ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 对象转成 Base64 字符串
 */
export const arrayBufferToBase64: SyncAPI<
  [
    {
      /** 要转化成 Base64 字符串的 ArrayBuffer 对象 */
      obj: ArrayBuffer
    },
  ],
  {
    /** 参数对应生成的 Base64 编码的字符串 */
    base64: string
  }
>
