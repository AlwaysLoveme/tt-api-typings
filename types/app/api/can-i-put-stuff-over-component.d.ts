import { SyncAPI } from "./types"

/**
 * ### 小程序中的一些组件是由客户端实现的，如 video、live-player、ad 等。
 * 如果开发者希望通过 css 等手段往这些组件的上方放置一些其他组件，是需要依赖小程序所在 App 具备一定能力才可以实现的。
 * 因此开发者可以使用本方法在小程序运行时判断某组件上方是否支持放置其他组件，并根据返回结果动态的决定小程序页面的实现方式。
 */
export const canIPutStuffOverComponent: SyncAPI<
  [
    /** 小程序组件标签名称，如"video"、"live-player"等, 对 canvas 组件的同层判断请见 [canvas 组件](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/foundation/tt-can-i-put-stuff-over-component/#canvas%E7%BB%84%E4%BB%B6) */
    componentName: string,
  ],
  {
    /** 返回值是一个布尔值，表示是否支持在该类型组件上放置其他组件 */
    res: boolean
  }
>
