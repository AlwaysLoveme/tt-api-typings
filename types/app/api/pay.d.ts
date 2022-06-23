import { AsyncAPI } from './types';

/**
 * ### 调起字节跳动小程序收银台进行支付
 *
 * 开发接入之前，请先完成商户入驻流程
 *
 * 详细文档见: [小程序担保支付接入流程](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/open-interface/payment/secure/TE/)
 */
export const pay: AsyncAPI<
  {
    orderInfo: {
      /** 担保交易服务端订单号 */
      order_id: string;
      /** 担保交易订单号 token */
      order_token: string;
    };
    /**
     * 仅限调试用，上线前去掉该参数
     *
     * _debug=1 时，微信支付期间可以看到中间报错信息，方便调试
     */
    _debug?: 0 | 1;
    /**
     * 固定值: 5(拉起小程序收银台)
     */
    service: 5;
  },
  {
    /**
     * 只要调起收银台成功，支付状态都会回调 success, 开发者依据返回的 code 值, 进行后续业务逻辑处理
     * - `0`: 支付成功
     * - `1`: 支付超时
     * - `2`: 支付失败
     * - `3`: 支付关闭
     * - `4`: 支付取消
     * - `9`: 订单状态开发者自行获取
     */
    code: number;
  }
>;
