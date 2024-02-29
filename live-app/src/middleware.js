// pages/live/_middleware.js

import { NextResponse } from 'next/server';
import cookie from 'cookie';

export function middleware(request) {
  // Parse the cookie
  const parsedCookies = cookie.parse(request.headers.get('cookie') || '');

  // Check if the token cookie exists
  if (!parsedCookies.token || !parsedCookies.id) {
    // If the token is not present, redirect to the home page or login page
    return NextResponse.redirect(new URL('/', request.url));
  } 
  // If the token exists, continue to the requested page
  return NextResponse.next();
}

export const config = {
    matcher: [
      '/live',
    ]
  }