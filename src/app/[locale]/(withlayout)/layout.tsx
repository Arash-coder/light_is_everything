import Layout from '@/components/layout';

interface LocaleParams {
  children: React.ReactNode;
}

export default function LocaleLayout({ children }: LocaleParams) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
