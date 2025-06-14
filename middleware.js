import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


const isProtectedRoute = createRouteMatcher => {
  return createRouteMatcher([
    '/dashboard(.*)',
    '/resume(.*)',
    '/ai-cover-letter(.*)',
    '/ai-job-description(.*)'
  ]);
};

 
export default clerkMiddleware(async (auth,req) => {
  // Check if the request is for a protected route
  const {userId} = await auth();

  if(!userId && isProtectedRoute(req)){
    // If the user is not authenticated and trying to access a protected route, redirect to sign-in
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();

  }

  return NextResponse.next();

});

export const config = {
  matcher: [
    // Skip static files and Next.js internals
    '/((?!_next|.*\\..*|favicon.ico).*)',
    // Run for API routes
    '/(api|trpc)(.*)',
  ],
};
