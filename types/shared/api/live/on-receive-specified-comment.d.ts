import { SyncAPI } from '../types';
interface Comment {
  openUID: string;
  secNickname: string;
  secAvatarURL: string;
  content: string;
  timestamp: number;
}

interface CommentResult {
  commentList: Comment[];
}
/**
 * ### 监听接收指定的文字评论。
 */
export const onReceiveSpecifiedComment: SyncAPI<
  [callback: (res: CommentResult) => void]
>;
