
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { defaultLocale, locales } from './i18n'

export const getLocale = (request: NextRequest) => {
  const acceptLanguage = request.headers.get('Accept-Language')
  let sourceLocale = (acceptLanguage?.split(',')[0] as string) || defaultLocale

  if (request.cookies.has('locale')) {
    sourceLocale = request.cookies.get('locale')?.value as string
  }

  return locales.includes(sourceLocale) ? sourceLocale : defaultLocale
}

export async function middleware() {
// export async function middleware(req: NextRequest) {

  // const { pathname } = req.nextUrl
  // const pathnameIsMissingLocale: boolean = locales.every(
  //   (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  // )
  //     const sourceLocale = getLocale(req)
  //     // if (pathname.startsWith(`/${sourceLocale}/admin`)) {
  //     //       const res = NextResponse.next()
  //     //       const database = createMiddlewareClient({ req, res})
  //     //       const { data } = await database.auth.getSession()
  //     //       if (!data?.session) {
  //     //         return NextResponse.redirect(new URL(`/${sourceLocale}`, req.url))
  //     //       }
  //     //     }
  // if (pathnameIsMissingLocale) {
  //   return NextResponse.redirect(new URL(`/${sourceLocale}/${pathname}`, req.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|assets|favicon.ico).*)', '/account/:path*'],
}
