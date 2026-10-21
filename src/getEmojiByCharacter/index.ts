/**
 * `@lobehub/emojilib` exposes a bare `index.json` as its entry, which Node's ESM
 * loader rejects without an explicit type attribute.
 */
import emojilib from '@lobehub/emojilib/index.json' with { type: 'json' };
import emojiRegex from 'emoji-regex';

/** Return the first emoji found in `emoji`, or `undefined` if there is none. */
export const getEmoji = (emoji: string): string | undefined => {
  const regex = emojiRegex();
  const pureEmoji = emoji.match(regex)?.[0];
  return pureEmoji;
};

/** Return the `@lobehub/emojilib` name of the first emoji in `emoji`, or `undefined`. */
export const getEmojiNameByCharacter = (emoji: string): string | undefined => {
  const pureEmoji = getEmoji(emoji);
  if (!pureEmoji) return;
  const EmojiLab: any = emojilib;
  return EmojiLab?.[pureEmoji];
};
