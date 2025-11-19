import chalk from "chalk";
import fs from "fs";
import path from "path";

export const validateVideoFile = (filepath: string): boolean => {
  // Check if file exists
  if (!fs.existsSync(filepath)) {
    console.log(chalk.red("Error: File does not exist"));
    return false;
  }

  // Check if it's a file (not directory)
  if (!fs.statSync(filepath).isFile()) {
    console.log(chalk.red("Error: Path is not a file"));
    return false;
  }

  // Check file extension
  const validExtensions = [".mp4", ".mov", ".avi", ".mkv", ".webm", ".m4v"];
  const ext = path.extname(filepath).toLowerCase();

  if (!validExtensions.includes(ext)) {
    console.log(
      chalk.red(
        `Error: Unsupported file type ${ext}. Supported: ${validExtensions.join(
          ", "
        )}`
      )
    );
    return false;
  }

  // Check file size (optional but good)
  const stats = fs.statSync(filepath);
  if (stats.size === 0) {
    console.log(chalk.red("Error: File is empty"));
    return false;
  }

  return true;
};
