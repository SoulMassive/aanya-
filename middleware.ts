import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define protected paths
  const isProtectedPath = path.startsWith('/admin/dashboard')
  const isLoginPage = path === '/admin/login'

  const token = request.cookies.get('admin_token')?.value || ''

  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/admin/login', request.nextUrl))
  }

  if (isLoginPage && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
}
