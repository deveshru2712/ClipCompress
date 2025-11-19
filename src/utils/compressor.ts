import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import { spawn } from "child_process";
import { generateFFmpegFlags } from "./flagGenerator";

export async function compressVideo(
  inputPath: string,
  outputPath: string,
  preset: VideoPreset
): Promise<void> {
  const flags = generateFFmpegFlags(preset, inputPath, outputPath);

  const ffmpeg = spawn(ffmpegInstaller.path, flags);

  ffmpeg.stderr.on("data", (data) => {
    console.log(data.toString());
  });

  return new Promise((resolve, reject) => {
    ffmpeg.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`FFmpeg exited with code ${code}`));
      }
    });

    ffmpeg.on("error", (error) => {
      reject(error);
    });
  });
}
