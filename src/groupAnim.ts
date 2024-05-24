import { globSync } from 'glob';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import pMap from 'p-map';

const fixWinPath = (path: string) => path.replaceAll('\\', '/');

const root = resolve(__dirname, '../');
export const emoji3D = globSync(fixWinPath(resolve(root, 'packages/anim/assets/*.webp')));

function getEmojiGroup(emoji: string) {
  const mainPart = emoji.split('-')[0];

  if (mainPart < '1f469') {
    return 'anim1';
  } else if (mainPart >= '1f469' && mainPart < '1f5a0') {
    return 'anim2';
  } else if (mainPart >= '1f5a0' && mainPart < '1f9a0') {
    return 'anim3';
  } else {
    return 'anim4';
  }
}

const run = async () => {
  await pMap(
    emoji3D,
    async (emoji) => {
      const filepath = fixWinPath(emoji);
      const file = readFileSync(filepath);
      const filename = filepath.split('/').pop();
      const group = getEmojiGroup(filename as string);
      const output = resolve(root, `packages/${group}/assets/${filename}`);
      writeFileSync(output, file);
    },
    { concurrency: 10 },
  );
};

run();
