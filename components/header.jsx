import { headers } from 'next/headers'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
        <nav>
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={200} height={60} className='h-12 py-1 w-auto object-contain' />
            </Link>
            <div className="">

                

            </div>

        </nav>


    </header>
  )
}

export default Header