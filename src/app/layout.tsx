interface LocaleParams {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export const revalidate = 0; // revalidate at most every hour

export default function RootLayout({
  children,
  params: { locale }
}: LocaleParams) {
  return (
    <html lang={locale} dir="rtl">
      <body className="dark font-aria_regular">{children}</body>
    </html>
  );
}
// bg-zinc-300
