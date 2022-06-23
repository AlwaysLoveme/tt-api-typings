import { AsyncAPI } from './types';

/**
 * ### 提前向用户发出授权请求
 * 该方法不会调用对应接口，只会弹框咨询用户是否授权或者获取用户信息。如果用户之前有授权，该接口直接返回成功，不会跟用户产生交互。
 */
export const authorize: AsyncAPI<{
  /** 需要预授权的 scope，详见 用户授权 scope 说明 */
  scope: string;
}>;
