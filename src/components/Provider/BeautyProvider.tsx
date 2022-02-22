import GlobalStyles from 'components/Provider/GlobalStyles';
import { Fragment } from 'react';

export interface BeautyProviderProps {
  children: React.ReactNode;
}

export const BeautyProvider = ({ children }: BeautyProviderProps) => {
  return (
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  );
};
