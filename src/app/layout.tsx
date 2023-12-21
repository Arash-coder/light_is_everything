interface LocaleParams {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: LocaleParams) {
  return (
    <html lang={locale} dir="rtl">
      <body className="dark  bg-zinc-300 font-aria_regular">{children}</body>
    </html>
  );
}
