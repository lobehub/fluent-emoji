import { defineConfig } from '@lobehub/lint';

export default defineConfig(
  {
    ignores: [
      '**/node_modules',
      '**/coverage',
      '**/.coverage',
      '**/jest*',
      '**/_test_',
      '**/__test__',
      '**/.react-router',
      '**/dist',
      '**/es',
      '**/lib',
      '**/logs',
    ],
    react: true,
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules: {
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    // docs-kit demos must default-export the demo component.
    files: ['**/demos/**'],
    rules: {
      'no-restricted-syntax': 'off',
    },
  },
);
