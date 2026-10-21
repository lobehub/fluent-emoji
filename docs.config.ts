import { defineDocsConfig } from '@lobehub/docs-kit/src/config';

export default defineDocsConfig({
  alias: {
    '@': 'src',
    '@lobehub/fluent-emoji': 'src',
  },
  atomDirs: [{ dir: 'src', subType: 'components', type: 'component' }],
  description:
    'Microsoft Fluent Emoji for React, one component in five styles (anim, 3d, modern, flat, mono) loaded from a CDN.',
  favicons: {
    icon: 'https://lobehub.com/favicon.ico',
  },
  homePage: './docs/home/home.tsx',
  navSections: {},
  siteUrl: 'https://fluent-emoji.lobehub.com',
  themeConfig: {
    analytics: {
      plausible: {
        domain: 'fluent-emoji.lobehub.com',
        source: 'https://plausible.lobehub-inc.cn/js/script.js',
      },
    },
    apiHeader: {
      docUrl: '{github}/edit/master/{atomId}',
      github: 'https://github.com/lobehub/fluent-emoji',
      match: ['/components/'],
      packageName: '@lobehub/fluent-emoji',
      sourceUrl: '{github}/tree/master/{atomId}',
    },
    giscus: {
      category: 'Q&A',
      categoryId: 'DIC_kwDOL_eons4Cktsi',
      repo: 'lobehub/fluent-emoji',
      repoId: 'R_kgDOL_eong',
    },
    metadata: {
      openGraph: {
        image:
          'https://repository-images.githubusercontent.com/804759710/6a5e449c-48b0-4d56-8dcb-6c94b2a3abaf',
      },
    },
    navItems: [
      { external: true, href: 'https://ui.lobehub.com', label: 'UI' },
      { external: true, href: 'https://icons.lobehub.com', label: 'Icons' },
      { href: '/changelog', label: 'Changelog' },
    ],
    prefersColor: 'dark',
    socialLinks: [
      {
        href: 'https://github.com/lobehub/fluent-emoji',
        icon: 'github',
        label: 'GitHub',
      },
      { href: 'https://discord.gg/AYFPHvv2jT', icon: 'discord', label: 'Discord' },
      {
        href: 'https://www.npmjs.com/package/@lobehub/fluent-emoji',
        icon: 'npm',
        label: 'NPM',
      },
    ],
  },
  title: 'Fluent Emoji',
});
