import { AsyncAPI } from '../types';

interface LiveUserInfo {
  /** 用户的open UID */
  openUID: string;
  /** 用户的加密后昵称 */
  secNickname: string;
  /** 用户的加密后头像URL */
  secAvatarURL: string;
  /** 用户身份，anchor - 主播，audience - 观众 */
  role: string;
}

/**
 * ### 获取直播房间信息
 */
export const getLiveUserInfo: AsyncAPI<
  {},
  {
    /** "getLiveUserInfo:ok" */
    errMsg: string;
    /** 房间信息 */
    userInfo: LiveUserInfo;
  }
>;
