'use client';
import Layout from '@/components/layout';
import { ConfigProvider, Empty } from 'antd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LocaleParams {
  children: React.ReactNode;
}

export default function LocaleLayout({ children }: LocaleParams) {
  return (
    <ConfigProvider
      renderEmpty={() => <Empty description="اطلاعاتی یافت نشد" />}
      theme={{
        token: {
          fontFamily: 'aria_sbold'
        }
      }}
      direction="rtl"
    >
      <Layout>{children}</Layout>
      <ToastContainer
        className="font-aria_sbold"
        bodyClassName="font-aria_sbold"
        rtl
      />
    </ConfigProvider>
  );
}
