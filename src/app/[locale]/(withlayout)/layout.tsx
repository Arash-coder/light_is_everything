"use client"
import Layout from '@/components/layout';
import { ConfigProvider } from 'antd';

interface LocaleParams {
  children: React.ReactNode;
}

export default function LocaleLayout({ children }: LocaleParams) {
  return (
    <ConfigProvider direction='rtl'>
      <Layout>{children}</Layout>
    </ConfigProvider>
  );
}
