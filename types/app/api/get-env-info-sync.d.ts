import {SyncAPI} from "./types"
interface MicroAppInfo {
  /**
   * 小程序版本号 最低支持版本2.21.0
   */
  mpVersion: string
  /**
   * 小程序环境 最低支持版本2.21.0
   * production -> 线上版
   * development -> 测试版
   * preview -> 预览版
   */
  envType: "production" | "development" | "preview"
  /**
   * 小程序appId 最低支持版本2.21.0
   */
  appId: string
}
interface CommonInfo {
  /**
   * 用户数据存储的路径（默认值 ttfile://user）
   */
  USER_DATA_PATH: string
}
interface EnvInfo {
  microapp: MicroAppInfo
  common: CommonInfo
}

export const getEnvInfoSync: SyncAPI<[], EnvInfo>
