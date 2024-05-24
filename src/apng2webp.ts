import { globSync } from 'glob';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
import pMap from 'p-map';

const fixWinPath = (path: string) => path.replaceAll('\\', '/');

const root = resolve(__dirname, '../');
export const emoji3D = globSync(fixWinPath(resolve(root, 'assets/*.png')));

async function apngToWebp(inputFile: string, outputFile: string) {
  const ffmpeg = spawn('ffmpeg', [
    '-i',
    inputFile,
    '-lossless',
    '0',
    '-compression_level',
    '5',
    '-quality',
    '60',
    '-loop',
    '0',
    outputFile,
  ]);

  ffmpeg.stdin.end();
}

const run = async () => {
  await pMap(
    emoji3D,
    async (emoji) => {
      const filepath = fixWinPath(emoji);
      const filename = filepath.split('/').pop();
      const output = resolve(root, `packages/anim/assets/${filename?.replaceAll('.png', '.webp')}`);

      return apngToWebp(filepath, output);
    },
    { concurrency: 10 },
  );
};

run();
