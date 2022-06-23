import { AsyncAPI } from './types';

/**
 * ### 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，同时，用户在小程序中新增的地址会同步至开发者地址库中共存。
 */
export const chooseAddress: AsyncAPI<
  {},
  {
    /** "chooseAddress:ok" */
    errMsg: string;
    /** 收货人姓名 */
    userName: string;
    /** 国际收货地址第一级地址 */
    provinceName: string;
    /** 国际收货地址第二级地址 */
    cityName: string;
    /** 国际收货地址第三级地址 */
    countyName: string;
    /** 详细收货地址信息 */
    detailInfo: string;
    /** 收货人手机号码 */
    telNumber: string;
  }
>;
