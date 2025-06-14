import { clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';





const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/resume(.*)',
    '/ai-cover-letter(.*)',
    '/ai-job-description(.*)'
  ]);

 
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
    // Skip Next.js internals and all static files, unless found in search params
        // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Run for API routes
    '/(api|trpc)(.*)',

    
  ],
};
