import { redirect } from 'next/navigation';

// hooks
import useAuth from '@/hooks/useAuth';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { isLogin } = useAuth();

  if (isLogin) {
    redirect('/dashboard/profile');
  } else {
    return children;
  }
}
