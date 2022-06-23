import { AsyncAPI } from './types';

/**
 * ### 滚动栈顶的页面到目标位置
 */
export const pageScrollTo: AsyncAPI<{
  /** 滚动位置, 单位 px */
  scrollTop: number;
  /**
   * 执行时长, 单位 ms
   *
   * 默认值 200
   */
  duration?: number;
}>;
