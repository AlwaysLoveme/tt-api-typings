import { SyncAPI } from './types';

/**
 * ### 关闭对窗口大小的监听
 */
export const offWindowResize: SyncAPI<
  [],
  {
    offWindowResize: (callback: () => void) => void;
  }
>;
