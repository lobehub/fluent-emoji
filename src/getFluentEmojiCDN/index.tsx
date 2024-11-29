import urlJoin from 'url-join';

import { EmojiType, genEmojiUrl } from './utils';

export interface FluentEmojiCdnConfig {
  cdn?: 'aliyun' | 'unpkg';
  type: EmojiType;
}

const ALIYUN_ICON_CDN = ({ pkg, path }: { path: string; pkg: string }) =>
  urlJoin('https://registry.npmmirror.com', pkg, 'latest/files', path);
const UNPKG_ICON_CDN = ({ pkg, path }: { path: string; pkg: string }) =>
  urlJoin('https://unpkg.com', `${pkg}@latest`, path);

export const getFluentEmojiCDN = (id: string, config?: FluentEmojiCdnConfig): string => {
  const { type = '3d', cdn = 'aliyun' } = config || {};
  const emoji = genEmojiUrl(id, type);

  return cdn === 'unpkg' ? UNPKG_ICON_CDN(emoji) : ALIYUN_ICON_CDN(emoji);
};
