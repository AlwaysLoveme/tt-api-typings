import { AsyncAPI } from './types';

/**
 * ### 保存图片到系统相册
 * 该 API 需要用户授权方可调用，详细信息可参考[用户授权](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/other/user-authorization/)，可在 [tt.authorize](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/open-interface/authorization/tt-authorize/) 中查看相关错误码信息。
 */
export const saveImageToPhotosAlbum: AsyncAPI<{
  /** 图片文件路径，可以是临时文件路径(如调用 tt.downloadFile 或 tt.compressImage 等 API 返回的路径）也可以是永久文件路径，不支持网络路径 */
  filePath: string;
}>;
