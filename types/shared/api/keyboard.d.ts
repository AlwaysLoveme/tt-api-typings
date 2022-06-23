import { AsyncAPI } from './types';

/**
 * ### 收起软键盘
 *
 * 在`<input>`、`<textarea>` 等组件中 focus 拉起键盘后调用此接口可以收起键盘。
 */
export const hideKeyboard: AsyncAPI;

// 暂时不管小游戏的
// /**
//  * ### 显示软键盘
//  *
//  * @warn 仅小游戏支持
//  */
// export const showKeyboard: AsyncAPI<{
//   /** 键盘输入框显示的默认值 */
//   defaultValue: string;
//   /** 键盘中文本的最大长度 */
//   maxLength: number;
//   /** 是否为多行输入 */
//   multiple: boolean;
//   /** 当点击完成时键盘是否收起 */
//   confirmHold: boolean;
//   /**
//    * 键盘右下角 confirm 按钮的类型，只影响按钮的文本内容
//    *
//    * - done 完成
//    * - next 下一个
//    * - search 搜索
//    * - go 前往
//    * - send 发送
//    */
//   confirmType: 'done' | 'next' | 'search' | 'go' | 'send';
// }>;
