import { AsyncAPI, SyncAPI } from './types';

/**
 * ### 监听罗盘数据变化事件
 *
 * 接口调用后会自动开始监听，可使用 tt.stopCompass 停止监听
 *
 * 罗盘数据会在用户手机如下操作发生改变(频率 5 次/秒)
 *  - 朝向变化
 *  - 加速前进
 *  - 加速后退
 *  - 摇一摇
 */
export const onCompassChange: SyncAPI<
  [
    (res: {
      /** 方向 */
      direction?: number;
    }) => void,
  ]
>;

/**
 * ### 取消监听罗盘数据变化事件
 */
export const offCompassChange: SyncAPI<[(...args: any[]) => void]>;

/**
 * ### 开始监听罗盘数据
 *
 * 罗盘数据会在用户手机如下操作发生改变(频率 5 次/秒)
 *  - 朝向变化
 *  - 加速前进
 *  - 加速后退
 *  - 摇一摇
 */
export const startCompass: AsyncAPI;

/**
 * ### 停止监听罗盘数据
 */
export const stopCompass: AsyncAPI;
