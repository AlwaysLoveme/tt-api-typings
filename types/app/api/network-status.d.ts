import { SyncAPI } from './types';

type Callback = (res: {
  /** 网络类型 */
  networkType: 'wifi' | '2g' | '3g' | '4g' | 'unknown' | 'none';

  /** 当前是否有网络连接 */
  isConnected: boolean;
}) => void;

/**
 * ### 监听网络状态变化
 */
export const onNetworkStatusChange: SyncAPI<[callback: Callback]>;

/**
 * ### 取消监听网络状态变化
 */
export const offNetworkStatusChange: SyncAPI<[callback: Callback]>;
