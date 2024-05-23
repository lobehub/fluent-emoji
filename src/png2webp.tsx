import { globSync } from 'glob';
import { resolve } from 'node:path';
import pMap from 'p-map';
import sharp from 'sharp';

const fixWinPath = (path: string) => path.replaceAll('\\', '/');

const root = resolve(__dirname, '../');
export const emoji3D = globSync(fixWinPath(resolve(root, 'assets/3d/*.png')));

const run = async () => {
  await pMap(
    emoji3D,
    async (emoji) => {
      const filepath = fixWinPath(emoji);
      const filename = filepath.split('/').pop();
      const output = resolve(root, `packages/3d/assets/${filename?.replaceAll('.png', '.webp')}`);
      sharp(filepath)
        .webp()
        .toFile(output, (err) => {
          if (err) console.error(err);
          console.log(output);
        });
    },
    { concurrency: 10 },
  );
};

run();
