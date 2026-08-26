/**
 * `@lobehub/emojilib` exposes a bare `index.json` as its entry, which Node's ESM
 * loader rejects without an explicit type attribute.
 */
import emojilib from '@lobehub/emojilib/index.json' with { type: 'json' };
import emojiRegex from 'emoji-regex';

export const getEmoji = (emoji: string): string | undefined => {
  const regex = emojiRegex();
  const pureEmoji = emoji.match(regex)?.[0];
  return pureEmoji;
};

export const getEmojiNameByCharacter = (emoji: string): string | undefined => {
  const pureEmoji = getEmoji(emoji);
  if (!pureEmoji) return;
  const EmojiLab: any = emojilib;
  return EmojiLab?.[pureEmoji];
};
