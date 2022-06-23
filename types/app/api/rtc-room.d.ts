import { AsyncAPI, SyncAPI } from './types';

/**
 * 根据 AppId 创建 RtcContext
 */
export const createRtcRoomContext: SyncAPI<[appId: string], RtcContext>;
type Callback = (...args: any[]) => any;

interface RtcContext {
  /**
   * 加入房间
   */
  joinRtcRoom: AsyncAPI<
    { roomId: string; token: string; userId: string },
    void,
    {
      userIdList: string[];
      errCode: number;
      errMsg: string;
    }
  >;
  /**
   * 离开房间
   */
  exitRtcRoom: AsyncAPI<{ roomId: string }, void>;
  /**
   * 切换摄像头
   */
  switchCamera: SyncAPI<
    [
      {
        camera: 'back' | 'front';
      },
    ],
    void
  >;
  /**
   * 开启关闭视频采集
   */
  changeVideoCapture: SyncAPI<
    [
      {
        state: 0 | 1;
      },
    ],
    void
  >;
  /**
   * 开启关闭音频采集
   */
  changeAudioCapture: SyncAPI<
    [
      {
        state: 0 | 1;
      },
    ],
    void
  >;
  /**
   * 监听实时语音通话成员视频状态变化事件
   */
  onRtcVideoMembersChanged: SyncAPI<
    [
      callback: (res: {
        userIdList: string[];
        errCode: number;
        errMsg: string;
      }) => void,
    ]
  >;
  /**
   * 监听实时语音通话成员在线状态变化事件(有成员加入/退出通话时触发回调)
   */
  onRtcChatMembersChanged: SyncAPI<
    [
      callback: (res: {
        userIdList: string[];
        errCode: number;
        errMsg: string;
      }) => void,
    ]
  >;
  /**
   * 监听实时音视频通话过程状态变化(包括调用 api 是错误信息)
   */
  onRtcStateChange: SyncAPI<
    [
      callback: (res: {
        code: number;
        errCode: number;
        errMsg: string;
        data: object;
      }) => void,
    ]
  >;
  /**
   * 监听实时语音通话成员通话状态变化事件(有成员开始/停止说话时触发回调)
   */
  onRtcChatSpeakersChanged: SyncAPI<
    [
      callback: (res: {
        userIdList: string[];
        errCode: number;
        errMsg: string;
      }) => void,
    ]
  >;
  /**
   * 监听被动断开实时音视频通话事件
   */
  onRtcChatInterrupted: SyncAPI<
    [callback: (res: { errCode: number; errMsg: string }) => void]
  >;
  /**
   * 取消监听实时语音通话成员视频状态变化事件
   */
  offRtcVideoMembersChanged: (callback: Callback) => void;
  /**
   * 取消监听实时语音通话成员在线状态变化事件(有成员加入/退出通话时触发回调)
   */
  offRtcChatMembersChanged: (callback: Callback) => void;
  /**
   * 取消监听实时音视频通话过程状态变化(包括调用 api 是错误信息)
   */
  offRtcStateChange: (callback: Callback) => void;
  /**
   * 取消监听实时语音通话成员通话状态变化事件(有成员开始/停止说话时触发回调)
   */
  offRtcChatSpeakersChanged: (callback: Callback) => void;
  /**
   * 取消监听被动断开实时音视频通话事件
   */
  offRtcChatInterrupted: (callback: Callback) => void;
}
