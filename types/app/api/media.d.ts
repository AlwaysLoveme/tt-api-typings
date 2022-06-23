import { AsyncAPI } from './types';

/** 选择视频或图片 */
export const chooseMedia: AsyncAPI<
  {
    /** 最多可以选择的文件个数 */
    count?: number;
    /** 支持的媒体类型 */
    mediaType?: ('image' | 'video')[];
    /** 图片和视频选择的来源 */
    sourceType?: ('album' | 'camera')[];
    /** 录制视频的最大时长 */
    maxDuration?: number;
    /** 仅对 mediaType 为 image 时有效，是否压缩所选文件,默认压缩 */
    sizeType?: ('compressed' | 'original')[];
    /** 仅在 sourceType 为 camera 时生效，'front' 使用前置摄像头，'back' 使用后置摄像头 */
    camera?: 'front' | 'back';
  },
  {
    /** 本地临时文件列表 */
    tempFiles: {
      /** 本地临时文件路径 (本地路径) */
      tempFilePath: string;
      /** 本地临时文件大小，单位 B */
      size: number;
      /** 媒体类型 */
      mediaType: string;
      /** 视频的时间长度 */
      duration?: number;
      /** 视频的高度 */
      height?: number;
      /** 视频的宽度 */
      width?: number;
    }[];
  }
>;
