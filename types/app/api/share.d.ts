import { AsyncAPI } from './types';

/**
 * ### 显示当前小程序页面的转发按钮。
 * 转发按钮位于小程序页面右上角的“更多”中。
 */
export const showShareMenu: AsyncAPI<{
  /**
   * 设置分享类型
   */
  menus?: ('share' | 'record')[];
}>;

/** ### 隐藏转发按钮。 */
export const hideShareMenu: AsyncAPI<{
  /**
   * 设置分享类型
   */
  menus?: ('share' | 'record')[];
}>;
