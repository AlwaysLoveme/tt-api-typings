import { AsyncAPI, RefundStatus, StepStatus } from './types';
/**
 * 申请退款
 */
export const getRefundOrder: AsyncAPI<
  {
    refundId: string;
    outRefundNo: string;
  },
  {
    refundWay: string;
    refundQuantity: number;
    refundId: string;
    refundReason: string;
    refundTips: string;
    refundAmount: number;
    refundStatus: RefundStatus;
    refundSteps: StepStatus[];
  }
>;
