import React from 'react';
import {Courgette} from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';

const courgette = Courgette({ subsets: ["latin"], weight:["400"] })

const Navbar = () => {
  return (
    <div className='h-24 w-full bg-[#FF9BD2] flex justify-between items-center px-5'>
        <Link href={"/"}>
            <h1 className={cn(
                'text-4xl font-extrabold text-main',
                courgette.className
            )}>BLOGGER</h1>
        </Link>
        <div className='flex items-center justify-center gap-x-3'>
            <Link href={"/login"}>
                <Button className='bg-main text-white hover:bg-main-hover'>Login</Button>
            </Link>
        </div>
    </div>


  )
}

export default Navbar