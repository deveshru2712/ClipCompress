#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import readline from "readline";
import { validateVideoFile } from "./utils/filevalidator";
import { videoCompressionPresets } from "./preset";
import { generateFFmpegCommand } from "./utils/flagGenerator";
import { compressVideo } from "./utils/compressor";

const program = new Command();

let filepath = "";

program
  .command("compress")
  .description("A cli based video compressor")
  .action(() => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });

    let currentStep: "filepath" | "preset" = "filepath";

    console.log(chalk.blue("Welcome to vid-compress!"));
    console.log(chalk.gray("Available compression presets:\n"));

    videoCompressionPresets.forEach((preset) => {
      console.log(
        chalk.green(`${preset.id}. ${preset.label}`) +
          chalk.gray(` - ${preset.description}`)
      );

      console.log(
        chalk.cyan(`   Resolution: ${preset.resolution}`) +
          chalk.yellow(` | Estimated size: ${preset.estimatedSize}`)
      );
    });

    console.log(chalk.gray("Please enter the video file path:"));
    rl.prompt();

    rl.on("line", async (input) => {
      if (currentStep === "filepath") {
        // Validate file
        if (!validateVideoFile(input)) {
          console.log(chalk.gray("Please enter a valid video file path:"));
          rl.prompt();
          return;
        }

        filepath = input;
        console.log(chalk.green(`✓ Valid file: ${filepath}`));
        console.log(chalk.gray("Now choose a preset by number (1-3):"));
        currentStep = "preset";
        rl.prompt();
      } else if (currentStep === "preset") {
        // Handle preset selection
        const presetId = parseInt(input);
        const selectedPreset = videoCompressionPresets.find(
          (p) => p.id === presetId
        );

        if (!selectedPreset) {
          console.log(chalk.red("Invalid preset number. Please choose 1-4:"));
          rl.prompt();
          return;
        }

        console.log(chalk.green(`✓ Selected preset: ${selectedPreset.label}`));
        console.log(chalk.blue("Starting compression..."));

        console.log(
          chalk.gray(
            generateFFmpegCommand(selectedPreset, filepath, "output.mp4")
          )
        );

        try {
          await compressVideo(filepath, "output.mp4", selectedPreset);
          console.log(
            chalk.green("✓ Compression complete! Saved to output.mp4")
          );
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error(chalk.red(`✗ Compression failed: ${error.message}`));
          } else {
            console.error(chalk.red(`✗ Compression failed: ${String(error)}`));
          }
        }

        rl.close();
      }
    });
  });

program.parse();
