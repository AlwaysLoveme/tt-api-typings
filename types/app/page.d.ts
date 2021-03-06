import {
  SelectorQuery,
  IntersectionObserver,
  CreateIntersectionObserverOption,
} from "./api"
import { ComponentDescriptor, AnyObject } from "./helper"

interface ShareAppMessageOption {
  /** 转发事件来源。
   *
   * 可选值：
   * - `button`：页面内转发按钮；
   * - `menu`：右上角转发菜单。
   *
   */
  from: "button" | "menu" | string
  /** 分享来源，有效值为 "menu" 或者 "button"
   *
   */
  target: any
  /** 分享形式
   * 可选值：
   * - `article`：发图文，仅头条 APP 支持；
   * - `video`：发布视频内容;
   * - `token`：口令分享，生成一串特定的字符串文本，仅头条 APP 支持
   */
  channel: string
}

export interface ShareOptions {
  title?: string
  desc?: string
  path?: string
  imageUrl?: string
  templateId?: string
  success?: CallableFunction
  fail?: CallableFunction
  complete?: CallableFunction
}

/** Page 内置方法 */
interface PageBuiltin<D> {
  /**
   * 更新数据
   * @param data 数据
   * @param callback 页面更新完成回调
   */
  setData: (
    data: Partial<D> & AnyObject,
    callback?: (this: this) => void
  ) => void
  /**
   * 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内
   */
  createSelectorQuery: () => SelectorQuery
  /**
   * 创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内
   * @param this 页面实例
   * @param options 选项
   */
  createIntersectionObserver: (
    options?: CreateIntersectionObserverOption
  ) => IntersectionObserver
  /**
   * 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
   * @param Selectors selector对象数组
   */
  selectAllComponents: (
    selector: string,
    callback?: (this: this, options: ComponentDescriptor[]) => void
  ) => ComponentDescriptor[]
  /**
   * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
   * @param Selector selector对象
   */
  selectComponent: (
    selector: string,
    callback?: (this: this, options: ComponentDescriptor) => void
  ) => ComponentDescriptor
  /**
   * 移除框架骨架屏，支持传入id移除指定节点
   * @param object 选填
   */
  removeSkeleton: (arg0?: { id: string }) => void
}

interface PageOptions {
  /**
   * 生命周期回调—监听页面加载
   * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数
   */
  onLoad: (res: Record<string, string | undefined>) => void
  /**
   * 生命周期回调—监听页面显示
   * 页面显示/切入前台时触发
   */
  onShow: () => void
  /**
   * 生命周期回调—监听页面隐藏
   * 页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
   */
  onHide: () => void
  /**
   * 生命周期回调—监听页面初次渲染完成
   * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
   */
  onReady: () => void
  /**
   * 窗口尺寸改变时触发
   */
  onResize: () => void
  /**
   * 生命周期回调—监听页面卸载
   * 页面卸载时触发。如redirectTo或navigateBack到其他页面时。
   */
  onUnload: () => void
  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh: () => void
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: () => void
  /**
   * 用户点击右上角转发
   */
  onShareAppMessage: (options: ShareAppMessageOption) => ShareOptions
  /**
   * 页面滚动触发事件的处理函数
   */
  onPageScroll: () => void
}

interface Data<TData> {
  /**
   * 页面的初始数据
   * 页面加载时，data 将会以 JSON 字符串的形式由逻辑层传至渲染层，因此 data 中的数据必须是可以转成 JSON 的类型：字符串，数字，布尔值，对象，数组
   */
  data: TData
}

type Instance<TData, TCustom> = TCustom &
  Data<TData> &
  PageOptions &
  PageBuiltin<TData>

type PageInstance<TData, TCustom> = TCustom &
  Partial<Data<TData>> &
  Partial<PageOptions> &
  ThisType<Instance<TData, TCustom>>

export type TrivialPageInstance = Instance<AnyObject, AnyObject>

export type PageConstructor = <
  TData extends AnyObject,
  TCustom extends AnyObject
>(
  options: PageInstance<TData, TCustom>
) => void

export type GetCurrentPages = () => Array<PageInstance<AnyObject, AnyObject>>
