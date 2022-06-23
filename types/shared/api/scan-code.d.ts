import { AsyncAPI } from './types';

/**
 * ### 调用宿主的扫码功能
 * 扫码成功后返回对应的扫描结果。
 */
export const scanCode: AsyncAPI<
  {},
  {
    /** 所扫码的内容 */
    result: string;
  }
>;
