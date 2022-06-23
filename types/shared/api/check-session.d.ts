import { AsyncAPI } from './types';

/**
 * ### 用户的登录态具有时效性检查
 *
 * 随着用户未使用小程序的时间增加，用户的登录态越容易失效；反之，则用户登录态可持续保持有效。
 *
 * 使用该 API 可检查用户当前的 session 状态是否有效，登录态过期后开发者可以再调用 tt.login 获取新的用户登录态。
 *
 * ```js
 * tt.checkSession({
 *   success() {
 *     console.log(`session 未过期`);
 *   },
 *   fail() {
 *     console.log(`session 已过期，需要重新登录`);
 *   },
 * });
 * ```
 */
export const checkSession: AsyncAPI;
