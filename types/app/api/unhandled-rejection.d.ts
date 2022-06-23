import { SyncAPI } from './types';

/**
 * ### 监听未处理的 Promise 拒绝事件
 */
export const onUnhandledRejection: SyncAPI<
  [
    callback: (unhandledRejection: {
      /** 拒绝原因，一般是一个 Error 对象 */
      reason: unknown;
      /** 被拒绝的 Promise 对象 */
      promise: Promise<unknown>;
    }) => void,
  ]
>;

/**
 * ### 取消监听未处理的 Promise 拒绝事件
 */
export const offUnhandledRejection: SyncAPI<[callback: () => void]>;
