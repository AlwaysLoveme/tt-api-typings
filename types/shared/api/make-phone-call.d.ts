import { AsyncAPI } from './types';

/**
 * ### 调用宿主拨打电话功能
 *
 * 用户可以选择拨打电话或取消
 */
export const makePhoneCall: AsyncAPI<{
  /** 电话号码 */
  phoneNumber: string;
}>;
