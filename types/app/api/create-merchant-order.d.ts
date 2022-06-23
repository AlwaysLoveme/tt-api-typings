import { AsyncAPI } from './types';
/**
 * 申请退款
 */

interface GoodsInfo {
  quantity: number;
  price: number;
  goodsTitle?: string;
  goodsPhoto?: string;
  goodsSubTitle?: string;
  goodsLabels?: string;
  goodsId: string;
  goodsIdType: number;
  discountAmount: number;
  dateRule?: string;
  goodsPage: {
    path?: string;
    params?: string;
  };
}
export const createMerchantOrder: AsyncAPI<
  {
    goodsList: GoodsInfo[];
    totalDiscountAmount: number;
    totalAmount: number;
    appId?: string;
    appType: number;
    scene: string;
    launchFrom: string;
    location: string;
    phoneNum?: string;
    contactName?: string;
    extra?: string;
    poiId?: string;
    merchantId?: string;
    storeName?: string;
    storeIcon?: string;
    videoId?: string;
    callbackData?: string;
  },
  {
    orderId: string;
    outOrderNo: string;
    payOrderId: string;
    orderToken: string;
  }
>;
