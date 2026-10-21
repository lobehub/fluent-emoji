import { type FluentEmojiProps } from '@lobehub/fluent-emoji';

export type EmojiStyle = Exclude<FluentEmojiProps['type'], 'pure' | undefined>;

export const EMOJI_STYLES: { label: string; value: EmojiStyle }[] = [
  { label: 'Anim', value: 'anim' },
  { label: '3D', value: '3d' },
  { label: 'Modern', value: 'modern' },
  { label: 'Flat', value: 'flat' },
  { label: 'Mono', value: 'mono' },
];

export const formatEmojiName = (name?: string) => {
  if (!name) return '';
  const text = name.replaceAll('-', ' ');
  return text.charAt(0).toUpperCase() + text.slice(1);
};
