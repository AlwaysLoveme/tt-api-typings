import { AsyncAPI } from './types';
/**
 * ### 显示灰色背景的消息提示框，用以提供成功、警告和错误等反馈信息
 */
export const showToast: AsyncAPI<{
  /** 标题 */
  title: string;
  /** 图标, 默认值 success */
  icon?: 'success' | 'loading' | 'none' | 'fail';
  /** 默认 1500ms */
  duration?: number;
}>;

/** ### 隐藏灰色背景的消息提示框 */
export const hideToast: AsyncAPI;
