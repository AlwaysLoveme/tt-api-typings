import { SyncAPI } from './types';

/**
 * 获取左上角logo/返回位置+ 右上角反馈+more+close布局位置信息。坐标信息以屏幕左上角为原点。
 */
export const getCustomButtonBoundingClientRect: SyncAPI<
  [],
  {
    leftIcon: {
      /** 宽度 */
      width: number; // Integer
      /** 高度 */
      height: number; // Integer
      /** 顶部位置 */
      top: number; // Integer
      /** 底部位置 */
      bottom: number; // Integer
      /** 右侧位置 */
      right: number; // Integer
      /** 左侧位置 */
      left: number; // Integer
    };
    capsule: {
      /** 宽度 */
      width: number; // Integer
      /** 高度 */
      height: number; // Integer
      /** 顶部位置 */
      top: number; // Integer
      /** 底部位置 */
      bottom: number; // Integer
      /** 右侧位置 */
      right: number; // Integer
      /** 左侧位置 */
      left: number; // Integer
    };
  }
>;
