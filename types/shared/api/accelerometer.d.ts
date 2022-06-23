import { AsyncAPI, SyncAPI } from './types';

/**
 * ### 开始监听加速度数据
 * 具体加速度数据通过注册tt.onAccelerometerChange的回调方法来获取
 */
export const startAccelerometer: AsyncAPI;

/**
 * ### 停止监听加速度数据
 */
export const stopAccelerometer: AsyncAPI;

/**
 * ### 监听加速度数据。
 * 回调的频率为 5 次 / 秒，暂不支持设置。接口调用后会开始监听，可通过tt.onStopAccelerometer停止监听。
 */
export const onAccelerometerChange: SyncAPI<
  [
    callback: (res: {
      /** X 轴数据 */
      x: number;
      /** Y 轴数据 */
      y: number;
      /** Z 轴数据 */
      z: number;
    }) => void,
  ]
>;
