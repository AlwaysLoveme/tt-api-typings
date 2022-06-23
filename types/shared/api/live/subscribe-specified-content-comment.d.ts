import { AsyncAPI } from '../types';

/**
 * ### 订阅指定内容的文字评论
 */
export const subscribeSpecifiedContentComment: AsyncAPI<
  {
    /** 关键字列表 */
    keyWordList: string[];
  },
  {
    errMsg: string;
  }
>;
