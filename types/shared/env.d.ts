export const console: {
  log: (...args: unknown[]) => void
  warn: (...args: unknown[]) => void
  error: (...args: unknown[]) => void
  info: (...args: unknown[]) => void
}

export function requestAnimationFrame(callback: () => void): number
export function cancelAnimationFrame(id: number): void
