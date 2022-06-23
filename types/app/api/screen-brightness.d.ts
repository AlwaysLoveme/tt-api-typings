import { AsyncAPI } from './types';

/** ### 设置屏幕亮度 */
export const setScreenBrightness: AsyncAPI<{
  /** 屏幕亮度值，范围 0 ～ 1。（0 最暗，1 最亮）	 */
  value: number;
}>;

/** ### 获取屏幕亮度 */
export const getScreenBrightness: AsyncAPI<
  {},
  {
    /** 屏幕亮度值，范围 0 ～ 1。（0 最暗，1 最亮）	 */
    value: number;
  }
>;
