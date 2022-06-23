import { AsyncAPI } from './types';

/**
 * ### 跳转到分享的视频播放页面。
 */
export const navigateToVideoView: AsyncAPI<{
  /** tt.shareAppMessage分享视频成功后返回 */
  videoId: string;
}>;
