import { AsyncAPI } from '../types';

/**
 * ### 获取当前用户在小插件运行期间的评论次数
 */
export const getSelfCommentCountDuringPluginRunning: AsyncAPI<
  {},
  {
    errMsg: string;
    commentCount: number;
  }
>;
