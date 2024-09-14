import { spawn } from "child_process";
import { existsSync, mkdirSync } from "fs";
import { config } from "./config";

export const downloadVideo = async (url: string, outputPath: string, maxDuration?: number) => {
  if (existsSync(outputPath)) {
    console.debug(`File already exists: ${outputPath}`);
    return;
  }

  const directoryMode = 0o777;
  const parentDirectory = outputPath.substring(0, outputPath.lastIndexOf('/'));

  // Create parent directories recursively if they don't exist
  mkdirSync(parentDirectory, { mode: directoryMode, recursive: true });

  console.debug(`Downloading and converting: ${url}`);
  console.debug(`Streaming data to: ${outputPath}`);

  // Build FFmpeg command
  const ffmpegArgs = [
    '-i', url,         // Input URL (the m3u8 stream)
    '-c', 'copy',      // Copy the streams without re-encoding
    '-f', 'mp4',       // Force output format to mp4
    outputPath,          // Output file path
    '-timeout', '10000000', // Timeout for connections (in microseconds)
    '-rw_timeout', '5000000', // Read-write timeout for socket (in microseconds)
  ];

  // If a maximum duration is specified, limit the download
  if (maxDuration) {
    ffmpegArgs.splice(2, 0, '-t', maxDuration.toString());
  }

  return new Promise<void>((resolve, reject) => {
    const ffmpegProcess = spawn('ffmpeg', ffmpegArgs);

    // ffmpegProcess.stdout.on('data', (data) => {
    //   console.debug(`FFmpeg stdout: ${data}`);
    // });

    // ffmpegProcess.stderr.on('data', (data) => {
    //   console.error(`FFmpeg stderr: ${data}`);
    // });

    ffmpegProcess.on('close', (code) => {
      if (code === 0) {
        console.debug(`Download and conversion completed: ${outputPath}`);
        resolve();
      } else {
        console.error(`FFmpeg process exited with code ${code}`);
        reject(new Error(`FFmpeg failed with code ${code}`));
      }
    });

    ffmpegProcess.on('error', (err) => {
      console.error(`FFmpeg error: ${err.message}`);
      reject(err);
    });
  });
};

(async function () {
  const url = process.argv.slice(2)[0].trim();
  console.log(process.argv);
  const regex = config.regexPatterns.filenamePattern;
  const match = url.match(regex);
  let outputPath = "";
  try {
    if (match) {
      const filename = match[1]; // Extract the filename
      const parentDir = filename.split('-')[0];
      // Construct the output path using the base path from the config
      outputPath = `${config.paths.mediaServerBase}/${parentDir}/${filename}.mp4`;
      await downloadVideo(url, outputPath);
    } else {
      console.log(`Failed to match regex: ${regex} to url: ${url}`);
    }
  } catch (e) {
    console.debug(`Failed to split url, attempting to download. OutputName: ${outputPath}`);
  }
})();
