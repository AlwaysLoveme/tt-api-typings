import { SyncAPI } from './types';

/**
 * ### 根据 <live-player /> 组件 id 创建可以控制组件的上下文 LivePlayerContext 对象
 */
export const createLivePlayerContext: SyncAPI<
  | [
      /** <live-player /> 组件的 id */
      id: string,
      /** 在自定义组件下，当前组件实例的 this，以操作组件内 <live-player /> 组件 */
      component: object,
    ]
  | [
      /** <live-player /> 组件的 id */
      id: string,
    ],
  LivePlayerContext
>;

interface LivePlayerContext {
  /** 用来控制进入全屏时画面朝向 0代表默认值，正常竖向 90代表屏幕逆时针90度 -90代表屏幕顺时针90度 */
  direction: number;
  /** 播放 */
  play: CallableFunction;
  /** 停止 */
  stop: CallableFunction;
  /** 静音 */
  mute: CallableFunction;
  /** 取消静音 */
  unmute: CallableFunction;
  /** 进入全屏 */
  requestFullScreen: CallableFunction;
  /** 退出全屏 */
  exitFullScreen: CallableFunction;
}
