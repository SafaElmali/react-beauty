import FlexboxOptions from 'config/flexbox';
import LayoutOptions from 'config/layout';

import StyledFlex from './StyledFlex';

export interface FlexboxProps extends LayoutOptions, FlexboxOptions {
  children: React.ReactNode;
}

export const Flex = (props: FlexboxProps) => {
  const { children } = props;

  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export const HFlex = (props: FlexboxProps) => {
  const { children } = props;

  return (
    <Flex alignItems="center" flexDirection="row" {...props}>
      {children}
    </Flex>
  );
};

export const VFlex = (props: FlexboxProps) => {
  const { children } = props;

  return (
    <Flex alignItems="center" flexDirection="column" {...props}>
      {children}
    </Flex>
  );
};
