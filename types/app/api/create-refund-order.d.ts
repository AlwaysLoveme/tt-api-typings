import { AsyncAPI } from './types';
/**
 * 申请退款
 */

interface RefundGoods {
  goods_id: string;
  goods_id_type: number;
  refund_quantity: number;
}

export const createRefundOrder: AsyncAPI<
  {
    appId: string;
    reason: string[];
    type: number;
    outOrderNo: string;
    description: string;
    extra?: string;
    refundGoods: RefundGoods[];
    refundTotalAmount?: number;
  },
  { refundId: string; outRefundNo: string; orderId: string }
>;
