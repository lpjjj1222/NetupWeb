import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

import { i18n } from "~/config/i18n-config";


function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const locales = Array.from(i18n.locales);
  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );
  // return matchLocale(languages, locales, i18n.defaultLocale);
  //禁用语言匹配
  return 'en';
}


/**
 * 1、 if the request is public page and don't have locale, redirect to locale page
 * 2、 if the request is not public page and don't have locale, redirect to login page
 * 3、
 * @param request
 * @returns
 */
export default async function middleware(request: NextRequest) {

  

  const pathname = request.nextUrl.pathname;


  // 检查请求路径是否为 /download 或 /en/download
  if (pathname === '/download' || pathname === '/en/download') {
    // 执行重定向到指定页面，例如 /new-download
    return NextResponse.redirect("https://testflight.apple.com/join/QP0AJmDO");
  }

  // netup.social/global-link/xxx -> netup://global-link/xxx
  const screenMap = new Map<string, string>([
    ["home", "home"],
    ["user", "user"],
    ["discover", "discover"],
    ["event", "event"],
    ["chat", "chat"],
    ["profile", "profile"],
  ]
  );

  const linkPrefix = "netup://global-link/";

  if (pathname.startsWith("/en/global-link")) {
    // pathname: /en/global-link/user/id-xxx
    const pathList = pathname.split('/')
    // pathList: ["", "en", "global-link", "user", "id-xxx"]
    if (pathList.length > 3 && pathList[3]) {
      if (screenMap.has(pathList[3])) {
        // 带id跳转，如：跳netup://global-link/user/id-xxx
        // 不带id跳转，如：跳netup://global-link/user
        const suffix = pathList.slice(3).join('/')
        return NextResponse.redirect(
          `${linkPrefix}${suffix}`
          );
      }
    }
  };


  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }

}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
