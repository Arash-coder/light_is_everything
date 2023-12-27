import { redirect } from 'next/navigation';
import DashboardLayout from '@/components/layoutDashboard';

// hooks
import useAuth from '@/hooks/useAuth';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { isLogin } = useAuth();

  if (isLogin) {
    return (
      <>
        <DashboardLayout>{children}</DashboardLayout>
      </>
    );
  } else {
    redirect('/authentication/sign-up');
  }
}
