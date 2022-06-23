import { AsyncAPI } from '../types';

/**
 * ### 当前用户是否已关注主播
 */
export const isFollowingAnchor: AsyncAPI<
  {},
  {
    errMsg: string;
    isFollowing: boolean;
  }
>;
