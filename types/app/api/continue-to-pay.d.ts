import { AsyncAPI } from './types';
/**
 * 开放API-继续支付
 */

export const continueToPay: AsyncAPI<
  {
    orderId?: string;
    outOrderNo?: string;
  },
  {
    orderId: string;
    outOrderNo: string;
  }
>;
