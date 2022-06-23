import { SyncAPI } from './types';

/**
 * 获取全局唯一的录音管理器
 */
export const getRecorderManager: SyncAPI<[], RecordManager>;

interface RecordManager {
  /**
   * 开始录音
   */
  start: (params?: {
    /** 录音自动完成时长，单位 ms, 默认值 60000 */
    duration?: number;
    /** 采样率 默认值 8000  */
    sampleRate?: 8000 | 16000 | 44100;
    /** 录音通道数，有效值可以是 1 或 2  */
    numberOfChannels?: 1 | 2;
    /** 码率, 默认值 48000 */
    encodeBitRate?: number;
    /** 帧大小，单位 KB。如果设置了值，那么每当录音内容达到帧大小时会通过 onFrameRecorded 返回内容 */
    frameSize?: number;
  }) => void;

  /**
   * 暂停录音
   */
  pause: () => void;

  /**
   * 继续录音
   */
  resume: () => void;

  /**
   * 停止录音
   */
  stop: () => void;

  /**
   * 注册录音开始回调事件
   */
  onStart: (callback: () => void) => void;

  /**
   * 注册录音暂停回调事件
   */
  onPause: (callback: () => void) => void;

  /**
   * 注册录音继续回调事件
   */
  onResume: (callback: () => void) => void;

  /**
   * 注册录音停止回调事件
   */
  onStop: (
    callback: (res: {
      /** 录音文件的地址 */
      tempFilePath: string;
    }) => void,
  ) => void;

  /**
   * 注册监听已录制完指定帧大小的文件事件
   *
   * 如果设置了 frameSize，则会回调此事件
   */
  onFrameRecorded: (
    callback: (res: {
      /** 录音分片数据 */
      frameBuffer: ArrayBuffer;
      /** 当前帧是否正常录音结束前的最后一帧 */
      isLastFrame: boolean;
    }) => void,
  ) => void;

  /** 注册录音错误事件回调 */
  onError: (
    callback: (res: {
      /** 错误消息 */
      errMsg: string;
    }) => void,
  ) => void;
}
