// 接口规范：https://bytedance.feishu.cn/docs/doccnUXGoRzT4FoEGEvgLkCSNqf#4RNMEq
import { AsyncAPI } from './types';

interface UserInfo {
  /** 用户头像 */
  avatarUrl: string;
  /** 用户名 */
  nickName: string;
  /** 用户性别，0: 未知；1:男性；2:女性 */
  gender: number;
  /** 用户城市 */
  city: string;
  /** 用户省份 */
  province: string;
  /** 用户国家 */
  country: string;
  /** 用户语言，目前为空 */
  language: string;
}

/**
 * ### 获取已登录用户的基本信息
 *
 * 页面产生点击事件后才可调用，每次调用都会弹出授权提示窗，若用户同意，则会返回用户的真实数据。
 */
export const getUserProfile: AsyncAPI<
  {},
  {
    /** "getUserProfile:ok" */
    errMsg: string;
    /** userInfo 的 JSON 字符串形式 */
    rawData: string;
    /** 用户信息 */
    userInfo: UserInfo;
    /** 用于校验用户信息是否被篡改，请参考文档 */
    signature: string;
    /** 已加密用户数据，不包含 openId、unionId，如需解密数据请参考文档 */
    encryptedData: string;
    /** 加密算法参数 */
    iv: string;
  }
>;
