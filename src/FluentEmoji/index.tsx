'use client';

import { type ElementType, type HTMLAttributes, type Ref, useMemo, useState } from 'react';

import { getFluentEmojiCDN } from '@/getFluentEmojiCDN';
import type { EmojiType } from '@/getFluentEmojiCDN/utils';

export interface FluentEmojiProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Element or component used to render the image, e.g. `next/image`.
   * @default 'img'
   */
  as?: ElementType;
  /**
   * CDN the image is loaded from: `aliyun` (registry.npmmirror.com) or `unpkg`.
   * @default 'aliyun'
   */
  cdn?: 'aliyun' | 'unpkg';
  /**
   * The emoji character to render.
   */
  emoji: string;
  /**
   * Ref forwarded to the rendered image element.
   */
  ref?: Ref<any>;
  /**
   * Width and height in pixels.
   * @default 40
   */
  size?: number;
  /**
   * Emoji style. `pure` renders the native emoji character instead of an image.
   * @default '3d'
   */
  type?: EmojiType | 'pure';
  /**
   * Passed through to the `as` component (useful with `next/image`).
   */
  unoptimized?: boolean;
}

const FluentEmoji = ({
  ref,
  emoji,
  className,
  style,
  type = '3d',
  cdn = 'aliyun',
  size = 40,
  unoptimized,
  as = 'img',
  onError,
}: FluentEmojiProps) => {
  const [loadingFail, setLoadingFail] = useState(false);

  // React 19 passes `ref` as a regular prop, so `as` can be rendered directly.
  const ImgContainer = as;

  const emojiUrl = useMemo(() => {
    if (type === 'pure') return null;
    return getFluentEmojiCDN(emoji, { cdn, type });
  }, [type, emoji, cdn]);

  if (type === 'pure' || !emojiUrl || loadingFail)
    return (
      <div
        className={className}
        style={{
          alignItems: 'center',
          display: 'inline-flex',
          fontSize: size,
          height: size,
          justifyContent: 'center',
          lineHeight: 1,
          position: 'relative',
          textAlign: 'center',
          verticalAlign: 'middle',
          width: size,
          ...style,
        }}
      >
        {emoji}
      </div>
    );

  return (
    <ImgContainer
      alt={emoji}
      className={className}
      height={size}
      loading={'lazy'}
      ref={ref}
      src={emojiUrl}
      style={{ flex: 'none', ...style }}
      unoptimized={unoptimized}
      width={size}
      onError={(e: any) => {
        setLoadingFail(true);
        onError?.(e);
      }}
    />
  );
};

export default FluentEmoji;
