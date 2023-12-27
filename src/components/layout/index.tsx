'use client';

import Header from './header';
import { Provider } from 'react-redux';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
