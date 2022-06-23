import { AsyncAPI, SyncAPI } from './types';

/**
 * ### 请求获取 Wi-Fi 列表（对应打开手机 Wi-Fi 配置可以扫描到的 Wi-Fi 列表）
 * 需配合 tt.onGetWifiList 使用，在 tt.onGetWifiList 注册的回调中返回 wifiList 数据。
 */
export const getWifiList: AsyncAPI;

/**
 * 使用获取 wifi 列表后通过该回调监听获取到 Wi-Fi 列表数据事件
 */
export const onGetWifiList: SyncAPI<
  [
    callback: (
      /** Wi-Fi 列表数据 */
      wifiList: {
        /** Wi-Fi 的 SSID */
        SSID: string;
        /** Wi-Fi 的 BSSID */
        BSSID: string;
        /** Wi-Fi 是否安全（iOS 由于系统原因暂不支持） */
        secure: boolean;
        /** Wi-Fi 信号强度（iOS 由于系统原因暂不支持） */
        signalStrength: number;
      }[],
    ) => void,
  ]
>;

/**
 * 取消监听获取到 Wi-Fi 列表数据事件
 */
export const offGetWifiList: SyncAPI<[callback: () => void]>;
