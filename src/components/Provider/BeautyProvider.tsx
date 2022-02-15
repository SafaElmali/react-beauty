import { Fragment } from 'react';
import GlobalStyles from 'components/Provider/GlobalStyles';

export interface BeautyProviderProps {
  children: React.ReactNode;
}

const BeautyProvider = ({ children }: BeautyProviderProps) => {
  return (
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  );
};

export default BeautyProvider;
