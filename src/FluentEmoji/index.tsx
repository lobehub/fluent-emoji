'use client';

import { ElementType, createElement, forwardRef, useMemo, useState } from 'react';
import { type HTMLAttributes } from 'react';
import { Center } from 'react-layout-kit';

import { getFluentEmojiCDN } from '@/getFluentEmojiCDN';
import { EmojiType } from '@/getFluentEmojiCDN/utils';

import { useStyles } from './style';

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
    const { cx, styles } = useStyles();

    const ImgContainer = useMemo(() => createContainer(as), [as]);

    const emojiUrl = useMemo(() => {
      if (type === 'pure') return null;
      return getFluentEmojiCDN(emoji, { cdn, type });
    }, [type, emoji]);

    if (type === 'pure' || !emojiUrl || loadingFail)
      return (
        <Center
          className={cx(styles.container, className)}
          flex={'none'}
          height={size}
          style={{ fontSize: size * 0.9, ...style }}
          width={size}
        >
          {emoji}
        </Center>
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
