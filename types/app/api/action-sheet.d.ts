import { AsyncAPI } from "./types"

/**
 * ### 显示操作菜单
 *
 * 设计文档详见操作菜单
 */
export const showActionSheet: AsyncAPI<
  {
    itemList: string[]
  },
  {
    /**  */
    tapIndex: number
  }
>
