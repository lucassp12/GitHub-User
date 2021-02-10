import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { UserProvider } from '../contexts/user';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
};

export default MyApp;
