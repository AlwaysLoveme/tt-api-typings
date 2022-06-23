import { AsyncAPI } from '../types';

/**
 * ### 取消订阅全部内容的文字评论
 */
export const unsubscribeAllSpecifiedContentComment: AsyncAPI<
  {},
  {
    errMsg: string;
  }
>;
