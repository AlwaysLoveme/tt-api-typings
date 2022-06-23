import { AsyncAPI } from './types';
/**
 * 申请退款
 */
export const getMicroappInfo: AsyncAPI<
  {
    appId?: string;
  },
  {
    name: string;
    corporateName: string;
  }
>;
