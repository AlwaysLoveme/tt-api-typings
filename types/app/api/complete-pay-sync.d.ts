import { SyncAPI } from './types';
/**
 * 支付
 */
export const completePaySync: SyncAPI<
  [
    {
      orderId?: string;
      result: {
        status: 'success' | 'fail';
        orderId: string;
        outOrderNo: string;
        result: { code: number; orderId: string } | { errMsg: string };
      };
    },
  ],
  {}
>;
