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
   git clone https://github.com/yourusername/converter.git
   cd converter
