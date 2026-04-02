import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already on a localized path — do nothing
  if (pathname.startsWith("/ru")) return NextResponse.next();

  // Check user's saved language preference (set by LangToggle)
  const cookieLang = request.cookies.get("lang")?.value;
  if (cookieLang === "ru") {
    return NextResponse.redirect(
      new URL(`/ru${pathname === "/" ? "" : pathname}`, request.url),
      302
    );
  }

  // First-time visitor: use IP geolocation
  const country = request.headers.get("x-vercel-ip-country") ?? "";
  if (country === "RU") {
    const response = NextResponse.redirect(
      new URL(`/ru${pathname === "/" ? "" : pathname}`, request.url),
      302
    );
    response.cookies.set("lang", "ru", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images|.*\\..*).*)"],
};
