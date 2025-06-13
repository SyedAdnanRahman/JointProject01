import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <div className="flex justify-end gap-4 p-4">



    <header>
        <nav>
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={200} height={60} className='h-12 py-1 w-auto object-contain' />
            </Link>
            <div className="">

                

            </div>

        </nav>


    </header>

    


      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
export default Header;
 

 
 