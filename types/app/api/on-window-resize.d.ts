import { SyncAPI } from './types';

/**
 * ### 开启一个监听窗口大小的监听器
 */
export const onWindowResize: SyncAPI<
  [],
  {
    /** 监听窗口大小 */
    windowResize: (
      callback: (res: {
        /** 窗口宽度 */
        windowWidth: number;
        /** 窗口高度 */
        windowHeight: number;
      }) => void,
    ) => void;
  }
>;
