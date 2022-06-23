import { AsyncAPI } from './types';
/**
 * 申请退款
 */

interface EcCustomData {
  image?: {
    id: number;
    url: string;
  }[];
  text?: {
    id: number;
    key: string;
    content: string;
  }[];
  extra?: object;
}

export const submitEcCustomGoods: AsyncAPI<
  {
    orderId: string;
    filePath: string;
    customData: EcCustomData;
  },
  {}
>;
