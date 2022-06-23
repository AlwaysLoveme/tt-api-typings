import { SyncAPI } from './types';

type Start = SyncAPI<[], {}>;
type Pause = SyncAPI<[], {}>;
type Resume = SyncAPI<[], {}>;
type Stop = SyncAPI<[], {}>;
type Destroy = SyncAPI<[], {}>;
type RequestFrame = SyncAPI<[], {}>;
type OnError = SyncAPI<
  [
    /**
     * err 为返回的错误原因
     */
    (err: Error) => void,
  ],
  {}
>;
type OnStart = SyncAPI<[() => void], {}>;
type onStop = SyncAPI<
  [
    (info: {
      /**
       * The file path of the output video.
       */
      filePath: string;
      /**
       * The duration of the output video, in seconds.
       */
      duration: number;
      /**
       * The file size of the output video, in kb.
       */
      fileSize: number;
    }) => void,
  ],
  {}
>;

export const createMediaRecorder: SyncAPI<
  [
    canvas: unknown,
    config?: {
      /**
       * The width of the output video.
       * @default 480
       */
      width?: number;
      /**
       * The height of the output video.
       * @default 640
       */
      height?: number;
      /**
       * The bit rate of the output video, in kbps.
       * @default 3000
       */
      videoBitsPerSecond?: number;
      /**
       * The gop(group of pictures) of the output video.
       * @default 12
       */
      gop?: number;
      /**
       * The fps(frame per second) of the outpu video.
       * This value corresponds to the intended frame rate.
       * If you set this to 0, media recorder will enter manual mode.
       * In manual mode, you need to call `requestFrame` to trigger the recording of the canvas.
       * @default 60
       */
      fps?: number;
    },
  ],
  {
    start: Start;
    pause: Pause;
    resume: Resume;
    stop: Stop;
    destroy: Destroy;
    onError: OnError;
    requestFrame: RequestFrame;
  }
>;
