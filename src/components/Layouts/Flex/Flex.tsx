import FlexboxOptions from 'config/flexbox';

import StyledFlex from './StyledFlex';

export interface FlexboxProps extends FlexboxOptions {
  children: React.ReactNode;
}

const Flex = (props: FlexboxProps) => {
  const { children } = props;

  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export default Flex;
