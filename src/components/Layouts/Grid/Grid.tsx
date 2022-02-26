import GridOptions from 'config/grid';
import LayoutOptions from 'config/layout';

import StyledGrid from './StyledGrid';

export interface GridProps extends LayoutOptions, GridOptions {
  children: React.ReactNode;
}

export const Grid = (props: GridProps) => {
  const { children } = props;

  return <StyledGrid {...props}>{children}</StyledGrid>;
};
