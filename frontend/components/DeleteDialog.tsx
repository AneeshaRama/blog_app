import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import axios from 'axios'
import useUserStore from '@/store/userStore'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

interface Props{
    id: number,
    setBlogs: React.Dispatch<React.SetStateAction<never[]>>
}

const DeleteDialog = ({id, setBlogs}: Props) => {
    const user = useUserStore((state) => state.user);
    const router = useRouter()
    const handleDelete = async()=>{
        await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${user?.userId}/blog/${id}`).then((data)=>{
            toast.success("Deleted blog sucessfully!")
            setBlogs((prevBlogs) => prevBlogs.filter((blog: Blog) => blog.id !== id));
        })
    }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='bg-main hover:bg-main-hover'>Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            blog and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className='bg-main hover:bg-main-hover'>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteDialog