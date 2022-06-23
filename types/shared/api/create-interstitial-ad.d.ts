import { SyncAPI } from "./types"

/**
 * ### 创建插屏广告组件
 *
 * 开发者可以在小程序中使用插屏广告获得收入。具体接入方式可参考 [抖音端插屏广告-接入指南](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/functional-plug-in/advertising-component-access-guide/chaping/)
 */
export const createInterstitialAd: SyncAPI<
  [{ adUnitId: string }],
  InterstitialAd
>

type Callback = (...args: any[]) => any

interface InterstitialAd {
  /** 显示插屏广告 */
  show: () => Promise<any>
  /** 加载插屏广告 */
  load: () => Promise<any>
  /** 销毁插屏广告实例 */
  destroy: () => Promise<any>
  /** 监听插屏广告加载事件 */
  onLoad: (fn: Callback) => void
  /** 取消监听插屏广告加载事件 */
  offLoad: (fn: Callback) => void
  /** 监听插屏错误事件 */
  onError: (fn: (data: { errMsg: string, errCode: number }) => void) => void
  /** 取消监听插屏错误事件 */
  offError: (fn: Callback) => void
  /** 监听插屏广告关闭事件 */
  onClose: (fn: (data: any) => void) => void
  /** 取消监听插屏广告关闭事件 */
  offClose: (fn: Callback) => void
}
