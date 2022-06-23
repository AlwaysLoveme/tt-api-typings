import { AsyncAPI, RecordTokenType } from './types';
/**
 * 白名单 API，小程序绑定的抖音小店的幂等 token
 */
export const getShopRecordToken: AsyncAPI<
  {
    shopId: string;
    type: RecordTokenType;
  },
  {
    /** "getShopRecordToken:ok" */
    errMsg: string;
    /** 幂等 token */
    recordToken: string;
  }
>;
