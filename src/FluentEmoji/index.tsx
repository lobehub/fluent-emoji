'use client';

import { ElementType, createElement, forwardRef, useMemo, useState } from 'react';
import { type HTMLAttributes } from 'react';

import { getFluentEmojiCDN } from '@/getFluentEmojiCDN';
import { EmojiType } from '@/getFluentEmojiCDN/utils';

const createContainer = (as: ElementType) =>
  forwardRef((props: any, ref) => createElement(as, { ...props, ref }));

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

const FluentEmoji = forwardRef<any, FluentEmojiProps>(
  (
    {
      emoji,
      className,
      style,
      type = '3d',
      cdn = 'aliyun',
      size = 40,
      unoptimized,
      as = 'img',
      onError,
    },
    ref,
  ) => {
    const [loadingFail, setLoadingFail] = useState(false);

    const ImgContainer = useMemo(() => createContainer(as), [as]);

    const emojiUrl = useMemo(() => {
      if (type === 'pure') return null;
      return getFluentEmojiCDN(emoji, { cdn, type });
    }, [type, emoji]);

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
        onError={(e: any) => {
          setLoadingFail(true);
          onError?.(e);
        }}
        ref={ref}
        src={emojiUrl}
        style={{ flex: 'none', ...style }}
        unoptimized={unoptimized}
        width={size}
      />
    );
  },
);

export default FluentEmoji;
