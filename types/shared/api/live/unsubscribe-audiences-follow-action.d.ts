import { AsyncAPI } from '../types';

/**
 * ### 取消订阅当前直播间观众的关注/取消关注行为
 */
export const unsubscribeAudiencesFollowAction: AsyncAPI<
  {},
  {
    errMsg: string;
  }
>;
