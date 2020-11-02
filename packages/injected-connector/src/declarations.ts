interface Alaya {
  send: unknown
  enable: () => Promise<string[]>
  on?: (method: string, listener: (...args: any[]) => void) => void
  removeListener?: (method: string, listener: (...args: any[]) => void) => void
}

declare interface Window {
  alaya?: Alaya
}

declare const __DEV__: boolean
