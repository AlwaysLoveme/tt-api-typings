import { AsyncAPI } from './types';

/**
 * ### 返回到跳转来的上一个小程序。
 */
export const navigateBackMiniProgram: AsyncAPI<{
  /** 需要返回给上一个小程序的数据，上一个小程序可在 App.onShow 中获取到这份数据 */
  extraData?: object;
}>;
