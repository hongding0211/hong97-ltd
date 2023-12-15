import sha256 from 'crypto-js/sha256'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { LOG_SECRET } from './config'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // TODO 暂时重定向到 about 页面
  if (url.pathname === '/') {
    url.pathname = '/about'

    const token = sha256(`${Math.floor(Date.now() / 600000)}${LOG_SECRET}`)
    fetch(`https://hong97.ltd/log/api/log?token=${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system: 'homepage',
        content: {
          headers: [...request.headers.keys()].reduce(
            (pre, cur) => ({
              ...pre,
              [cur]: request.headers.get(cur),
            }),
            {},
          ),
        },
      }),
    }).then()

    return NextResponse.redirect(url)
  }
}
