---
nav: Components
group:
  title: Utils
  order: 999
title: getEmojiByCharacter
atomId: 'getEmojiNameByCharacter, getEmoji'
---

## getEmojiNameByCharacter

```tsx
import { getEmojiNameByCharacter } from '@lobehub/fluent-emoji';

export default () => {
  const name = getEmojiNameByCharacter('🤯');

  return name;
};
```

## getEmoji

```tsx
import { getEmoji } from '@lobehub/fluent-emoji';

export default () => {
  const emoji = getEmoji('🤯 in string');

  return emoji;
};
```
