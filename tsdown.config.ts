import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'tsdown';

const root = fileURLToPath(new URL('.', import.meta.url));
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8')) as {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
];

/**
 * `unbundle` must stay on: `'use client'` lives in `src/FluentEmoji/index.tsx`,
 * and a bundled build would drop it, turning the component into a server module
 * under the Next.js App Router.
 */
export default defineConfig({
  dts: true,
  entry: ['src/index.ts'],
  external,
  format: ['esm'],
  outDir: 'es',
  sourcemap: true,
  unbundle: true,
});
