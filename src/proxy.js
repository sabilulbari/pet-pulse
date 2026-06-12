import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const path = request.nextUrl.pathname;

  if (session && (path === "/login" || path === "/signUp")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Protected route check
  const isProtected = ["/my-requests", "/dashboard", "/dashboard/add-pets", "/dashboard/my-listings", "/dashboard/my-requests"].includes(path) || path.startsWith("/all-pets/");

  if (!session && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-requests", "/login", "/signUp", "/dashboard", "/dashboard/:path", "/all-pets/:id"],
};
