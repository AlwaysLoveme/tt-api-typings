import { AsyncAPI } from "./types"
/**
 * 开放API-申请退款
 */

interface refundGoods {
  goodsId: string
  goodsType: number
  quantity: number
}

export const applyRefund: AsyncAPI<
  {
    refundInfo: {
      reason: string[]
      note?: string
    }
    outOrderNo: string
    goodsList?: refundGoods[]
    refundTotalAmount?: number
    type?: number
    callbackData?: { [key: string]: unknown }
  },
  {
    refundId: string
    outRefundNo: string
    orderId: string
  }
>
