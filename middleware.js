import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host') || ''
  
  const subdomain = hostname.split('.')[0]
  
  const mainDomains = ['app', 'www', 'tradereadysites', 'localhost', 'localhost:3000']
  
  if (!mainDomains.includes(subdomain) && subdomain) {
    const url = request.nextUrl.clone()
    url.pathname = `/${subdomain}`
    return NextResponse.rewrite(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
