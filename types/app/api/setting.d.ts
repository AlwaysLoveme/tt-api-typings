import { AsyncAPI } from './types';

interface AuthSetting {
  /**
   * 是否授权用户信息
   *
   * 对应接口 tt.getUserInfo
   */
  'scope.userInfo'?: boolean;

  /**
   * 是否授权地理位置
   *
   * 对应接口 tt.getLocation
   */
  'scope.userLocation'?: boolean;

  /**
   * 是否授权通讯地址
   *
   * 对应接口 tt.chooseAddress
   */
  'scope.address'?: boolean;

  /**
   * 是否授权录音功能
   *
   * 对应接口: tt.getRecorderManager.start
   */
  'scope.record'?: boolean;

  /**
   * 是否授权保存到相册
   *
   * - tt.saveImageToPhotosAlbum
   * - tt.saveVideoToPhotosAlbum
   */
  'scope.album'?: boolean;

  /** 是否授权摄像头
   *
   * 对应接口:
   * - tt.scanCode
   * - tt.chooseImage
   * - tt.chooseVideo
   */
  'scope.camera'?: boolean;
}

/**
 * ### 获取用户已经授权过的配置
 */
export const getSetting: AsyncAPI<
  {},
  {
    /** 授权结果 */
    authSetting: AuthSetting;
  }
>;

/**
 * ### 打开设置页面, 返回用户设置过的授权结果
 */
export const openSetting: AsyncAPI<
  {},
  {
    /** 授权结果 */
    authSetting: AuthSetting;
  }
>;
