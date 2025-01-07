import { defineConfig } from 'dumi';
import { SiteThemeConfig } from 'dumi-theme-lobehub';

import { description, homepage, name } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig: SiteThemeConfig = {
  actions: [
    {
      icon: 'Github',
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/fluent-emoji',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  analytics: {
    plausible: {
      domain: 'fluent-emoji.lobehub.com',
      scriptBaseUrl: 'https://plausible.lobehub-inc.cn',
    },
  },
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description,
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOL_eons4Cktsi',
    repo: 'lobehub/fluent-emoji',
    repoId: 'R_kgDOL_eong',
  },
  metadata: {
    openGraph: {
      image: 'https://github.com/user-attachments/assets/b2b35675-b6dd-43d2-aea1-8139897dbfec',
    },
  },
  name: 'Fluent Emoji',
  prefersColor: {
    default: 'dark',
    switch: false,
  },
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
  title: 'Fluent Emoji',
};

export default defineConfig({
  apiParser: isProduction ? {} : false,
  base: '/',
  define: {
    'process.env': process.env,
  },
  exportStatic: {},
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://lobehub.com/favicon.ico'],
  jsMinifier: 'swc',
  locales: [{ id: 'en-US', name: 'English' }],
  mako: isWin || isProduction ? false : {},
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  publicPath: '/',
  resolve: isProduction
    ? {
        entryFile: './src/index.ts',
      }
    : undefined,
  sitemap: {
    hostname: 'https://fluent-emoji.lobehub.com',
  },
  ssr: isProduction ? {} : false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Fluent Emoji',
});
