export interface ComponentDescriptor {
  [x: string]: unknown
  data: Record<string, unknown>
  setData: (data: Record<string, unknown>, cb?: CallableFunction) => void
}

export type AnyObject = Record<string, any> & { [name: string]: any }
