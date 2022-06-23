import { SyncAPI } from "./types"

/**
 * 监听小程序切前台事件。该事件与 App.onShow 的回调参数一致。
 */
export const onAppShow: SyncAPI<
  [
    (res: {
      /** 小程序切前台的路径 (代码包路径) */
      path: string
      /** 小程序切前台的场景值 */
      scene: number
      /** 小程序切前台的 query 参数 */
      query: object
      /** 来源信息，从另一个小程序或 App 进入小程序时返回，否则返回 {}。 */
      referrerInfo: {
        /** 来源小程序的 appId */
        appId: string
        /** 来源小程序传过来的数据 */
        extraData: object
      }
    }) => void,
  ]
>

/**
 * 取消监听小程序进前台事件。
 */
export const offAppShow: SyncAPI<[CallableFunction]>

/**
 * 监听小程序切后台事件。该事件与 App.onHide 的回调时机一致。
 */
export const onAppHide: SyncAPI<[CallableFunction]>

/**
 * 取消监听小程序切后台事件。
 */
export const offAppHide: SyncAPI<[CallableFunction]>

/**
 * 监听小程序错误事件，如脚本错误或 API 调用报错等。该事件与 App.onError 的回调时机与参数一致。
 */
export const onError: SyncAPI<
  [
    (
      /** 错误信息 */
      error: string,
    ) => void,
  ]
>

/**
 * 取消监听小程序错误事件。
 */
export const offError: SyncAPI<[callback?: CallableFunction]>
