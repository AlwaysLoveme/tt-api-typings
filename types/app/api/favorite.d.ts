import { AsyncAPI } from './types';

/**
 * 在小程序内调起关注小程序的引导组件，用于引导用户关注小程序。
 */
export const showFavoriteGuide: AsyncAPI<{
  /** 引导组件类型，可以是 bar（底部弹窗）、tip（顶部气泡）*/
  type?: string;
  /** 弹窗文案，最多显示 12 个字符 */
  content?: string;
  /** 弹窗类型为 bar 时的位置参数，可以是 bottom（贴近底部）、overtab（悬于页面 tab 区域上方） */
  position?: string;
}>;
