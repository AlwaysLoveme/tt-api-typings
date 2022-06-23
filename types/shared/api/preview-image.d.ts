import { AsyncAPI } from './types';

/**
 * ## 预览一组图片
 *
 * Tip:
 *  - 抖音不支持预览图片保存功能。
 *  - 当 urls 中存在多个相同的图片地址，预览时会选择 current 地址对应的第一张图片进行展示，可通过给图片地址增加 query 或 hash 值避免地址重复。
 */
export const previewImage: AsyncAPI<{
  /** 需要预览的图片地址列表 */
  urls: string[];
  /** 当前显示图片的链接，不填则默认为 urls 中的第一张 */
  current?: string;
}>;
