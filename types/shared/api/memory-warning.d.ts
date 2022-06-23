import { SyncAPI } from './types';

/**
 * 监听内存不足的告警事件
 *
 * 当手机内存占用过高时，触发回调函数。该事件不会杀掉小程序, 建议开发者可以在接受到告警后释放不必要的资源
 *
 * Android 下有告警等级划分。
 */
export const onMemoryWarning: SyncAPI<
  [
    callback: (res: {
      /**
       * Android 机器上有此字段
       * - 5 TRIM_MEMORY_RUNNING_MODERATE
       * - 10 TRIM_MEMORY_RUNNING_LOW
       * - 15 TRIM_MEMORY_RUNNING_CRITICAL
       */
      level?: number;
    }) => void,
  ]
>;
