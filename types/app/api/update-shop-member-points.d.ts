import { AsyncAPI, UpdatePointsType } from './types';
/**
 * 白名单 API，小程序绑定的抖音小店的幂等 token
 */

export const updateShopMemberPoints: AsyncAPI<
  {
    shopId: string;
    updateInfo: {
      type: UpdatePointsType;
      amount: number;
      recordToken: string;
    };
  },
  {
    errMsg: string;
    recordToken: string;
  }
>;
