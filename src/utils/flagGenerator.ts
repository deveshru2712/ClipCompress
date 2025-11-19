export const generateFFmpegFlags = (
  preset: VideoPreset,
  inputPath: string,
  outputPath: string
): string[] => {
  const flags: string[] = [
    "-i",
    inputPath,
    "-c:v",
    preset.videoCodec,
    "-crf",
    preset.crf.toString(),
    "-preset",
    preset.preset,
    "-r",
    preset.fps.toString(),
    "-g",
    preset.keyframeInterval.toString(),
    "-s",
    preset.resolution,
    "-c:a",
    "aac",
    "-b:a",
    preset.audioBitrate,
    "-movflags",
    "+faststart",
    "-y",
  ];

  if (preset.maxDuration) {
    flags.push("-t", preset.maxDuration.toString());
  }

  flags.push(outputPath);

  return flags;
};

export const generateFFmpegCommand = (
  preset: VideoPreset,
  inputPath: string,
  outputPath: string
): string => {
  const flags = generateFFmpegFlags(preset, inputPath, outputPath);
  return `ffmpeg ${flags.join(" ")}`;
};
