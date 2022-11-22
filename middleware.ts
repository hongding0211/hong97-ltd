import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  // TODO 暂时重定向到 about 页面
  if (url.pathname === '/') {
    url.pathname = '/about'
    return NextResponse.redirect(url)
  }
}
