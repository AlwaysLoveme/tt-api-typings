import { SyncAPI } from '../types';
interface FollowInfo {
  openUID: string;
  secNickname: string;
  secAvatarURL: string;
  action: number; //1-关注、2-取消关注
  timestamp: number;
}

interface Result {
  followInfoList: FollowInfo[];
}
/**
 * ### 监听接收指定的文字评论。
 */
export const onReceiveAudiencesFollowAction: SyncAPI<
  [callback: (res: Result) => void]
>;
