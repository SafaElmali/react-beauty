import GridOptions from 'config/grid';

import StyledGrid from './StyledGrid';

export interface GridProps extends GridOptions {
  children: React.ReactNode;
}

export const Grid = (props: GridProps) => {
  const { children } = props;

  return <StyledGrid {...props}>{children}</StyledGrid>;
};
