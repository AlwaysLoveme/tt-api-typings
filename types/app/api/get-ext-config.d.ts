import { AsyncAPI, SyncAPI } from './types';

/**
 * ### 获取第三方平台自定义的数据字段
 */
export const getExtConfig: AsyncAPI<
  {},
  {
    extConfig: Record<string, unknown>;
  }
>;

/**
 * ### 获取第三方平台自定义的数据字段
 */
export const getExtConfigSync: SyncAPI<[], Record<string, unknown>>;
