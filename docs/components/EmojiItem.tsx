import { Center, CopyButton, Flexbox } from '@lobehub/ui';
import { Typography } from 'antd';
import { createStaticStyles } from 'antd-style';
import { capitalize } from 'es-toolkit/string';
import { ReactNode, memo, useRef } from 'react';

const styles = createStaticStyles(({ css, cssVar }) => {
  return {
    card: css`
      position: relative;

      overflow: hidden;

      border: 1px solid ${cssVar.colorBorderSecondary};
      border-radius: ${cssVar.borderRadiusLG};

      background: ${cssVar.colorBgContainer};
    `,
    row: css`
      border-block-start: 1px solid ${cssVar.colorFillSecondary};
    `,
    title: css`
      margin: 0;
      font-size: 12px !important;
    `,
    titleRow: css`
      margin-block-start: -8px;
    `,
  };
});

interface IconItemProps {
  children: ReactNode;
  emoji: string;
  title: string;
  url: string;
}

const EmojiItem = memo<IconItemProps>(({ children, title, url, emoji }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Flexbox className={styles.card}>
      <Center height={96} ref={ref} style={{ position: 'relative' }} width={'100%'}>
        {children}
      </Center>

      <Flexbox
        align={'center'}
        className={styles.titleRow}
        horizontal
        justify={'space-between'}
        paddingBlock={8}
        paddingInline={12}
        width={'100%'}
      >
        <Typography.Title className={styles.title} ellipsis={{ rows: 1 }} level={2}>
          {capitalize(title.replaceAll('-', ' '))}
        </Typography.Title>
      </Flexbox>
      <Flexbox align={'center'} className={styles.row} horizontal>
        <Flexbox flex={1} horizontal paddingInline={12}>
          <Center flex={1} height={32}>
            {emoji}
          </Center>
          <Center flex={1} height={32}>
            <CopyButton content={url} size={'small'} />
          </Center>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
});

export default EmojiItem;
