import { getFluentEmojiCDN } from '@lobehub/fluent-emoji';
import { Grid } from '@lobehub/ui';

export default () => {
  const mono = getFluentEmojiCDN('🤯', { type: 'mono' });
  const flat = getFluentEmojiCDN('🤯', { type: 'flat' });
  const modern = getFluentEmojiCDN('🤯', { type: 'modern' });
  const threeD = getFluentEmojiCDN('🤯', { type: '3d' });
  const anim = getFluentEmojiCDN('🤯', { type: 'anim' });

  return (
    <Grid maxItemWidth={48} rows={5}>
      <img alt="🤯" height={48} src={mono} />
      <img alt="🤯" height={48} src={flat} />
      <img alt="🤯" height={48} src={modern} />
      <img alt="🤯" height={48} src={threeD} />
      <img alt="🤯" height={48} src={anim} />
    </Grid>
  );
};
