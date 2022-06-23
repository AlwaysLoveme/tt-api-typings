import { AsyncAPI } from './types';

/**
 * ### 使手机发生较长时间的振动（400 ms)
 */
export const vibrateLong: AsyncAPI;

/**
 * ### 使手机发生较短时间的振动
 *
 * - Android: 震动时间为 30ms
 * - iOS: 震动时间为 15ms
 */
export const vibrateShort: AsyncAPI;
