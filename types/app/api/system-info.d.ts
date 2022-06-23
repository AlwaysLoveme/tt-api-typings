import { AsyncAPI, SyncAPI } from './types';

interface SystemInfo {
  /** 操作系统版本 */
  system: string;
  /** 操作系统类型 */
  platform: string;
  /** 手机品牌 */
  brand: string;
  /** 手机型号 */
  model: string;
  /** 宿主 App 版本号 */
  version: string;
  /**
   * 宿主 APP 名称
   *
   * - Toutiao 今日头条
   * - Douyin 抖音（国内版)
   * - news_article_lite 今日头条（极速版)
   * - live_stream 火山小视频
   * - XiGua 西瓜
   * - PPX 皮皮虾
   */
  appName: string;
  /** 客户端基础库版本 */
  SDKVersion: string;
  /** 屏幕宽度 */
  screenWidth: number;
  /** 屏幕高度 */
  screenHeight: number;
  /** 可使用窗口宽度 */
  windowWidth: number;
  /** 可使用窗口高度 */
  windowHeight: number;
  /** 设备像素比 */
  pixelRatio: number;
  /** 状态栏的高度，单位 px */
  statusBarHeight: number;
  /** 在竖屏正方向下的安全区域 */
  safeArea: {
    /** 安全区域左上角横坐标 */
    left: number;
    /** 安全区域右下角横坐标 */
    right: number;
    /** 安全区域左上角纵坐标 */
    top: number;
    /** 安全区域右下角纵坐标 */
    bottom: number;
    /** 安全区域的宽度，单位逻辑像素 */
    width: number;
    /** 安全区域的高度，单位逻辑像素 */
    height: number;
  };
}

/**
 * ### 获取系统信息
 */
export const getSystemInfo: AsyncAPI<{}, SystemInfo>;

/**
 * ### 同步获取系统信息
 */
export const getSystemInfoSync: SyncAPI<[], SystemInfo>;
