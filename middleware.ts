// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAccessToken, verifyRefreshToken } from './utils/checkAuth';
import jwt_decode from "jwt-decode";
import { refreshAccessToken } from './utils/refreshToken';

interface JwtPayload {
  email: string
  sub: number
  iat: number
  exp: number
}


export async function middleware(req: NextRequest) {
    const accessToken = req.cookies.get('accessToken')?.value;
    const refreshToken = req.cookies.get('refreshToken')?.value;

    const res = NextResponse.next();

    if(accessToken && refreshToken){
      const jwtPayload: JwtPayload = jwt_decode(accessToken);
      
      const validToken = 
        accessToken && 
        (await verifyAccessToken(accessToken).catch((err) => {
          console.log(err); 
        }));
  
      if(!validToken){
        try {
          const validRefreshToken = 
            refreshToken && 
            (await verifyRefreshToken(refreshToken).catch((err) => {
              console.log(err); 
            }));
          if(validRefreshToken){
            const newAccessToken = await refreshAccessToken(refreshToken, jwtPayload?.sub);
            res.cookies.set('accessToken', newAccessToken);
            return res;
          } else {
            console.log('Refresh token expired');
            throw new Error('Refresh token expired')
          }
        } catch (error) {
          return NextResponse.redirect(new URL('/login', req.url));
        }
      } else {
        if(req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register')){
          return NextResponse.redirect(new URL('/', req.url)); 
        }
      }
      console.log('TOKEN VALID', req.cookies.get('accessToken'));
    } else {
      if(req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register')){
        return 
      } else {
        return NextResponse.redirect(new URL('/login', req.url));
      }      
    }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/login', '/register', '/jobs/:path*', '/profile'],
}

