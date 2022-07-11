import { AsyncAPI } from "./types"

/**
 * ### 显示模态弹窗
 *
 * 用于同步用户重要信息，并要求用户进行确认，或执行特定操作以决策下一步骤
 */
export const showModal: AsyncAPI<{
  /** 标题 */
  title?: string
  /** 内容 */
  content?: string
  /** 确定按钮的文案, 默认值 "确认", 最多 4 个字符 */
  confirmText?: string
  /** 是否显示取消按钮 */
  showCancel?: boolean
  /** 取消按钮的文案, 最多 4 个字符 */
  cancelText?: string
}, {confirm?: boolean, cancel?: boolean}>
