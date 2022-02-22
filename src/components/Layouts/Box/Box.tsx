import LayoutOptions from 'config/layout';

import StyledBox from './StyledBox';

export interface BoxProps extends LayoutOptions {
  children: React.ReactNode;
}

export const Box = (props: BoxProps) => {
  const { children } = props;

  return <StyledBox {...props}>{children}</StyledBox>;
};
