import LayoutOptions from 'config/layout';

import StyledContainer from './StyledContainer';

export interface ContainerProps extends LayoutOptions {
  children: React.ReactNode;
  centerContent?: boolean;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;

  return <StyledContainer {...props}>{children}</StyledContainer>;
};
