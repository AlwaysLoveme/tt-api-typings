import { AsyncAPI } from '../types';

/**
 * ### 取消监听全部指定用户的文字评论
 */
export const unsubscribeAllSpecifiedUserComment: AsyncAPI<
  {},
  {
    errMsg: string;
  }
>;
