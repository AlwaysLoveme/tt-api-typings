import { AsyncAPI } from './types';

/**
 * 关注小程序绑定的头条号
 *
 * 可以通过 tt.checkFollowState 接口获取当前关注状态
 */
export const followOfficialAccount: AsyncAPI<
  {},
  {
    /** 如果为 0 表示关注成功 */
    errCode: 0 | 1;
  }
>;
