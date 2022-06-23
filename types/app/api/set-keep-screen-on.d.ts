import { AsyncAPI } from './types';

/** ### 设置是否保持屏幕常亮状态 */
export const setKeepScreenOn: AsyncAPI<{
  /** 是否保持屏幕常亮 */
  keepScreenOn: boolean;
}>;
