import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { User2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useUserStore from '@/store/userStore'
import { removeItemFromLocalStorage } from '@/lib/utils'

const UserDropdown = () => {
    const removeUser = useUserStore((state) => state.removeUser);
    const router = useRouter();

    const handleLogout = ()=>{
        removeUser()
        removeItemFromLocalStorage('user');
        router.push("/")
    }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className='h-8 w-8 flex items-center justify-center rounded-full bg-main cursor-pointer hover:bg-main-hover hover:scale-110 transition duration-300 ease-in-out'>
                <User2 className='h-4 w-4 text-white'/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40 py-2'>
            <div className='flex flex-col items-start justify-center gap-y-3 px-2 text-sm text-main font-semibold w-full'>
                <Link href={'/my-blogs'}>
                    <span className='p-2 hover:bg-[#ADBC9F] hover:text-white rounded-xl w-full'>My blogs</span>
                </Link>
            
                <span onClick={handleLogout} className='p-2 cursor-pointer hover:bg-[#ADBC9F] hover:text-white rounded-xl w-full'>Logout</span>

            </div>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown