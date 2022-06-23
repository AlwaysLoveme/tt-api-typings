import { SyncAPI } from './types';

/**
 * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
 */
export const getMenuButtonBoundingClientRect: SyncAPI<
  [],
  {
    /** 宽度，单位：px */
    width: number;
    /** 高度，单位：px */
    height: number;
    /** 上边界坐标，单位：px */
    top: number;
    /** 右边界坐标，单位：px */
    right: number;
    /** 左边界坐标，单位：px */
    left: number;
    /** 下边界坐标，单位：px */
    bottom: number;
  }
>;

/**
 * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
 */
export const getMenuButtonLayout: SyncAPI<
  [],
  {
    /** 宽度，单位：px */
    width: number;
    /** 高度，单位：px */
    height: number;
    /** 上边界坐标，单位：px */
    top: number;
    /** 右边界坐标，单位：px */
    right: number;
    /** 左边界坐标，单位：px */
    left: number;
    /** 下边界坐标，单位：px */
    bottom: number;
  }
>;
