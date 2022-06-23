import { AsyncAPI } from './types';

/**
 * ### 获取图片信息。
 *
 * 如果要获取网络图片的信息，详见获取[网络图片](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/media/picture/tt-get-image-info/#%E8%8E%B7%E5%8F%96%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87%E4%BF%A1%E6%81%AF)信息说明。
 */
export const getImageInfo: AsyncAPI<
  {
    /** 图片地址 */
    src: string;
  },
  {
    /** 图片宽度(单位: px) */
    width: number;
    /** 图片高度(单位: px) */
    height: number;
    /** 图片格式 */
    type: string;
    /** 返回图片的本地路径，若为网络图片则该 API 首先会下载图片再返回下载到本地后的临时路径 */
    path: string;
  }
>;
