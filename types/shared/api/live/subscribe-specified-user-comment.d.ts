import { AsyncAPI } from '../types';

/**
 * ### 订阅指定用户的文字评论
 */
export const subscribeSpecifiedUserComment: AsyncAPI<
  {
    /** 监听用户openUID */
    openUIDList: string[];
  },
  {
    errMsg: string;
  }
>;
