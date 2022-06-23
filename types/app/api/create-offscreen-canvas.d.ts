import { SyncAPI } from './types';

/**
 * ### 创建离屏 canvas 实例
 */
export const createOffscreenCanvas: SyncAPI<
  [],
  /** 离屏 canvas 实例，可通过 tt.createOffscreenCanvas 创建 */
  OffscreenCanvas
>;

interface OffscreenCanvas {
  /** 该方法返回 OffscreenCanvas 的绘图上下文 */
  getContext: (
    /** canvas 类型，可取值 2d 或 webgl */
    type: '2d' | 'webgl',
  ) => any;
}
