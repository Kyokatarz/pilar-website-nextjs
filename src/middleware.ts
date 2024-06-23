import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const lang = pathname.split('/')[1]

  console.log('lang', lang)

  const allowedLangs = ['en', 'es']

  if (allowedLangs.includes(lang)) {
    return NextResponse.next()
  }

  const preferredLangs = request.headers.get('Accept-Language')
  const firstPreferredLang = preferredLangs?.split(',')[0]
  const firstPreferredLangWithoutRegion = firstPreferredLang?.split('-')[0]

  if (firstPreferredLang && !allowedLangs.includes(firstPreferredLang)) {
    const cloneUrl = request.nextUrl.clone()
    cloneUrl.pathname =
      `/${firstPreferredLangWithoutRegion}/` +
      pathname.split('/').slice(2).join('/')
    return NextResponse.redirect(cloneUrl)
  }

  return NextResponse.redirect('/en')
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
