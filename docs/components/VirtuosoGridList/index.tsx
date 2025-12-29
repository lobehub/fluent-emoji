import { Grid, GridProps } from '@lobehub/ui';
import { forwardRef, memo } from 'react';
import { VirtuosoGrid, VirtuosoGridProps } from 'react-virtuoso';

const GridList = forwardRef<HTMLDivElement, GridProps>((props, ref) => (
  <Grid gap={16} maxItemWidth={160} ref={ref} rows={5} {...props} />
));

const VirtuosoGridList = memo<VirtuosoGridProps<any, any>>(
  ({ data, initialItemCount, ...rest }) => {
    const count = data && data?.length >= 8 ? 8 : data?.length;
    const maxInitialItemCount =
      data && data?.length && initialItemCount && initialItemCount > data?.length
        ? data?.length
        : initialItemCount;
    return (
      <VirtuosoGrid
        components={{ List: GridList }}
        data={data}
        initialItemCount={maxInitialItemCount || count}
        overscan={400}
        {...rest}
      />
    );
  },
);

export default VirtuosoGridList;
