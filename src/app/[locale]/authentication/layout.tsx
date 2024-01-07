import { redirect } from 'next/navigation';

// hooks
import useAuth from '@/hooks/useAuth';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { isLogin } = useAuth();

  if (isLogin) {
    redirect('/dashboard/profile');
  } else {
    return (
      <>
        {children}
        <ToastContainer
          className="font-aria_sbold"
          bodyClassName="font-aria_sbold"
          rtl
        />
      </>
    );
  }
}
