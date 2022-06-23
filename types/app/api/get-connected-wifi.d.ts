import { AsyncAPI } from './types';

/**
 * ### 获取设备当前所连的 WiFi 信息
 */
export const getConnectedWifi: AsyncAPI<
  {},
  {
    /** Wi-Fi 的 SSID */
    SSID: string;
    /** Wi-Fi 的 BSSID */
    BSSID: string;
    /** Wi-Fi 是否安全（iOS 由于系统原因暂不支持） */
    secure: boolean;
    /** Wi-Fi 信号强度（iOS 由于系统原因暂不支持） */
    signalStrength: number;
  }
>;
