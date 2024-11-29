import emojilib from '@lobehub/emojilib';
import { FluentEmoji, FluentEmojiProps, getFluentEmojiCDN } from '@lobehub/fluent-emoji';
import { SearchBar } from '@lobehub/ui';
import { Segmented } from 'antd';
import { useTheme } from 'antd-style';
import { memo, useMemo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import EmojiItem from './EmojiItem';
import VirtuosoGridList from './VirtuosoGridList';

const Dashboard = memo(() => {
  const theme = useTheme();
  const [type, setType] = useState<FluentEmojiProps['type']>('3d');
  const [keyword, setKeyword] = useState<string>();

  const list = useMemo(() => {
    if (!keyword) return Object.entries(emojilib);
    return Object.entries(emojilib).filter(([emoji, name]) => {
      return emoji.includes(keyword) || name.toLowerCase().includes(keyword.toLowerCase());
    });
  }, [keyword]);

  return (
    <Flexbox gap={16} style={{ maxWidth: 960 }} width={'100%'}>
      <Flexbox align={'center'} gap={12} horizontal>
        <SearchBar
          defaultValue={keyword}
          onSearch={(v) => setKeyword(v)}
          placeholder={'Search by emoji keywords...'}
          style={{ width: '100%' }}
          type={'block'}
        />
        <Segmented
          defaultValue={type}
          onChange={(v: FluentEmojiProps['type']) => setType(v)}
          options={[
            {
              label: 'Mono',
              value: 'mono',
            },
            {
              label: 'Flat',
              value: 'flat',
            },
            {
              label: 'Modern',
              value: 'modern',
            },
            {
              label: '3D',
              value: '3d',
            },
            {
              label: 'Anim',
              value: 'anim',
            },
          ]}
          style={{
            border: `1px solid ${theme.colorBorder}`,
          }}
        />
      </Flexbox>
      <VirtuosoGridList
        data={list}
        initialItemCount={24}
        itemContent={(_, [emoji, name]) => (
          <EmojiItem
            emoji={emoji}
            key={name}
            title={name}
            url={getFluentEmojiCDN(emoji, { type: type as any })}
          >
            <FluentEmoji emoji={emoji} key={name} size={56} type={type} />
          </EmojiItem>
        )}
        style={{
          minHeight: '1050px',
        }}
      />
    </Flexbox>
  );
});

export default Dashboard;
