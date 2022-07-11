import { SyncAPI } from "./types"

/**
 * ### 判断小程序的 API，回调，参数，组件等是否在当前版本可用。
 * ```
 * // 对象的属性或方法
 * tt.canIUse("UpdateManager");
 * tt.canIUse("Stats.isDirectory");
 *
 * // 接口参数、回调或者返回值
 * tt.canIUse("exitMiniProgram");
 * tt.canIUse("getLaunchOptionsSync.return.path");
 * tt.canIUse("getSystemInfo.success.screenWidth");
 * tt.canIUse("showToast.object.title");
 * tt.canIUse("onCompassChange.callback.direction");
 * tt.canIUse("request.object.method.GET");
 *
 * // 组件的属性
 * tt.canIUse("swiper");
 * tt.canIUse("text.selectable");
 * tt.canIUse("button.open-type.contact");
 * ```
 */
export const canIUse: SyncAPI<[schema: string], boolean>
