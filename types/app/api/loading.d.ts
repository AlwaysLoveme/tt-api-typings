import { AsyncAPI } from './types';

/**
 * ### 显示灰色背景的 loading 提示框
 * 该提示框不会主动隐藏。
 */
export const showLoading: AsyncAPI<{
  /** 内容，最多显示 7 个汉字长度的文本 */
  title: string;
  /** 是否需要遮罩层，防止手势穿透 */
  mask?: boolean;
}>;

/** 隐藏 loading 提示框 */
export const hideLoading: AsyncAPI;
