import {
  SelectorQuery,
  IntersectionObserver,
  CreateIntersectionObserverOption,
} from "./api"
import { ComponentDescriptor, AnyObject } from "./helper"

interface TriggerEventOption {
  /** 事件是否冒泡
   *
   * 默认值： `false`
   */
  bubbles?: boolean
  /** 事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部
   *
   * 默认值： `false`
   */
  composed?: boolean
  /** 事件是否拥有捕获阶段
   *
   * 默认值： `false`
   */
  capturePhase?: boolean
}

type PropertyType =
  | StringConstructor
  | NumberConstructor
  | BooleanConstructor
  | ArrayConstructor
  | ObjectConstructor
  | FunctionConstructor
  | null

type ValueType<T extends PropertyType> = T extends null
  ? any
  : T extends StringConstructor
  ? string
  : T extends FunctionConstructor
  ? Function
  : T extends NumberConstructor
  ? number
  : T extends BooleanConstructor
  ? boolean
  : T extends ArrayConstructor
  ? any[]
  : T extends ObjectConstructor
  ? AnyObject
  : never

export type ShortProperty =
  | StringConstructor
  | NumberConstructor
  | BooleanConstructor
  | ArrayConstructor
  | ObjectConstructor
  | FunctionConstructor
  | null
export interface FullProperty<T extends PropertyType> {
  /** 属性类型 */
  type: T
  /** 属性初始值 */
  value?: ValueType<T>
  /** 属性值被更改时的响应函数 */
  observer?:
    | string
    | ((
        newVal: ValueType<T>,
        oldVal: ValueType<T>,
        changedPath: Array<string | number>,
      ) => void)
  /** 属性的类型（可以指定多个） */
  optionalTypes?: ShortProperty[]
}

type AllFullProperty =
  | FullProperty<StringConstructor>
  | FullProperty<NumberConstructor>
  | FullProperty<BooleanConstructor>
  | FullProperty<ArrayConstructor>
  | FullProperty<ObjectConstructor>
  | FullProperty<FunctionConstructor>
  | FullProperty<null>

type AllProperty = AllFullProperty | ShortProperty

type FullPropertyToData<T extends AllFullProperty> = ValueType<T["type"]>

type PropertyToData<T extends AllProperty> = T extends ShortProperty
  ? ValueType<T>
  : FullPropertyToData<Exclude<T, ShortProperty>>

export type PropertyOption = Record<string, AllProperty>

type PropertyOptionToData<P extends PropertyOption> = {
  [name in keyof P]: PropertyToData<P[name]>;
}

interface ComponentBuiltin<D extends AnyObject> {
  /**
   * 更新数据
   * @param data 数据
   * @param callback 页面更新完成回调
   */
  setData: (
    data: Partial<D> & AnyObject,
    callback?: (this: this) => void,
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
    options?: CreateIntersectionObserverOption,
  ) => IntersectionObserver
  /**
   * 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
   * @param Selectors selector对象数组
   */
  selectAllComponents: (
    selector: string,
    callback?: (this: this, options: ComponentDescriptor[]) => void,
  ) => ComponentDescriptor[]
  /**
   * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
   * @param Selector selector对象
   */
  selectComponent: (
    selector: string,
    callback?: (this: this, options: ComponentDescriptor) => void,
  ) => ComponentDescriptor
  /** 获取这个关系所对应的所有关联节点，参见 组件间关系 */
  getRelationNodes: (relationKey: string) => TrivialInstance[]
  /** 触发事件，参见组件事件 */
  triggerEvent: <DetailType = any>(
    name: string,
    detail?: DetailType,
    options?: TriggerEventOption,
  ) => void
  /** 检查组件是否具有 `behavior` （检查时会递归检查被直接或间接引入的所有behavior） */
  hasBehavior: (behavior: string) => void
  /**
   * 移除框架骨架屏，支持传入id移除指定节点
   * @param object 选填
   */
  removeSkeleton: (arg0?: { id: string }) => void
}

export interface Lifetimes {
  /** 组件生命周期声明对象，组件的生命周期：`created`、`attached`、`ready`、`moved`、`detached` 将收归到 `lifetimes` 字段内进行声明，原有声明方式仍旧有效，如同时存在两种声明方式，则 `lifetimes` 字段内声明方式优先级最高
   *
   */
  lifetimes: Partial<{
    /** 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用setData  */
    created?: () => void

    /** 组件生命周期函数，在组件实例进入页面节点树时执行  */
    attached?: () => void

    /** 组件生命周期函数，在组件布局完成后执行  */
    ready?: () => void

    /** 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行  */
    moved?: () => void

    /** 组件生命周期函数，在组件实例被从页面节点树移除时执行  */
    detached?: () => void
  }>
  /** 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用setData  */
  created?: () => void

  /** 组件生命周期函数，在组件实例进入页面节点树时执行  */
  attached?: () => void

  /** 组件生命周期函数，在组件布局完成后执行  */
  ready?: () => void

  /** 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行  */
  moved?: () => void

  /** 组件生命周期函数，在组件实例被从页面节点树移除时执行  */
  detached?: () => void
}
export interface OtherOption {
  /** behaviors 是用于组件间代码共享的特性，类似于一些编程语言中的 mixins */
  behaviors?: string[]

  /** 组件间关系定义 */
  relations?: AnyObject

  /** 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举） */
  options?: AnyObject

  /** 定义段过滤器，用于自定义组件扩展 */
  definitionFilter?: CallableFunction
}

interface InstanceProperties {
  /** 组件的文件路径 */
  is: string
  /** 节点id */
  id: string
  /** 节点dataset */
  dataset: Record<string, string>
}

export type MethodOption = Record<string, CallableFunction>

export interface Data<D extends AnyObject> {
  /** 组件的内部数据，和 `properties` 一同用于组件的模板渲染 */
  data?: D
}
export interface Property<P extends PropertyOption> {
  /** 组件的对外属性，是属性名到属性设置的映射表 */
  properties: P
}
export interface Method<M extends MethodOption> {
  /** 组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用 */
  methods: M
}

export type Instance<
  TData extends AnyObject,
  TProperty extends PropertyOption,
  TMethod extends Partial<MethodOption>,
  TCustom extends AnyObject = {}
> = InstanceProperties &
  TMethod &
  ComponentBuiltin<TData> &
  TCustom & {
    data: TData & PropertyOptionToData<TProperty>
    properties: TData & PropertyOptionToData<TProperty>
  }

type ComponentInstance<
  TData extends AnyObject,
  TProperty extends PropertyOption,
  TMethod extends MethodOption,
  TCustom extends AnyObject = {}
> = Partial<Data<TData>> &
  Partial<Property<TProperty>> &
  Partial<Method<TMethod>> &
  Partial<OtherOption> &
  Partial<Lifetimes> &
  ThisType<Instance<TData, TProperty, TMethod, TCustom>>

type TrivialInstance = Instance<AnyObject, AnyObject, AnyObject, AnyObject>

export type ComponentConstructor = <
  TData extends AnyObject,
  TProperty extends PropertyOption,
  TMethod extends MethodOption,
  TCustom extends AnyObject = {}
>(
  options: ComponentInstance<TData, TProperty, TMethod, TCustom>,
) => void
