// frontend/proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const role = request.cookies.get("role")?.value; // set by the login page
  const path = request.nextUrl.pathname;

  if (path.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (path.startsWith("/students") && role !== "students") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (path.startsWith("/professors") && role !== "professors") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Only run on these pages
export const config = {
  matcher: ["/admin/:path*", "/students/:path*", "/professors/:path*"],
};