import { AsyncAPI } from './types';

/**
 * ### 设置系统剪贴板内容
 * 可以和tt.getClipboardData配套使用。
 */
export const setClipboardData: AsyncAPI<{
  /** 剪贴板的内容 */
  data: string;
}>;

/**
 * ### 获取系统剪贴板内容
 */
export const getClipboardData: AsyncAPI<
  {},
  {
    /** 剪贴板的内容 */
    data: string;
  }
>;
