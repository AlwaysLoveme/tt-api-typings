import { AsyncAPI } from '../types';

interface RoomInfo {
  /** 房间id */
  roomID: string;
  /** 开播时长，单位为秒 */
  liveDuration: number;
}

/**
 * ### 获取直播房间信息
 */
export const getRoomInfo: AsyncAPI<
  {},
  {
    /** "getRoomInfo:ok" */
    errMsg: string;
    /** 房间信息 */
    roomInfo: RoomInfo;
  }
>;
