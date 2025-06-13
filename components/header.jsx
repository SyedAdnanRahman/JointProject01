import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, FileText, LayoutDashboard, StarsIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GraduationCap } from 'lucide-react';
import { PenBox } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
  return (



    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
        <nav  className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={200} height={60} className='h-12 py-1 w-auto object-contain' />
            </Link>
            <div className="flex items-center space-x-2 md:space-x-4">
                <SignedIn>
                    <Link href="/dashboard">
                        <Button>
                            <LayoutDashboard className=" h-4 w-4" />
                            <span className='hidden md:block'>Industry Insights</span>
                            
                        </Button>
                    </Link>

                </SignedIn>

                    <DropdownMenu>
          <DropdownMenuTrigger  asChild>
            <Button>
              <StarsIcon className="h-4 w-4" />
              <span className='hidden md:block'> Growth Tools </span>
              <ChevronDown className=" h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>  
            <DropdownMenuItem>
              <Link href={"/resume"}
              className='flex items-center gap-2'
              >
                <FileText className="h-4 w-4" />
                <span className='hidden md:block'> Build Resume </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/growth-tools/cover-letter">Cover Letter</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/growth-tools/team">Team</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/growth-tools/subscription">Subscription</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>

            </div>

        </nav>

      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
       </header>

  );
};
export default Header;
 

 
 