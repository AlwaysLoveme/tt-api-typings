import { AsyncAPI } from './types';

/**
 * ### 调起客户端订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的 “总是保持以上选择，不再询问” 时，
 * ### 或是点击了订阅面板中 “拒绝，不再询问” 时，模板消息会被添加到用户的小程序设置页，用户可以在设置页面进行管理。
 */
export const requestSubscribeMessage: AsyncAPI<
  {
    /** 需要订阅的消息模板的 id 的集合，最多支持传入三个 tmplId */
    tmplIds: [];
  },
  {
    /** "requestSubscribeMessage:ok" */
    errMsg: string;
    /** [TEMPLATE_ID]为模板 id，取值见下表
     * | 值    | 说明                           |
     * | :---- | :----                         |
     * | accept| 用户同意订阅该条 id 对应的模板消息 |
     * | reject| 用户拒绝订阅该条 id 对应的模板消息 |
     * | ban   | 表示已被后台封禁                 |
     * | fail  | 表示该条 id 对应的模版消息授权失败 |
     */
    TEMPLATE_ID: string;
  }
>;
