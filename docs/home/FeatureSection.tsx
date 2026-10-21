import { FeatureGrid, type FeatureGridItem } from '@lobehub/ui/awesome';
import { Bot, CloudDownload, Component, LifeBuoy, Shapes, WandSparkles } from 'lucide-react';

import { renderLink } from './renderLink';

const FEATURES: FeatureGridItem[] = [
  {
    description: 'Switch between Anim, 3D, Modern, Flat and Mono with a single type prop.',
    href: '/components/fluent-emoji',
    icon: Shapes,
    title: 'Five styles',
  },
  {
    description:
      'Images load lazily from npmmirror or unpkg, so no emoji asset ever lands in your bundle.',
    href: '/components/get-fluent-emoji-cdn',
    icon: CloudDownload,
    title: 'Loaded from CDN',
  },
  {
    description:
      'When an image fails to load, or with type pure, the system emoji renders at the same size.',
    href: '/components/fluent-emoji',
    icon: LifeBuoy,
    title: 'Native fallback',
  },
  {
    description: 'Render through next/image or any other image component with the as prop.',
    href: '/components/fluent-emoji',
    icon: Component,
    title: 'Bring your own img',
  },
  {
    description:
      'getEmoji, getEmojiNameByCharacter and getFluentEmojiCDN cover parsing, naming and URLs.',
    href: '/components/get-emoji-by-character',
    icon: WandSparkles,
    title: 'Emoji utilities',
  },
  {
    description: 'skills.md and llms.txt hand coding agents the whole API in one fetch.',
    icon: Bot,
    title: 'AI-native docs',
  },
];

export function FeatureSection() {
  return <FeatureGrid items={FEATURES} renderLink={renderLink} />;
}
