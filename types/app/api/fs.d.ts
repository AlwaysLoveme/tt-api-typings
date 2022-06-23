import { AsyncAPI, SyncAPI } from './types';

/**
 * ### 保存临时文件到用户目录
 * 用户目录以 ttfile://user 开头
 */
export const saveFile: SaveFile;

/** ### 获取 临时目录(ttfile://tmep) 或 用户目录(ttfile://user) 下的文件信息 */
export const getFileInfo: GetFileInfo;

/** ### 获取该小程序下用户目录文件列表, 用户目录以 ttfile://user 开头 */
export const getSavedFileList: GetSavedFileList;

/** ### 删除该小程序下用户目录内的文件, 用户目录以 ttfile://user 开头 */
export const removeSavedFile: RemoveSavedFile;

type ReadFile = AsyncAPI<
  {
    /** 要读取的文件的路径 */
    filePath: string;
    /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
    encoding?: string;
  },
  {
    /** 返回数据 */
    data: string;
  }
>;

type RemoveSavedFile = AsyncAPI<{
  /** 要删除的文件路径, 必须以 ttfile://user 开头 */
  filePath: string;
}>;

type GetSavedFileList = AsyncAPI<
  {},
  {
    /** 文件数组，每一项是一个 FileItem */
    fileList: {
      /** 文件路径 */
      filePath: string;
      /** 本地文件大小，以字节为单位 */
      size: number;
      /** 文件保存时的时间戳，从 1970/01/01 08:00:00 到当前时间的秒数 */
      createTime: number;
    }[];
  }
>;

type GetFileInfo = AsyncAPI<
  {
    /** 要读取的文件路径 */
    filePath: string;
  },
  {
    /** 文件大小，以字节为单位 */
    size: number;
  }
>;

type SaveFile = AsyncAPI<
  {
    /** 文件临时路径 */
    tempFilePath: string;
    /** 要存储的路径, 必须以 ttfile://user 开头 */
    filePath?: string;
  },
  {
    /** 保存后文件路径 */
    savedFilePath: string;
  }
>;

/**
 * ### 获取全局唯一的文件管理器
 */
