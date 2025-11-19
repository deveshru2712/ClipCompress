declare global {
  interface VideoPreset {
    id: number;
    label: string;
    description: string;
    resolution: string;
    crf: number;
    videoCodec: string;
    preset: string;
    fps: number;
    keyframeInterval: number;
    audioBitrate: string;
    estimatedSize: string;
    maxDuration?: number;
  }
}

export {};
