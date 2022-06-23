import { SyncAPI } from './types';

export interface WebGLTexture {}
interface StickerProcessor {
  paintToTexture: (
    inputTexture: WebGLTexture,
    outputTexture: WebGLTexture,
  ) => void;
}
type Load = SyncAPI<[], {}>;

type OnLoad = SyncAPI<
  [
    /**
     * res 为返回的 StickerProcessor
     */
    (res: StickerProcessor) => void,
  ],
  {}
>;

type OnError = SyncAPI<
  [
    /**
     * err 为返回的错误原因
     */
    (err: Error) => void,
  ],
  {}
>;

type PaintToTexture = SyncAPI<
  /**
   * 输入纹理和输出纹理对象
   */
  [inputTexture: WebGLTexture, outputTexture: WebGLTexture],
  {}
>;

/** ### 进行网络加载 */
export const load: Load;

/** ### 设置加载完成回调，会返回加载好的贴纸处理器 */
export const onLoad: OnLoad;

/** ### 设置加载失败回调，会返回加载失败的原因 */
export const onError: OnError;

/** ### 将输入纹理通过贴纸处理后绘制到输出纹理上 */
export const paintToTexture: PaintToTexture;

/**
 * ### 创建一个贴纸管理器
 */

export const createStickerManager: SyncAPI<
  [
    /**
     * 请求的贴纸 ID
     */
    stickerId: string,
  ],
  {
    load: Load;
    onError: OnError;
    onLoad: OnLoad;
  }
>;
