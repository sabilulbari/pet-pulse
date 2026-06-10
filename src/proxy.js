import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const path = request.nextUrl.pathname;

  // Login করা user আবার login page এ যেতে পারবে না
  if (session && (path === "/login" || path === "/signUp")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  

  // Protected route check
  const isProtected = ["/my-requests", "/dashboard", "/dashboard/add-pets", "/dashboard/my-listings", "/dashboard/my-requests"].includes(path) || path.startsWith("/all-pets/");

  // Session না থাকলে login page এ পাঠাবে
  if (!session && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signUp", "/my-requests", "/dashboard/:path*", "/all-pets/:id*"],
};

// import { NextResponse } from "next/server";
// import { auth } from "./lib/auth";
// import { headers } from "next/headers";

// export  async function proxy(request) {

//    const session = await auth.api.getSession({
//         headers: await headers()
//     })

//   const path = request.nextUrl.pathname;

//   // User logged in এবং login page এ যেতে চাইছে
//   if (session && path === "/login") {
//     return NextResponse.redirect(new URL("/", request.url));
//     // চাইলে "/dashboard" ও দিতে পারো
//   }

//   // User logged in না এবং protected page এ যেতে চাইছে
//   if (!session && ["/my-requests", "/dashboard/add-pets", "/dashboard", "/dashboard/my-listings", "/dashboard/my-requests", "/all-pets/:id"].includes(path)) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/login", "/my-requests", "/dashboard", "/all-pets/:id", "/dashboard/add-pets", "/dashboard/my-listings", "/dashboard/my-requests",],
// };

// import { NextResponse } from "next/server";

// export function proxy(request) {
//   const session = false;
//   if (session) {
//     return NextResponse.next();
//   }
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: ["/my-requests","/all-pets/:id", "/dashboard"],
// };
