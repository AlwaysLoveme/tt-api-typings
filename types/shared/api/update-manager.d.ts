import { SyncAPI } from './types';

/**
 * ### 获取全局唯一的版本更新管理器，用于管理小程序更新
 */
export const getUpdateManager: SyncAPI<
  [],
  {
    /** 当新版本下载完成，调用该方法会强制当前小游戏应用上新版本并重启 */
    applyUpdate: CallableFunction;
    /** 当向字节小程序后台请求完新版本信息，会进行回调 */
    onCheckForUpdate: onCheckForUpdateCallback;
    /** 当新版本下载失败，会进行回调 */
    onUpdateFailed: onUpdateFailedCallback;
    /** 当新版本下载完成，会进行回调 */
    onUpdateReady: CallableFunction;
  }
>;

type onCheckForUpdateCallback = (
  fn: (res: {
    /** 是否有新的版本 */
    hasUpdate: boolean;
  }) => void,
) => void;

type onUpdateFailedCallback = (
  fn: (
    /** 版本更新失败原因 */
    err: string,
  ) => void,
) => void;
