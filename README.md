# URL to File Converter (TypeScript + FFmpeg)

This project is a Node.js application written in TypeScript (`ts-node`) that uses **FFmpeg** to convert a media stream URL (such as `.m3u8` HLS streams) into a file (e.g., `.mp4`). The app handles the download, conversion, and storage of media files.

## Features

- Convert media stream URLs (such as HLS `.m3u8` streams) to `.mp4` files.
- Uses **FFmpeg** for efficient media processing.
- Written in TypeScript, using **ts-node** for type safety and ease of development.
- Configurable file paths and regex patterns for URL parsing.
- Handles media storage in a structured directory based on the stream’s metadata.

## Prerequisites

- **Node.js** (v14 or higher recommended)
- **FFmpeg** installed on your system:
  - On Ubuntu/Debian: `sudo apt-get install ffmpeg`
  - On macOS (via Homebrew): `brew install ffmpeg`
  - On Windows: [Download FFmpeg](https://ffmpeg.org/download.html)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MrKeon/converter.git
   cd converter
2. Install requirements:

    ### **IMPORTANT:** Copy the `config.example.ts` to `config.ts` and update the regex pattern matching and base directory

    ```bash
    npm i
    npm run start [url]
## Support

If you find this project useful, consider supporting me by buying me a coffee!

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/mrkeon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
