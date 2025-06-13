import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(request: NextRequest) {
  // const userCookie = getCookie("user", { req: request });
  // const { pathname } = request.nextUrl;

  // if (userCookie && pathname === "/auth") {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }

  // if (!userCookie && pathname === "/dashboard") {
  //   return NextResponse.redirect(new URL("/auth", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth", "/dashboard"],
};
