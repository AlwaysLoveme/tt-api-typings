export type console = {
  log: (...args: unknown[]) => void
  warn: (...args: unknown[]) => void
  error: (...args: unknown[]) => void
  info: (...args: unknown[]) => void
  debug: (...args: unknown[]) => void
}

type TimerHandler = string | ((...args: unknown[]) => unknown)

export type setInterval = (
  handler: TimerHandler,
  timeout?: number,
  ...arguments: any[]
) => number

export type setTimeout = (
  handler: TimerHandler,
  timeout?: number,
  ...arguments: any[]
) => number
