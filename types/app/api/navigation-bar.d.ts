import { AsyncAPI } from './types';

/**
 * 在当前页面显示导航条加载动画。
 */
export const showNavigationBarLoading: AsyncAPI;

/**
 * 在当前页面隐藏导航条加载动画。
 */
export const hideNavigationBarLoading: AsyncAPI;

/**
 * 隐藏返回首页按钮。
 * 基础库 1.48.0 版本起，当用户打开的小程序最底层页面是非首页时，默认展示【返回首页】按钮，开发者可在页面 onShow 中调用 hideHomeButton 进行隐藏。
 */
export const hideHomeButton: AsyncAPI;

/**
 * 设置导航栏标题。
 */
export const setNavigationBarTitle: AsyncAPI<{
  /** 标题内容 */
  title: string;
}>;

/**
 * 设置导航栏颜色。
 */
export const setNavigationBarColor: AsyncAPI<{
  /** 前景颜色值，包括按钮、标题、状态栏的颜色，只能取 #ffffff 和 #000000 */
  frontColor: string;
  /** 背景颜色值，有效值为十六进制颜色 */
  backgroundColor: string;
}>;
