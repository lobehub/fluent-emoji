import urlJoin from 'url-join';

import { EmojiType, genEmojiUrl } from './utils';

export interface FluentEmojiCdnConfig {
  /**
   * CDN to use: `aliyun` (registry.npmmirror.com) or `unpkg`.
   * @default 'aliyun'
   */
  cdn?: 'aliyun' | 'unpkg';
  /**
   * Emoji style.
   */
  type: EmojiType;
}

const ALIYUN_ICON_CDN = ({ pkg, path }: { path: string; pkg: string }) =>
  urlJoin('https://registry.npmmirror.com', pkg, 'latest/files', path);
const UNPKG_ICON_CDN = ({ pkg, path }: { path: string; pkg: string }) =>
  urlJoin('https://unpkg.com', `${pkg}@latest`, path);

/**
 * Resolve the CDN URL of a Fluent Emoji asset. Without `config`, returns the `3d` style from `aliyun`.
 */
export const getFluentEmojiCDN = (id: string, config?: FluentEmojiCdnConfig): string => {
  const { type = '3d', cdn = 'aliyun' } = config || {};
  const emoji = genEmojiUrl(id, type);

  return cdn === 'unpkg' ? UNPKG_ICON_CDN(emoji) : ALIYUN_ICON_CDN(emoji);
};
