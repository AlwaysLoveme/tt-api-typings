import { AsyncAPI } from './types';

/**
 * 一键关注抖音号
 *
 * 可以通过 tt.followAwemeUser 接口一键关注
 */
export const followAwemeUser: AsyncAPI<
  {},
  {
    /** 如果为 true 表示已经关注，为 false 表示未关注 */
    followed: boolean;
  }
>;
