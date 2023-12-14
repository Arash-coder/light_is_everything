import { notFound } from 'next/navigation';

// Can be imported from a shared config
const locales = ['en', 'fa'];
import './../globals.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface LocaleParams {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale }
}: LocaleParams) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale} dir="rtl">
      <body className="font-aria_regular">{children}</body>
    </html>
  );
}
