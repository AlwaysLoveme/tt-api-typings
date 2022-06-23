import { SyncAPI } from './types';

/**
 * ### 监听小程序切前台事件。
 * 该事件与 App.onShow 的回调参数一致。
 */
export const onAppShow: SyncAPI<[callback: CallableFunction]>;

/**
 * ### 卸载监听小程序切前台事件。
 */
export const onAppHide: SyncAPI<[callback: CallableFunction]>;
