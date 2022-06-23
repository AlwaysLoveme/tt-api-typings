import { AsyncAPI } from "./types"
/**
 * 白名单 API，小程序绑定的抖音小店的发放抖店优惠券能力
 */
export const applyEcCoupon: AsyncAPI<
  {
    shopId: string
    couponMetaId: string
  },
  {
    /** "applyEcCoupon:ok" */
    errMsg: string
    /** 发券的券码列表 */
    couponIdList: [string]
  }
>
