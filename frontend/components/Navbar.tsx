"use client"
import React from 'react';
import {Courgette} from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import useUserStore from '@/store/userStore';
import UserDropdown from './UserDropdown';

const courgette = Courgette({ subsets: ["latin"], weight:["400"] })

const Navbar = () => {
    const user = useUserStore((state) => state.user);
  return (
    <div className='h-24 w-full bg-[#ADBC9F] flex justify-between items-center px-5'>
        <Link href={"/"}>
            <h1 className={cn(
                'text-4xl font-extrabold text-main',
                courgette.className
            )}>BLOGGER</h1>
        </Link>
        <div className='flex items-center justify-center gap-x-3'>
            {
                user === null && (
                    <Link href={"/login"}>
                        <Button className='bg-main text-white hover:bg-main-hover'>Login</Button>
                    </Link>
                ) 
            }
            {
                user !== null && (
                    <div className='flex items-center justify-center gap-x-2'>
                        <UserDropdown/>
                        <span className='text-sm font-semibold text-main cursor-pointer'>{user.firstName}</span>
                    </div>
                )
            }
        </div>
    </div>


  )
}

export default Navbar