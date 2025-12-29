'use client';

import { cx } from 'antd-style';
import { ElementType, createElement, forwardRef, useMemo, useState } from 'react';
import { type HTMLAttributes } from 'react';

import { getFluentEmojiCDN } from '@/getFluentEmojiCDN';
import { EmojiType } from '@/getFluentEmojiCDN/utils';

import { styles } from './style';

const createContainer = (as: ElementType) =>
  forwardRef((props: any, ref) => createElement(as, { ...props, ref }));

export interface FluentEmojiProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  cdn?: 'aliyun' | 'unpkg';
  emoji: string;
  size?: number;
  type?: EmojiType | 'pure';
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
          className={cx(styles.container, className)}
          style={{
            alignItems: 'center',
            display: 'inline-flex',
            fontSize: size,
            height: size,
            justifyContent: 'center',
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
