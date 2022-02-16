import GlobalStyles from 'components/Provider/GlobalStyles';
import { Fragment } from 'react';

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
