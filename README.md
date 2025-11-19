# ClipCompress

A CLI-based video compressor.

## Features and Functionality

ClipCompress allows you to compress video files using various presets, reducing file size while maintaining reasonable quality. Key features include:

*   **Preset-based Compression:** Choose from predefined compression settings for different resolutions and quality levels (1080p, 720p, 480p).
*   **FFmpeg Integration:** Leverages FFmpeg for video encoding, providing powerful and versatile compression capabilities.
*   **File Validation:** Checks for valid video files and supported formats before attempting compression.
*   **Clear Feedback:** Provides real-time output during the compression process, including the generated FFmpeg command and any errors encountered.

## Technology Stack

*   **Node.js:**  Runtime environment for executing the CLI application.
*   **TypeScript:**  Programming language used for development, providing type safety and improved code maintainability.
*   **Commander.js:**  Library for building command-line interfaces, handling argument parsing and command execution.
*   **Chalk:**  Library for adding colors and styles to console output.
*   **@ffmpeg-installer/ffmpeg:**  Package to automatically install FFmpeg, simplifying setup.
*   **child\_process:**  Node.js module for spawning child processes to execute FFmpeg commands.

## Prerequisites

Before using ClipCompress, ensure that the following prerequisites are met:

*   **Node.js:**  Version 16 or higher is recommended. Download and install from [https://nodejs.org/](https://nodejs.org/).
*   **npm or yarn:**  Package manager for installing dependencies. npm is included with Node.js. Yarn can be installed from [https://yarnpkg.com/](https://yarnpkg.com/).

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/deveshru2712/ClipCompress.git
    cd ClipCompress
    ```

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

3.  **Build the project:**

    ```bash
    npm run build
    ```

4.  **Link the CLI globally (optional):**  This allows you to run `clipcompress` command from anywhere in your terminal.

    ```bash
    npm link
    ```

## Usage Guide

1.  **Run the compressor:**

    If you linked the CLI globally:

    ```bash
    clipcompress compress
    ```

    Otherwise, run it from the project directory:

    ```bash
    npm run test
    ```

2.  **Follow the prompts:**

    *   The CLI will display available compression presets.
    *   Enter the path to your video file. The tool validates if its a valid video file and displays error messages if not. Supported formats are `.mp4`, `.mov`, `.avi`, `.mkv`, `.webm`, and `.m4v`.
    *   Select a preset by entering its number (1, 2, or 3).
    *   The compression process will begin, and progress will be displayed in the console.
    *   Upon completion, the compressed video will be saved as `output.mp4` in the project directory.

## API Documentation

This project is a CLI tool and does not expose a public API.

## Contributing Guidelines

Contributions are welcome! To contribute to ClipCompress, please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Test your changes thoroughly.
5.  Submit a pull request to the `master` branch.

## License Information

License is not specified.

## Contact/Support Information

For questions, bug reports, or feature requests, please open an issue on the GitHub repository: [https://github.com/deveshru2712/ClipCompress](https://github.com/deveshru2712/ClipCompress)