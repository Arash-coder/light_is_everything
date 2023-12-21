import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

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

  const messages = useMessages();

  return (
    <>

      <NextIntlClientProvider
        timeZone="Asia/Kabul"
        locale={locale}
        messages={messages}
      >
        {children}
      </NextIntlClientProvider>

    </>
  );
}
