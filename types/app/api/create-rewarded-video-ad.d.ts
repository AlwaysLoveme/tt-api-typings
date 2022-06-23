import { SyncAPI } from './types';

/**
 * ### 开发者可以在小程序中使用激励视频广告获得收入。
 * 具体接入方式可参考[抖音端激励视频广告接入说明](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/functional-plug-in/advertising-component-access-guide/vibrato-end-video-advertising-incentives/)
 */
export const createRewardedVideoAd: SyncAPI<
  [
    {
      /** 广告位 id */
      adUnitId: string;
    },
  ],
  RewardedVideoAd
>;

type Callback = (...args: any[]) => any;

interface RewardedVideoAd {
  /** 广告创建后默认是隐藏的，可以通过该方法显示广告 */
  show: () => Promise<any>;
  /** 当广告素材加载出现错误时，可以通过 load 方法手动加载 */
  load: () => Promise<any>;
  /** 绑定广告 load 事件的监听器 */
  onLoad: (fn: Callback) => void;
  /** 解除绑定 load 事件的监听器 */
  offLoad: (fn: Callback) => void;
  /** 绑定 error 事件的监听器 */
  onError: (fn: (data: { errMsg: string; errCode: number }) => void) => void;
  /** 解除绑定 error 事件的监听器 */
  onClose: (fn: (data: { isEnded: boolean }) => void) => void;
  /** 绑定 close 事件的监听器 */
  offClose: (fn: Callback) => void;
}
