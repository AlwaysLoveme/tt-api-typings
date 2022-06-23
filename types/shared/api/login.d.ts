import { AsyncAPI } from './types';

/**
 * ### 调用该 API 可以获取用户临时的登录凭证
 */
export const login: AsyncAPI<
  {
    /**
     * 未登录时, 是否强制调起 **宿主** 登录框
     *
     * 默认值 `true`
     */
    force?: boolean;
  },
  {
    /**
     * 临时登录凭证, 有效期 3 分钟
     *
     * 开发者可以通过在服务器端调用 **登录凭证校验接口** 换取 `openid` 和 `session_key` 等信息
     */
    code?: string;
    /**
     * 用于标识当前设备, 无论登录与否都会返回, 有效期 3 分钟
     */
    anonymousCode: string;
    /**
     * 判断在当前 APP（头条、抖音等）是否处于登录状态。
     */
    isLogin: boolean;
  }
>;
