import { AsyncAPI } from './types';

/**
 * ### 压缩图片接口
 *
 * 该 API 仅对 `jpg` 有效
 */
export const compressImage: AsyncAPI<
  {
    /**
     * 图片路径，不支持网络图片，可以本地路径、代码包相对路径
     */
    src: string | string[];

    /**
     * 压缩质量，范围 0 ～ 100，数值越小，质量越低，压缩率越高
     *
     * 默认值 80
     */
    quality?: number;
  },
  {
    /** 压缩完成后的文件的临时路径 */
    tempFilePath: string | string[];
  }
>;
