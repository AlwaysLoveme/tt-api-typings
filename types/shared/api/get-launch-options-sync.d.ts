import { SyncAPI } from './types';

/**
 * ### 获取小程序启动时的参数
 *
 * 其值与 App.onLaunch 方法传入的参数一致，并且不会随着小程序使用而发生变化
 */
export const getLaunchOptionsSync: SyncAPI<
  [],
  {
    /** 小程序启动页面路径 */
    path: string;
    /** 小程序启动场景值 */
    scene: string;
    /** 小程序启动参数 */
    query: Record<string, unknown>;
    /**
     * 来源信息
     * 从另一个小程序进入小程序时返回。否则返回 {}
     */
    referrerInfo: Record<string, unknown>;
    /**
     * 唤起小程序页面的来源方式
     * - 10 表示用户点击小程序入口 schema
     * - 0 表示其它方式，比如前后台切换
     */
    showFrom?: 0 | 10;
  }
>;
