import { SyncAPI } from './types';

/**
 * ### 监听用户主动截屏事件
 * 用户使用系统截屏按键截屏时触发此事件，只能添加一个监听器。
 */
export const onUserCaptureScreen: SyncAPI<[() => void]>;

/**
 * ### 取消监听用户主动截屏事件
 * 卸载通过 tt.onUserCaptureScreen 注册的截屏事件监听函数。
 */
export const offUserCaptureScreen: SyncAPI<[() => void]>;
