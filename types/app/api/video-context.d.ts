import { SyncAPI } from './types';

/**
 * ### 根据 `<video />` 组件 `id` 创建可以控制组件的上下文 `VideoContext` 对象
 */
export const createVideoContext: SyncAPI<
  [id: string, component?: object],
  VideoContext
>;

interface VideoContext {
  /** 播放视频 */
  play: () => void;

  /** 暂停视频 */
  pause: () => void;
  /** 停止视频 */

  stop: () => void;
  /**
   * 视频点播
   *
   * @param position 跳转到指定位置, 单位为秒
   */
  seek: (position: number) => void;

  /** 进入全屏 */
  requestFullScreen: () => void;

  /** 退出全屏 */
  exitFullScreen: () => void;
}
