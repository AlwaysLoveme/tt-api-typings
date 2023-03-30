import { AsyncAPI } from "./types"
/**
 * 申请退款
 */

interface EcCustomData {
  image?: Array<{
    id: number
    url: string
  }>
  text?: Array<{
    id: number
    key: string
    content: string
  }>
  extra?: object
}

export const submitEcCustomGoods: AsyncAPI<
  {
    orderId: string
    filePath: string
    customData: EcCustomData
  },
  {}
>
