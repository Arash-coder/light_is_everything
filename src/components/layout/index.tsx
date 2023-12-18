'use client';

import Header from './header';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </>
  );
};

export default Layout;
