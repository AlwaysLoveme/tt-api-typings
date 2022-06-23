import {
  Instance as ComponentInstance,
  PropertyOption as ComponentPropertyOption,
  MethodOption as ComponentMethodOption,
  Data as ComponentData,
  Method as ComponentMethod,
  Property as ComponentProperty,
  Lifetimes as ComponentLifetimes,
  OtherOption as ComponentOtherOption,
} from "./component"
import { AnyObject } from "./helper"

type PropertyOption = ComponentPropertyOption
type MethodOption = ComponentMethodOption
type Data<T extends AnyObject> = ComponentData<T>
type Property<T extends PropertyOption> = ComponentProperty<T>
type Method<T extends MethodOption> = ComponentMethod<T>
type Lifetimes = ComponentLifetimes
type OtherOption = Omit<ComponentOtherOption, "options">

type Instance<
  TData extends AnyObject,
  TProperty extends PropertyOption,
  TMethod extends ComponentMethodOption,
  T extends AnyObject = Record<string, never>
> = ComponentInstance<TData, TProperty, TMethod, T>

type BehaviorInstance<
  TData extends AnyObject,
  TProperty extends PropertyOption,
  TMethod extends ComponentMethodOption,
  T extends AnyObject = Record<string, never>
> = Partial<Data<TData>> &
  Partial<Property<TProperty>> &
  Partial<Method<TMethod>> &
  Partial<OtherOption> &
  Partial<Lifetimes> &
  ThisType<Instance<TData, TProperty, TMethod, T>>

export type BehaviorConstructor = <
  TData extends AnyObject,
  TProperty extends PropertyOption,
  TMethod extends ComponentMethodOption,
  T extends AnyObject = Record<string, never>
>(
  options: BehaviorInstance<TData, TProperty, TMethod, T>,
) => string
