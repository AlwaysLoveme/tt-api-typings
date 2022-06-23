import { SyncAPI } from './types';

/**
 * ### 自定义分析数据上报接口
 *
 * 调用后，会将数据上报到小程序开发者平台，
 *
 * 开发者可以在小程序开发者平台中查看上报数据。
 *
 * 使用前，需要在小程序管理后台事件中新建事件，配置好事件名与字段。
 */
export const reportAnalytics: SyncAPI<
  [name: string, data: Record<string, unknown>]
>;
