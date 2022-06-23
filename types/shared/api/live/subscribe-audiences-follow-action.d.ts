import { AsyncAPI } from '../types';

/**
 * ### 订阅当前直播间观众的关注/取消关注行为
 */
export const subscribeAudiencesFollowAction: AsyncAPI<
  {},
  {
    errMsg: string;
  }
>;