export const getFileSystemManager: SyncAPI<
  [],
  {
    /** 读取本地文件内容 */
    readFile: ReadFile;
    /** 同步读取本地文件内容 */
    readFileSync: SyncAPI<
      [
        /** 要读取的文件的路径 */
        filePath: string,
        /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
        encoding?: string,
      ],
      string
    >;
    /** 写文件，只能写入用户目录(ttfile://user) */
    writeFile: AsyncAPI<
      {
        /** 要写入的文件路径, 必须以 ttfile://user 开头 */
        filePath: string;
        /** 要写入的文本或二进制数据 */
        data: string;
        /** 指定写入文件的字符编码 */
        encoding:
          | 'ascii'
          | 'base64'
          | 'binary'
          | 'hex'
          | 'ucs2'
          | 'ucs-2'
          | 'utf16le'
          | 'utf-16le'
          | 'utf-8'
          | 'utf8'
          | 'latin1';
      },
      {}
    >;
    /** 同步写文件 */
    writeFileSync: SyncAPI<
      [
        /** 要写入的文件路径, 必须以 ttfile://user 开头 */
        filePath: string,
        /** 要写入的文本或二进制数据 */
        data: string,
        /** 指定写入文件的字符编码 */
        encoding:
          | 'ascii'
          | 'base64'
          | 'binary'
          | 'hex'
          | 'ucs2'
          | 'ucs-2'
          | 'utf16le'
          | 'utf-16le'
          | 'utf-8'
          | 'utf8'
          | 'latin1',
      ]
    >;
    /** 在 用户目录 下创建目录 */
    mkdir: AsyncAPI<{
      /** 创建的目录路径, 必须以 ttfile://user 开头  */
      dirPath: string;
    }>;
    /** 同步方法，在 用户目录 下创建目录 */
    mkdirSync: SyncAPI<
      [
        /** 创建的目录路径, 必须以 ttfile://user 开头  */
        dirPath: string,
      ]
    >;
    /** 读取目录内文件列表 */
    readdir: AsyncAPI<
      {
        /** 要读取的目录路径 */
        dirPath: string;
      },
      {
        /** 指定目录下的文件名数组 */
        files: string[];
      }
    >;
    /** 同步方法，读取目录内文件列表 */
    readdirSync: SyncAPI<
      [
        /** 要读取的目录路径 */
        dirPath: string,
      ],
      string[]
    >;
    /** 删除目录, 只能是 ttfile://user 下的目录 */
    rmdir: AsyncAPI<{
      /** 要删除的目录路径，必须以 ttfile://user 开头 */
      dirPath: string;
    }>;
    /** 同步方法，删除目录, 只能是 ttfile://user 下的目录 */
    rmdirSync: SyncAPI<
      [
        /** 要删除的目录路径，必须以 ttfile://user 开头 */
        dirPath: string,
      ]
    >;
    /** 判断文件/目录是否存在 */
    access: AsyncAPI<{
      /** 要判断是否存在的文件/目录路径 */
      path: string;
    }>;
    /** 同步方法，判断文件/目录是否存在 */
    accessSync: SyncAPI<
      [
        /** 待检测的文件或者目录地址 */
        path: string,
      ]
    >;
    /** 删除文件，只能在 ttfile://user 开头的用户目录下操作 */
    unlink: AsyncAPI<{
      /** 要删除的文件路径, 必须以 ttfile://user 开头 */
      filePath: string;
    }>;
    /** 同步方法，删除文件，只能删除 用户目录(ttfile://user)下的文件 */
    unlinkSync: SyncAPI<
      [
        /** 要删除的文件路径, 必须以 ttfile://user 开头 */
        filePath: string,
      ]
    >;
    /** 获取文件 Stats 对象 */
    stat: AsyncAPI<
      {
        /** 文件/目录路径 */
        path: string;
      },
      {
        /** Stats 对象 */
        stat: {
          /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
          mode: string;
          /** 文件大小，单位：B，对应 POSIX stat.st_size */
          size: number;
          /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
          lastAccessedTime: number;
          /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
          lastModifiedTime: number;
          /** 判断当前文件是否一个目录 */
          isDirectory: () => {};
          /** 判断当前文件是否一个普通文件 */
          isFile: () => {};
        };
      }
    >;
    /** 同步获取文件 Stats 对象 */
    statSync: SyncAPI<
      [
        /** 文件/目录路径 */
        path: string,
      ],
      {
        /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
        mode: string;
        /** 文件大小，单位：B，对应 POSIX stat.st_size */
        size: number;
        /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
        lastAccessedTime: number;
        /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
        lastModifiedTime: number;
        /** 判断当前文件是否一个目录 */
        isDirectory: () => {};
        /** 判断当前文件是否一个普通文件 */
        isFile: () => {};
      }
    >;
    /** 重命名文件，可以把文件从 oldPath 移动到 newPath */
    rename: AsyncAPI<{
      /** 源文件路径，可以是普通文件或目录,必须以 ttfile://user 开头 */
      oldPath: string;
      /** 新文件路径,必须以 ttfile://user 开头 */
      newPath: string;
    }>;
    /** 同步方法，重命名文件，可以把文件从 oldPath 移动到 newPath */
    renameSync: SyncAPI<
      [
        /** 源文件路径，可以是普通文件或目录,必须以 ttfile://user 开头 */
        oldPath: string,
        /** 新文件路径,必须以 ttfile://user 开头 */
        newPath: string,
      ]
    >;
    /** 复制文件 */
    copyFile: AsyncAPI<{
      /** 源文件路径，只可以是普通文件 */
      srcPath: string;
      /** 目标文件路径, 必须以 ttfile://user 开头 */
      destPath: string;
    }>;
    /** 同步方法，复制文件 */
    copyFileSync: SyncAPI<
      [
        /** 源文件路径，只可以是普通文件 */
        srcPath: string,
        /** 目标文件路径, 必须以 ttfile://user 开头 */
        destPath: string,
      ]
    >;
    /** 解压文件 */
    unzip: AsyncAPI<{
      /** 源文件路径，只可以是 zip 压缩文件 */
      zipFilePath: string;
      /** 目标目录路径, 必须以 ttfile://user 开头 */
      targetPath: string;
    }>;
    /** 保存临时文件到用户目录, 用户目录以 ttfile://user 开头 */
    saveFileSync: SyncAPI<
      [
        /** 文件临时路径 */
        tempFilePath: string,
        /** 要存储的路径, 必须以 ttfile://user 开头 */
        filePath?: string,
      ],
      string
    >;
    /** 保存临时文件到用户目录, 用户目录以 ttfile://user 开头 */
    saveFile: SaveFile;
    /** 获取 临时目录(ttfile://tmep) 或 用户目录(ttfile://user) 下的文件信息 */
    getFileInfo: GetFileInfo;
    /** 获取该小程序下用户目录文件列表, 用户目录以 ttfile://user 开头 */
    getSavedFileList: GetSavedFileList;
    /** 删除该小程序下用户目录内的文件, 用户目录以 ttfile://user 开头 */
    removeSavedFile: RemoveSavedFile;
  }
>;
