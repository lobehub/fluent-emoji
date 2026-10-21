import {
  FluentEmoji,
  getEmoji,
  getEmojiNameByCharacter,
  getFluentEmojiCDN,
} from '@lobehub/fluent-emoji';
import { Flexbox, Segmented, Text } from '@lobehub/ui';
import { BentoCard, BentoGrid } from '@lobehub/ui/awesome';
import { useState } from 'react';

import { EMOJI_STYLES, type EmojiStyle } from './emojis';
import { renderLink } from './renderLink';

const COMPONENT_PATHNAME = '/components/fluent-emoji';
const CDN_PATHNAME = '/components/get-fluent-emoji-cdn';
const UTILS_PATHNAME = '/components/get-emoji-by-character';

const STYLE_EMOJIS = ['😀', '🚀', '🎉', '🦄', '🔥', '🧠', '🌈', '🐱'];
const ANIM_EMOJIS = ['👋', '🔥', '🎉'];
const SIZES = [16, 24, 32, 48];
const NAME_SAMPLE = '🤯';
const STRING_SAMPLE = 'Ship it 🚀 today';
const CDN_SAMPLE = '🦄';

const codeStyle = {
  fontFamily: 'var(--lobe-font-family-code, monospace)',
  fontSize: 12,
  wordBreak: 'break-all',
} as const;

function StylesTile() {
  const [type, setType] = useState<EmojiStyle>('anim');

  return (
    <Flexbox align={'center'} gap={20} height={'100%'} justify={'center'}>
      <Segmented
        onChange={(value) => setType(value as EmojiStyle)}
        options={EMOJI_STYLES}
        value={type}
      />
      <Flexbox align={'center'} gap={16} horizontal justify={'center'} wrap={'wrap'}>
        {STYLE_EMOJIS.map((emoji) => (
          <FluentEmoji emoji={emoji} key={`${type}-${emoji}`} size={56} type={type} />
        ))}
      </Flexbox>
    </Flexbox>
  );
}

export function BentoGallery() {
  const cdnUrl = getFluentEmojiCDN(CDN_SAMPLE, { type: 'flat' });
  const extracted = getEmoji(STRING_SAMPLE);

  return (
    <BentoGrid>
      <BentoCard
        colSpan={2}
        hint="anim · 3d · modern · flat · mono"
        href={COMPONENT_PATHNAME}
        renderLink={renderLink}
        rowSpan={2}
        title="Styles"
      >
        <StylesTile />
      </BentoCard>
      <BentoCard
        hint="animated webp"
        href={COMPONENT_PATHNAME}
        renderLink={renderLink}
        title="Animated"
      >
        <Flexbox align={'center'} gap={10} horizontal>
          {ANIM_EMOJIS.map((emoji) => (
            <FluentEmoji emoji={emoji} key={emoji} size={40} type={'anim'} />
          ))}
        </Flexbox>
      </BentoCard>
      <BentoCard
        hint="any pixel size"
        href={COMPONENT_PATHNAME}
        renderLink={renderLink}
        title="Size"
      >
        <Flexbox align={'flex-end'} gap={10} horizontal>
          {SIZES.map((size) => (
            <FluentEmoji emoji={'🎈'} key={size} size={size} />
          ))}
        </Flexbox>
      </BentoCard>
      <BentoCard
        hint="type='pure'"
        href={COMPONENT_PATHNAME}
        renderLink={renderLink}
        title="Native fallback"
      >
        <Flexbox align={'center'} gap={16} horizontal>
          <Flexbox align={'center'} gap={4}>
            <FluentEmoji emoji={'🦊'} size={40} />
            <Text fontSize={12} type={'secondary'}>
              3d
            </Text>
          </Flexbox>
          <Flexbox align={'center'} gap={4}>
            <FluentEmoji emoji={'🦊'} size={40} type={'pure'} />
            <Text fontSize={12} type={'secondary'}>
              pure
            </Text>
          </Flexbox>
        </Flexbox>
      </BentoCard>
      <BentoCard href={UTILS_PATHNAME} renderLink={renderLink} title="getEmojiNameByCharacter">
        <Flexbox align={'center'} gap={10} horizontal>
          <FluentEmoji emoji={NAME_SAMPLE} size={36} />
          <span style={codeStyle}>{getEmojiNameByCharacter(NAME_SAMPLE)}</span>
        </Flexbox>
      </BentoCard>
      <BentoCard
        colSpan={2}
        hint="npmmirror · unpkg"
        href={CDN_PATHNAME}
        renderLink={renderLink}
        title="getFluentEmojiCDN"
      >
        <Flexbox align={'center'} gap={16} horizontal>
          <FluentEmoji emoji={CDN_SAMPLE} size={40} type={'flat'} />
          <span style={codeStyle}>{cdnUrl}</span>
        </Flexbox>
      </BentoCard>
      <BentoCard
        colSpan={2}
        hint="first emoji in a string"
        href={UTILS_PATHNAME}
        renderLink={renderLink}
        title="getEmoji"
      >
        <Flexbox align={'center'} gap={16} horizontal>
          <span style={codeStyle}>getEmoji(&apos;{STRING_SAMPLE}&apos;)</span>
          <span aria-hidden>→</span>
          {extracted && <FluentEmoji emoji={extracted} size={40} />}
        </Flexbox>
      </BentoCard>
    </BentoGrid>
  );
}
