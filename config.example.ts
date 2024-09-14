/**
 * Create a file called config.ts that matches this Config interface
 * This file is an EXAMPLE of the implementation, you'll need to add a filename regex pattern and mediaServerBase which is the root dir of the videos intending to ffmpeg to
 */

export interface Config {
  regexPatterns: {
    filenamePattern: RegExp; // Use the `RegExp` type for the regex pattern
  };
  paths: {
    mediaServerBase: string; // Path as a string
  };
}

export const config: Config = {
  regexPatterns: {
    // Define the regex pattern to extract the filename from the URL
    filenamePattern: /\//,
  },
  paths: {
    // Base directory where media files are stored
    mediaServerBase: '/some/output/path',
  },
};
