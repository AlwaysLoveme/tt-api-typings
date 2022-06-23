import { SyncAPI } from './types';
/**
 * 申请退款
 */
export const completeRefundSync: SyncAPI<
  [
    {
      orderId?: string;
      result: {
        status: 'success' | 'fail';
        outOrderNo: string;
        result:
          | { refundId: string; outRefundNo: string; orderId: string }
          | { errMsg: string };
      };
    },
  ],
  {}
>;
