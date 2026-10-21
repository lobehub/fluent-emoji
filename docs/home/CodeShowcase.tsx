import { FluentEmoji, getFluentEmojiCDN } from '@lobehub/fluent-emoji';
import { Flexbox, Text } from '@lobehub/ui';
import { CodeShowcase, type CodeShowcaseItem } from '@lobehub/ui/awesome';

import { EMOJI_STYLES } from './emojis';

const UNPKG_URL = getFluentEmojiCDN('🦄', { cdn: 'unpkg', type: 'flat' });

const EXAMPLES: CodeShowcaseItem[] = [
  {
    code: `import { FluentEmoji } from '@lobehub/fluent-emoji'

export default () => <FluentEmoji emoji={'🚀'} size={64} />`,
    key: 'basic',
    label: 'Basic',
    preview: <FluentEmoji emoji={'🚀'} size={64} />,
  },
  {
    code: `import { FluentEmoji } from '@lobehub/fluent-emoji'

const types = ['anim', '3d', 'modern', 'flat', 'mono'] as const

export default () =>
  types.map((type) => (
    <FluentEmoji emoji={'🦄'} key={type} size={56} type={type} />
  ))`,
    key: 'styles',
    label: 'Styles',
    preview: (
      <Flexbox align={'center'} gap={12} horizontal wrap={'wrap'}>
        {EMOJI_STYLES.map(({ value }) => (
          <FluentEmoji emoji={'🦄'} key={value} size={56} type={value} />
        ))}
      </Flexbox>
    ),
  },
  {
    code: `import { FluentEmoji } from '@lobehub/fluent-emoji'

// Renders the system emoji, also used when the CDN image fails
export default () => <FluentEmoji emoji={'🦄'} size={56} type={'pure'} />`,
    key: 'fallback',
    label: 'Native fallback',
    preview: <FluentEmoji emoji={'🦄'} size={56} type={'pure'} />,
  },
  {
    code: `import { getFluentEmojiCDN } from '@lobehub/fluent-emoji'

const url = getFluentEmojiCDN('🦄', { cdn: 'unpkg', type: 'flat' })

export default () => <img alt={'🦄'} src={url} width={64} />`,
    key: 'cdn',
    label: 'CDN URL',
    preview: (
      <Flexbox align={'center'} gap={12}>
        <img alt={'🦄'} src={UNPKG_URL} width={64} />
        <Text fontSize={12} style={{ wordBreak: 'break-all' }} type={'secondary'}>
          {UNPKG_URL}
        </Text>
      </Flexbox>
    ),
  },
];

export function CodeShowcaseSection() {
  return <CodeShowcase items={EXAMPLES} />;
}
