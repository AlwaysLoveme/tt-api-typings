import { AsyncAPI } from './types';
/**
 * 开放API-创建订单
 */

interface GoodsInfo {
  quantity: number;
  price: number;

  discountAmount?: number; //商品折扣

  goodsName: string; // 商品名
  goodsPhoto: string; // 商品照片
  goodsId: string; // 商品 ID
  goodsType: number; // 商品类型 1 或 2

  goodsSubTitle?: string; // 商品副标题，暂时无需填入
  goodsLabels?: string[]; // 商品标签
  dateRule?: string; // 使用规则

  goodsPage?: {
    path?: string; // 商品详情页路径
    params?: string; // 详情页路径参数
  };
}
export const createOrder: AsyncAPI<
  {
    goodsList: GoodsInfo[];

    payment: {
      totalDiscountAmount?: number;
      totalAmount: number;
    };

    appType?: number;

    contactInfo?: {
      phoneNumber?: string;
      contactName?: string;
    };
    note?: string;
    merchantInfo?: {
      merchantId?: string;
    };

    storeInfo?: {
      storeName?: string;
      storeIcon?: string;
    };

    callbackData?: { [key: string]: unknown };
  },
  {
    orderId: string;
    outOrderNo: string;
  }
>;
