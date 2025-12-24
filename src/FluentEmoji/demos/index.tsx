import {
  FluentEmoji,
  type FluentEmojiProps,
  getEmoji,
  getEmojiNameByCharacter,
} from '@lobehub/fluent-emoji';
import { Flexbox } from '@lobehub/ui';
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Button } from 'antd';

export default () => {
  const store = useCreateStore();
  const control: FluentEmojiProps | any = useControls(
    {
      cdn: {
        options: ['aliyun', 'unpkg'],
        value: 'aliyun',
      },
      emoji: '🤯',
      size: {
        max: 128,
        min: 16,
        step: 1,
        value: 64,
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Flexbox align={'center'} gap={8}>
        <Flexbox gap={8} horizontal>
          <FluentEmoji type={'anim'} {...control} />
          <FluentEmoji type={'3d'} {...control} />
          <FluentEmoji type={'modern'} {...control} />
          <FluentEmoji type={'flat'} {...control} />
          <FluentEmoji type={'mono'} {...control} />
          <FluentEmoji type={'pure'} {...control} />
        </Flexbox>
        <Button icon={getEmoji(control.emoji)}>{getEmojiNameByCharacter(control.emoji)}</Button>
      </Flexbox>
    </StoryBook>
  );
};
