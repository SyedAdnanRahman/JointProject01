import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip static files and Next.js internals
    '/((?!_next|.*\\..*|favicon.ico).*)',
    // Run for API routes
    '/(api|trpc)(.*)',
  ],
};
