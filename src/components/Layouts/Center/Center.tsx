import LayoutOptions from 'config/layout';

import { Flex } from '../Flex/Flex';

export interface CenterProps extends LayoutOptions {
  children: React.ReactNode;
}

export const Center = (props: CenterProps) => {
  const { children } = props;

  return (
    <Flex display={'flex'} justifyContent={'center'} alignItems={'center'} {...props}>
      {children}
    </Flex>
  );
};
