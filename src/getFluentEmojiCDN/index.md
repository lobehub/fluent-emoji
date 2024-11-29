---
nav: Components
group:
  title: Utils
  order: 999
title: getFluentEmojiCDN
---

## Default

```tsx
import { getFluentEmojiCDN } from '@lobehub/fluent-emoji';
import { Grid } from '@lobehub/ui';

export default () => {
  const mono = getFluentEmojiCDN('🤯', { type: 'mono' });
  const flat = getFluentEmojiCDN('🤯', { type: 'flat' });
  const modern = getFluentEmojiCDN('🤯', { type: 'modern' });
  const threeD = getFluentEmojiCDN('🤯', { type: '3d' });
  const anim = getFluentEmojiCDN('🤯', { type: 'anim' });

  return (
    <Grid rows={5} maxItemWidth={48}>
      <img height={48} src={mono} alt="🤯" />
      <img height={48} src={flat} alt="🤯" />
      <img height={48} src={modern} alt="🤯" />
      <img height={48} src={threeD} alt="🤯" />
      <img height={48} src={anim} alt="🤯" />
    </Grid>
  );
};
```

## Options

```ts
export interface FluentEmojiCdnConfig {
  cdn?: 'aliyun' | 'unpkg';
  type?: 'anim' | 'flat' | 'modern' | 'mono' | '3d';
}
```
