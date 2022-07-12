type Prettier<T> = T extends (...args: any) => any
  ? T
  : T extends object
  ? { [K in keyof T]: Prettier<T[K]> }
  : T

export type AsyncAPI<
  Options extends object = {},
  Response = {},
  Ok = Prettier<
    {
      /** 错误信息 */
      errMsg: string
    } & Response
  >,
  Err = {
    /** 错误信息 */
    errMsg: string
    /** 错误码 */
    errNo?: number
  }
> = (
  options: Prettier<
    Options & {
      /** 成功回调 */
      success?: (res: Ok) => void
      /** 失败回调 */
      fail?: (res: Err) => void
      /** 回调函数 */
      complete?: (res: Partial<Ok> & Err) => void
    }
  >,
) => void

export type AsyncAPIWithHandler<
  Options extends object,
  Response,
  Handler,
  Ok = Prettier<
    {
      /** 错误信息 */
      errMsg: string
    } & Response
  >,
  Err = {
    /** 错误信息 */
    errMsg: string
    /** 错误码 */
    errNo?: number
  }
> = <Response>(
  options: Prettier<
    Options & {
      /** 成功回调 */
      success?: (res: Ok & Response) => void
      /** 失败回调 */
      fail?: (res: Err) => void
      /** 回调函数 */
      complete?: (res: Partial<Ok> & Err) => void
    }
  >,
) => Handler

export type SyncAPI<Args extends unknown[] = [], Response = void> = (
  ...args: Args
) => Response

export enum RefundStatus {
  refunding = 1,
  refundSuccess = 98,
  refundFail = 99,
}
// type StepStatus = 0 | 1 | 2 | 3;
export enum StepStatus {
  toBeProcessed = 0,
  processing = 1,
  processSuccess = 2,
  processFail = 3,
}

export enum UpdatePointsType {
  add = 1,
  // minus = 2 // 本期先不支持减积分
}

export enum RecordTokenType {
  points = 1,
}
