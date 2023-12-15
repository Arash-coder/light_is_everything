export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className="font-aria_regular">{children}</body>
    </html>
  );
}
