import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fa'],
  localeDetection: false,
  // Used when no locale matches
  defaultLocale: 'fa'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fa|en)/:path*']
  // matcher: [
  //   '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
  // ]
};