import { SyncAPI } from './types';

export const performance: Performance;

/**
 * 性能相关
 */
interface Performance {
  /** 该方法返回当前缓冲区中的所有性能数据 */
  getEntries: SyncAPI<[], PerformanceEntry[]>;
  /** 获取当前缓冲区中所有名称为 [name] 且类型为 [entryType] 的性能数据 */
  getEntriesByName: SyncAPI<
    [
      {
        /** 期望获取的性能数据 name */
        name: string;
        /** 期望获取的性能数据 entryType */
        entryType: string;
      },
    ],
    PerformanceEntry[]
  >;
  /** 获取当前缓冲区中所有类型为 [entryType] 的性能数据 */
  getEntriesByType: SyncAPI<
    [
      {
        /** 期望获取的性能数据 entryType */
        entryType: string;
      },
    ],
    PerformanceEntry[]
  >;
  /** 获取当前缓冲区中当前页面的性能数据 */
  getCurrentPageEntries: SyncAPI<[], PerformanceEntry[]>;
  /** 获取当前缓冲区中页面路径为 [pagePath] 的性能数据 */
  getEntriesByPage: SyncAPI<
    [
      {
        /** 期望获取性能数据页面的 pagePath */
        pagePath: string;
      },
    ],
    PerformanceEntry[]
  >;
  /** 在性能缓冲区中使用给定名称添加一个 name 为 [name] 的性能数据 */
  mark: SyncAPI<
    [
      {
        /** 期望标记的 name */
        name: string;
      },
    ],
    PerformanceEntry[]
  >;
  /** 清空性能缓冲区中 name 为 [name] 的自定义性能数据 */
  clearMarks: SyncAPI<
    [
      {
        /** 期望清除的自定义性能数据的 name */
        name: string;
      },
    ]
  >;
}

interface PerformanceEntry {
  /** 该performance entry的名字 */
  name: string;
  /** 代表所上报的 performance metric 的 entryType 类型，例如 "mark"、"paint" */
  entryType: string;
  /** metric 的上报时间 */
  startTime: number;
  /** 持续时间 */
  duration: number;
}
