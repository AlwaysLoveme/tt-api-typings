import { SyncAPI, AsyncAPI } from './types';

/**
 * ### 以「键值对」的形式设置本地缓存数据。
 *
 * **注意：**
 * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。
 * 用户在平台 app（头条或抖音）内退出登录，或者在系统中清除 app 的缓存可清除数据。
 * 单个 key 数据最大 1M，总体容量最大 10M，超出后会回调失败。
 */
export const setStorage: AsyncAPI<{
  /** 存储的 key */
  key: string;
  /** 存储的 数据 */
  data: unknown;
}>;

/**
 * ### 以「键值对」的形式设置本地缓存数据。
 *
 * 将数据存储在本地缓存中指定的 key 中。如果之前存在同名 key，
 * 会覆盖掉原来该 key 对应的内容。这是一个同步接口，是 tt.setStorage 的同步版本。
 */
export const setStorageSync: SyncAPI<[key: string, data: unknown]>;

/**
 * ### 获取本地缓存数据。
 */
export const getStorage: AsyncAPI<
  {
    /** 读取的 key */
    key: string;
  },
  {
    /** 键名对应的数据，如无数据或数据类型不支持会返回空字符串 */
    data: any;
  }
>;

/**
 * ### 获取本地缓存数据。
 */
export const getStorageSync: SyncAPI<
  [
    /** 读取的 key */
    key: string,
  ],
  any
>;

/**
 * ### 异步获取本地缓存数据的相关信息。
 */
export const getStorageInfo: AsyncAPI<
  {},
  {
    /** 本地数据缓存中的所有键名列表，如本地数据则返回空数组  */
    keys: string[];
    /** 当前占用的空间大小，以 KB 为单位  */
    currentSize: number;
    /** 存储空间上限，以 KB 为单位，一般来说会返回 10240  */
    limitSize: number;
  }
>;

/**
 * ### 同步步获取本地缓存数据的相关信息。
 */
export const getStorageInfoSync: SyncAPI<
  [],
  {
    /** 本地数据缓存中的所有键名列表，如本地数据则返回空数组  */
    keys: string[];
    /** 当前占用的空间大小，以 KB 为单位  */
    currentSize: number;
    /** 存储空间上限，以 KB 为单位，一般来说会返回 10240  */
    limitSize: number;
  }
>;

/**
 * ### 从本地缓存数据中异步删除 key 对应的值。
 */
export const removeStorage: AsyncAPI<{
  /** 删除的 key */
  key: string;
}>;

/**
 * ### 从本地缓存数据中同步删除 key 对应的值。
 */
export const removeStorageSync: SyncAPI<[string]>;

/**
 * ### 清理 全部 本地数据缓存。
 */
export const clearStorage: AsyncAPI;

/**
 * ### 清理 全部 本地数据缓存的同步接口。
 */
export const clearStorageSync: SyncAPI;
