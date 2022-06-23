import { AsyncAPI } from './types';

/**
 * ### 查看用户是否已关注小程序绑定的头条号。
 */
export const checkFollowState: AsyncAPI<
  {},
  {
    /** 是否已关注头条号 */
    result: boolean;
  }
>;
